# Pavan Sagar Telaprolu — Portfolio

Personal portfolio for Pavan Sagar Telaprolu, Software Engineer working across AI/ML, backend systems, data and cloud infrastructure.

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
  main.jsx                   Router setup ("/" and "/projects/:slug")
  App.jsx                    Home page and its content (experience, stack, projects, education)
  App.css                    Styles for the home and case study pages
  pages/ProjectCaseStudy.jsx Case study page and per-project content, keyed by slug
  assets/                    Images
public/                      Static files copied as-is (favicon, hosting rewrites)
```

To add a project, add an entry to `projects` in `src/App.jsx` and a matching entry, keyed by the same `slug`, to `projectData` in `src/pages/ProjectCaseStudy.jsx`.

## Deployment

The site is a single-page app, so the host must serve `index.html` for every path so that case study URLs such as `/projects/kaivan` work on refresh.

- **Vercel**: handled by `vercel.json`.
- **Netlify** (and Cloudflare Pages): handled by `public/_redirects`.
- **Other hosts**: configure a rewrite of all paths to `/index.html`.
