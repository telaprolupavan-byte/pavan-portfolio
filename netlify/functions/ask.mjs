// "Ask about Pavan" — a small RAG endpoint. Retrieves the most relevant portfolio
// documents for the question (BM25, netlify/lib/knowledge.mjs) and has Claude
// answer from them with citations. Needs ANTHROPIC_API_KEY in the Netlify env.
//
// POST /.netlify/functions/ask  { messages: [{ role: "user" | "assistant", content: string }] }
//   -> { answer: string, sources: [{ title, url }] }

import Anthropic from "@anthropic-ai/sdk";
import { profile } from "../../src/data/portfolio.js";
import { retrieve } from "../lib/knowledge.mjs";

const MODEL = process.env.ASSISTANT_MODEL || "claude-opus-5";
const MAX_TURNS = 12;
const MAX_QUESTION_CHARS = 600;
const MAX_ANSWER_CHARS = 4000;

// Best-effort per-IP limit. Instances are short-lived, so this only stops bursts;
// set a monthly spend limit on the API key in the Anthropic Console as the real cap.
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map();

const SYSTEM = `You are the assistant on ${profile.name}'s portfolio website. Visitors are mostly recruiters and hiring managers asking about Pavan's experience, projects and skills.

Answer only from the portfolio documents attached to the latest question. If they don't cover what was asked, say you don't have that detail and suggest emailing Pavan at ${profile.email}. Never invent employers, dates, numbers, skills or opinions he hasn't stated. Salary, visa and availability questions are for Pavan directly — point to his email.

Refer to him as Pavan, in the third person. Keep answers short and concrete: two to five sentences, or a few "- " bullets when listing. Plain text only, no markdown headings or bold.

You only answer questions about Pavan and his work. For anything else, including general coding help, briefly say that's outside what you can help with here.`;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function parseMessages(body) {
  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_TURNS) return null;
  for (const [i, message] of messages.entries()) {
    const expected = i % 2 === 0 ? "user" : "assistant";
    if (message?.role !== expected || typeof message.content !== "string") return null;
    const limit = expected === "user" ? MAX_QUESTION_CHARS : MAX_ANSWER_CHARS;
    if (!message.content.trim() || message.content.length > limit) return null;
  }
  if (messages.at(-1).role !== "user") return null;
  return messages;
}

export default async (req, context) => {
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  if (!process.env.ANTHROPIC_API_KEY) {
    return json({ error: "not_configured", message: "The assistant isn't set up yet." }, 503);
  }

  const ip = context?.ip ?? req.headers.get("x-nf-client-connection-ip") ?? "unknown";
  if (rateLimited(ip)) {
    return json({ error: "rate_limited", message: "That's a lot of questions — please try again in a few minutes." }, 429);
  }

  let messages;
  try {
    messages = parseMessages(await req.json());
  } catch {
    messages = null;
  }
  if (!messages) {
    return json({ error: "bad_request", message: `Please keep questions under ${MAX_QUESTION_CHARS} characters.` }, 400);
  }

  // Retrieve on the latest question plus the one before it, so follow-ups
  // like "what stack did it use?" still find the project being discussed.
  const userTurns = messages.filter((message) => message.role === "user").map((message) => message.content);
  const docs = retrieve(userTurns.slice(-2).join(" "));

  const question = messages.at(-1).content;
  const apiMessages = [
    ...messages.slice(0, -1),
    {
      role: "user",
      content: [
        ...docs.map((doc) => ({
          type: "document",
          source: { type: "text", media_type: "text/plain", data: doc.text },
          title: doc.title,
          citations: { enabled: true },
        })),
        { type: "text", text: question },
      ],
    },
  ];

  try {
    const client = new Anthropic();
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 2000, // short answers by design; also caps cost per question
      system: SYSTEM,
      messages: apiMessages,
      output_config: { effort: "low" },
      // Server-side fallback: if a request is declined, Anthropic retries it on its recommended model.
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
    });

    if (response.stop_reason === "refusal") {
      return json({
        answer: `I can't help with that one. Ask me about Pavan's experience, projects or skills — or email him at ${profile.email}.`,
        sources: [],
      });
    }

    const textBlocks = response.content.filter((block) => block.type === "text");
    const answer = textBlocks.map((block) => block.text).join("").trim();

    const cited = new Set();
    for (const block of textBlocks) {
      for (const citation of block.citations ?? []) {
        if ("document_index" in citation) cited.add(citation.document_index);
      }
    }
    const sources = [...cited]
      .sort((a, b) => a - b)
      .map((i) => docs[i])
      .filter(Boolean)
      .map((doc) => ({ title: doc.title, url: doc.url }));

    return json({ answer: answer || "Sorry, I couldn't put an answer together. Please try rephrasing.", sources });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return json({ error: "busy", message: "The assistant is busy right now — please try again shortly." }, 429);
    }
    if (error instanceof Anthropic.APIError) {
      console.error(`Anthropic API error ${error.status}:`, error.message);
      return json({ error: "upstream", message: "The assistant is unavailable right now." }, 502);
    }
    console.error(error);
    return json({ error: "internal", message: "Something went wrong." }, 500);
  }
};
