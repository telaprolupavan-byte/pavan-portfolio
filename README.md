# Pavan Sagar Telaprolu — Portfolio

Personal portfolio for Pavan Sagar Telaprolu, AI/ML Engineer building machine learning, generative AI (RAG, LLM) and MLOps systems.

Built with React 19, Vite and React Router, with icons from `lucide-react`.

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
```

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR       |
| `npm run build`   | Build the production bundle into `dist/` |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Run ESLint                               |

## Project structure

```
src/
  main.jsx                   Router setup ("/" and "/projects/:slug") and the assistant widget
  App.jsx                    Home page
  App.css                    Styles for the home page, case studies and assistant
  data/portfolio.js          All content: profile, experience, projects, education
  pages/ProjectCaseStudy.jsx Case study page, rendered from `projects`
  components/AskPavan.jsx    "Ask AI about me" chat widget
  assets/                    Images
netlify/
  functions/ask.mjs          Assistant endpoint (Claude, with citations)
  lib/knowledge.mjs          Splits portfolio.js into documents and ranks them with BM25
public/                      Static files (favicon, link-preview image, hosting rewrites)
```

All content lives in `src/data/portfolio.js`. The site and the assistant both read it, so an edit there updates the pages and what the assistant knows. To add a project, add an entry to `projects`; the first entry is the flagship (currently NERO), and its `accent` and `note` fields drive the flagship diagram on the home page.

### Case study sections

Every project needs `summary`, `tags`, `description`, `overview`, `context`, `tech`, `focus` and `architecture`. These optional fields add sections to its case study page, and the assistant indexes each one as its own document:

| Field        | Section           | Shape                                               |
| ------------ | ----------------- | --------------------------------------------------- |
| `story`      | Builder's note    | `{ title, paragraphs: [] }`                         |
| `results`    | Results           | `[{ label, value }]`                                |
| `pipeline`   | How it works      | `[{ title, question, text }]`                       |
| `principles` | Design principles | `[{ title, text }]`                                 |
| `evaluation` | AI evaluation     | `{ intro, rows: [{ capability, metric, value }], findings }` |
| `roadmap`    | Roadmap           | `[string]`                                          |
| `repo`       | "View code" links | GitHub URL                                          |

Section numbers adjust automatically to the sections a project has.

## "Ask AI about me" assistant

A small retrieval-augmented chat: for each question, `netlify/lib/knowledge.mjs` ranks the portfolio documents with BM25, and `netlify/functions/ask.mjs` sends the best matches to Claude as citable documents. Answers come only from the portfolio, and the widget links the sources Claude cited.

To turn it on, add an Anthropic API key in Netlify under **Site configuration → Environment variables** as `ANTHROPIC_API_KEY`, then redeploy. Without it, the widget tells visitors the assistant is offline and shows the contact email. Optional: `ASSISTANT_MODEL` overrides the model (default `claude-opus-5`).

The endpoint caps question length and history, and rate-limits each IP on a best-effort basis. Set a monthly spend limit on the key in the Anthropic Console as the real cost cap.

Locally, `npm run dev` serves the site only. Use `npx netlify dev` to run the site and the function together.

## Deployment

The site is a single-page app, so the host must serve `index.html` for every path so that case study URLs such as `/projects/kaivan` work on refresh.

- **Vercel**: handled by `vercel.json`.
- **Netlify** (and Cloudflare Pages): handled by `public/_redirects`.
- **Other hosts**: configure a rewrite of all paths to `/index.html`.
