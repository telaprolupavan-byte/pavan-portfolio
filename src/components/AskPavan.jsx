import { ArrowUpRight, Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/portfolio.js";

const ENDPOINT = "/.netlify/functions/ask";
const MAX_CHARS = 600;
const MAX_HISTORY = 11; // odd, so the history sent always starts with a user turn

const SUGGESTIONS = [
  "What has Pavan built with RAG and LLMs?",
  "What did he do at Prudential?",
  "Which ML models has he trained in production?",
  "What's his MLOps experience?",
];

const OFFLINE = `The assistant is offline right now. You can reach Pavan directly at ${profile.email}.`;

// Same-site source links stay in the app; others open in a new tab.
function SourceLink({ source }) {
  if (source.url.startsWith(profile.site)) {
    const path = source.url.slice(profile.site.length) || "/";
    if (path.startsWith("/#")) return <a href={path}>{source.title}</a>;
    return <Link to={path}>{source.title}</Link>;
  }
  return (
    <a href={source.url} target="_blank" rel="noreferrer">
      {source.title}
    </a>
  );
}

function AskPavan() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const ask = async (text) => {
    const question = text.trim();
    if (!question || loading) return;

    const conversation = [...messages, { role: "user", content: question }];
    setMessages(conversation);
    setDraft("");
    setLoading(true);

    // Only successful exchanges go back to the model as history.
    const history = conversation.filter((message) => !message.error).slice(-MAX_HISTORY);

    let reply;
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: history.map(({ role, content }) => ({ role, content })) }),
      });
      const data = await response.json().catch(() => ({}));
      reply = response.ok
        ? { role: "assistant", content: data.answer, sources: data.sources ?? [] }
        : { role: "assistant", content: response.status === 404 || response.status === 503 ? OFFLINE : data.message || OFFLINE, error: true };
    } catch {
      reply = { role: "assistant", content: OFFLINE, error: true };
    }

    setMessages((current) => {
      const next = [...current, reply];
      // Drop the unanswered question too, so history keeps alternating user / assistant.
      if (reply.error) next[next.length - 2] = { ...next[next.length - 2], error: true };
      return next;
    });
    setLoading(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    ask(draft);
  };

  return (
    <>
      <button
        className={`ask-launcher ${open ? "ask-launcher-hidden" : ""}`}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <Sparkles size={14} />
        ASK AI ABOUT ME
      </button>

      {open && (
        <section className="ask-panel" role="dialog" aria-label="Ask about Pavan">
          <header className="ask-header">
            <div>
              <strong>ASK ABOUT PAVAN</strong>
              <span>RAG OVER THIS PORTFOLIO · ANSWERS BY CLAUDE</span>
            </div>
            <button className="ask-close" onClick={() => setOpen(false)} aria-label="Close">
              <X size={16} />
            </button>
          </header>

          <div className="ask-messages" ref={listRef} aria-live="polite">
            {messages.length === 0 && (
              <div className="ask-intro">
                <p>
                  Ask anything about Pavan&apos;s experience, projects or skills. Answers come only from
                  this portfolio, with sources.
                </p>
                <div className="ask-suggestions">
                  {SUGGESTIONS.map((suggestion) => (
                    <button key={suggestion} onClick={() => ask(suggestion)}>
                      {suggestion}
                      <ArrowUpRight size={12} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`ask-message ask-${message.role} ${message.role === "assistant" && message.error ? "ask-error" : ""}`}
              >
                <p>{message.content}</p>
                {message.sources?.length > 0 && (
                  <div className="ask-sources">
                    <span>SOURCES</span>
                    {message.sources.map((source) => (
                      <SourceLink key={source.url + source.title} source={source} />
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="ask-message ask-assistant ask-loading">
                <p>
                  SEARCHING PORTFOLIO<i></i>
                  <i></i>
                  <i></i>
                </p>
              </div>
            )}
          </div>

          <form className="ask-form" onSubmit={onSubmit}>
            <input
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              maxLength={MAX_CHARS}
              placeholder="Ask about Pavan's work…"
              aria-label="Your question"
            />
            <button type="submit" disabled={!draft.trim() || loading} aria-label="Send">
              <Send size={15} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default AskPavan;
