// Retrieval for the "Ask about Pavan" assistant: the portfolio content is split
// into small documents and ranked against the question with BM25. The top matches
// are sent to Claude as citable documents, so answers are grounded in the site.

import { education, experience, mindset, profile, projects } from "../../src/data/portfolio.js";

const ACRONYMS = { ai: "AI", ml: "ML", rag: "RAG", lfras: "LFRAS", llm: "LLM", api: "API", njit: "NJIT", ddos: "DDoS", unv: "UNV", iway: "iWay", nero: "NERO", ats: "ATS" };

const titleCase = (text) =>
  text
    .toLowerCase()
    .replace(/(^|[\s/(—-])(\p{L})/gu, (_, sep, ch) => sep + ch.toUpperCase())
    .replace(/\p{L}+/gu, (word) => ACRONYMS[word.toLowerCase()] ?? word);

function buildDocuments() {
  const docs = [
    {
      id: "profile",
      title: "Profile",
      url: profile.linkedin,
      pinned: true,
      text: [
        `${profile.name} — ${profile.headline}`,
        `Location: ${profile.location}. Currently: ${profile.current}.`,
        ...profile.about,
        `Contact: ${profile.email}. LinkedIn: ${profile.linkedin}. GitHub: ${profile.github}.`,
      ].join("\n"),
    },
    {
      id: "skills",
      title: "Skills",
      url: `${profile.site}/#experience`,
      text: `Skills and tools: ${profile.skills.join(", ")}.`,
    },
  ];

  for (const job of experience) {
    docs.push({
      id: `experience-${job.number}`,
      title: `${titleCase(job.role)} — ${titleCase(job.company)}`,
      url: `${profile.site}/#experience`,
      text: [
        `${titleCase(job.role)} at ${titleCase(job.company)} (${job.dates}; ${job.location}).`,
        job.description,
        ...job.highlights.map((point) => `- ${point}`),
        `Tech: ${job.tech.join(", ")}.`,
      ].join("\n"),
    });
  }

  for (const project of projects) {
    docs.push({
      id: `project-${project.slug}`,
      title: titleCase(project.listTitle),
      url: `${profile.site}/projects/${project.slug}`,
      text: [
        `Project: ${project.listTitle} (${project.dates}; ${project.category}).`,
        project.description,
        project.overview,
        project.context,
        ...(project.results ?? []).map((result) => `Result — ${result.label}: ${result.value}.`),
        ...project.focus.map((item) => `${item.title}: ${item.text}`),
        `Tech: ${project.tech.join(", ")}.`,
        project.repo ? `Code: ${project.repo}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    // Deeper case study sections get their own documents, so a question about
    // one of them retrieves it without the whole project competing for space.
    const name = titleCase(project.title);
    const url = `${profile.site}/projects/${project.slug}`;
    const sections = [
      project.story && {
        id: "story",
        title: `${name} — why Pavan built it`,
        text: [`${titleCase(project.story.title)}, in Pavan's own words:`, ...project.story.paragraphs].join("\n"),
      },
      project.pipeline && {
        id: "pipeline",
        title: `${name} — how it works`,
        text: [
          `${name} pipeline stages, in order:`,
          ...project.pipeline.map((stage, i) => `${i + 1}. ${titleCase(stage.title)} (${stage.question.toLowerCase()}): ${stage.text}`),
        ].join("\n"),
      },
      project.principles && {
        id: "principles",
        title: `${name} — design principles`,
        text: project.principles.map((item) => `${titleCase(item.title)}: ${item.text}`).join("\n"),
      },
      project.evaluation && {
        id: "evaluation",
        title: `${name} — AI evaluation`,
        text: [
          project.evaluation.intro,
          ...project.evaluation.rows.map((row) => `${titleCase(row.capability)} — ${row.metric}: ${row.value}.`),
          project.evaluation.findings,
          ...(project.roadmap ?? []).map((item) => `Next: ${item}`),
        ].join("\n"),
      },
    ].filter(Boolean);

    for (const section of sections) {
      docs.push({ id: `project-${project.slug}-${section.id}`, title: section.title, url, text: section.text });
    }
  }

  docs.push({
    id: "education",
    title: "Education",
    url: `${profile.site}/#education`,
    text: "Education — where Pavan studied (university, degrees, school, college):\n" + education
      .map((item) => `${titleCase(item.degree)} in ${titleCase(item.field)}, ${titleCase(item.school)} (${item.dates}).`)
      .join("\n"),
  });

  docs.push({
    id: "mindset",
    title: "How Pavan works",
    url: `${profile.site}/#mindset`,
    text: mindset.map((item) => `${titleCase(item.title)}: ${item.text}`).join("\n"),
  });

  return docs;
}

const STOPWORDS = new Set(
  "a an and are as at be by did do does for from has have he his how i in is it me of on or so tell that the this to was what when where which who why with you your about pavan pavans".split(" "),
);

// Light suffix stripping so "study" matches "studied" and "model" matches "models".
const stem = (token) =>
  token.length <= 4 ? token : token.replace(/ie[sd]$/, "y").replace(/(ing|ed)$/, "").replace(/s$/, "");

const tokenize = (text) =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}+#.]+/gu, " ")
    .split(" ")
    .map((token) => token.replace(/^\.+|\.+$/g, ""))
    .filter((token) => token && !STOPWORDS.has(token))
    .map(stem);

export const documents = buildDocuments();

const index = documents.map((doc) => {
  const terms = tokenize(`${doc.title} ${doc.text}`);
  const tf = new Map();
  for (const term of terms) tf.set(term, (tf.get(term) ?? 0) + 1);
  return { doc, tf, length: terms.length };
});

const avgLength = index.reduce((sum, entry) => sum + entry.length, 0) / index.length;

const docFrequency = new Map();
for (const entry of index) {
  for (const term of entry.tf.keys()) docFrequency.set(term, (docFrequency.get(term) ?? 0) + 1);
}

function bm25(entry, queryTerms, k1 = 1.2, b = 0.75) {
  let score = 0;
  for (const term of queryTerms) {
    const tf = entry.tf.get(term);
    if (!tf) continue;
    const df = docFrequency.get(term);
    const idf = Math.log(1 + (index.length - df + 0.5) / (df + 0.5));
    score += idf * ((tf * (k1 + 1)) / (tf + k1 * (1 - b + (b * entry.length) / avgLength)));
  }
  return score;
}

// The profile document is always included; the rest are the top BM25 matches.
export function retrieve(query, limit = 5) {
  const queryTerms = [...new Set(tokenize(query))];
  const ranked = index
    .filter((entry) => !entry.doc.pinned)
    .map((entry) => ({ doc: entry.doc, score: bm25(entry, queryTerms) }))
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((match) => match.doc);

  const pinned = documents.filter((doc) => doc.pinned);
  // With no keyword overlap (e.g. "tell me about him"), fall back to the overview docs.
  const fallback = ranked.length ? [] : documents.filter((doc) => doc.id === "skills" || doc.id === "experience-01");
  return [...pinned, ...ranked, ...fallback];
}
