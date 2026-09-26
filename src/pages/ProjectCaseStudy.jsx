import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/portfolio.js";

const longestWord = (title) => Math.max(...title.split(" ").map((word) => word.length));
const pad = (index) => String(index + 1).padStart(2, "0");

// "WHY I BUILT NERO" -> WHY I BUILT / NERO. (the last word on its own line, in red)
function TwoToneHeading({ text }) {
  const words = text.split(" ");
  return (
    <h2>
      {words.slice(0, -1).join(" ")}
      <br />
      <span>{words.at(-1)}.</span>
    </h2>
  );
}

function ProjectCaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const index = projects.findIndex((item) => item.slug === slug);
  const project = index === -1 ? null : { ...projects[index], number: String(index + 1).padStart(2, "0") };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="case-study">
        <div className="case-final">
          <h2>PROJECT NOT FOUND.</h2>

          <button onClick={() => navigate("/")}>
            <ArrowLeft size={16} />
            BACK TO PORTFOLIO
          </button>
        </div>
      </div>
    );
  }

  // Section numbers shift with the optional sections a project has.
  let sectionNumber = 2;
  const label = (name) => `${String(++sectionNumber).padStart(2, "0")} / ${name}`;

  return (
    <div className="case-study">
      <nav className="case-nav">
        <button onClick={() => navigate("/")}>
          <ArrowLeft size={16} />
          BACK TO PORTFOLIO
        </button>

        <span>
          {project.number} / {project.category}
        </span>
      </nav>

      <main>
        <section className="case-hero">
          <div className="label">
            01 / PROJECT {project.number}
          </div>

          {project.logo && (
            <img
              className={`case-logo ${project.logoSize === "large" ? "case-logo-large" : ""}`}
              src={project.logo}
              alt={`${project.title} logo`}
            />
          )}

          <small>{project.category}</small>

          <h1 style={{ "--title-chars": longestWord(project.title) + 1 }}>
            {slug === "kaivan" ? (
              <>
                KAI<span>VAN.</span>
              </>
            ) : (
              <>
                {project.title}<span>.</span>
              </>
            )}
          </h1>

          <div className="case-date">
            {project.dates}
          </div>

          <p>{project.description}</p>

          {project.repo && (
            <a className="case-code-link" href={project.repo} target="_blank" rel="noreferrer">
              VIEW CODE ON GITHUB <ArrowUpRight size={14} />
            </a>
          )}
        </section>

        <section className="case-section">
          <div className="label">02 / OVERVIEW</div>

          <div className="case-grid">
            <h2>
              {slug === "kaivan" ? (
                <>
                  ORIGIN
                  <br />
                  <span>& PURPOSE.</span>
                </>
              ) : (
                <>
                  THE
                  <br />
                  <span>PROBLEM.</span>
                </>
              )}
            </h2>

            <div>
              <p>{project.overview}</p>

              <p>
                {project.context}
              </p>
            </div>
          </div>
        </section>

        {project.story && (
          <section className="case-section">
            <div className="label">{label("BUILDER'S NOTE")}</div>

            <div className="case-grid">
              <TwoToneHeading text={project.story.title} />

              <div>
                {project.story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {project.results && (
          <section className="case-section">
            <div className="label">{label("RESULTS")}</div>

            <div className="case-tech-grid">
              {project.results.map((result) => (
                <div key={result.label}>
                  <span>{result.label}</span>
                  <h3>{result.value}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.pipeline && (
          <section className="case-section">
            <div className="label">{label("HOW IT WORKS")}</div>

            <ol className="pipeline-grid">
              {project.pipeline.map((stage, index) => (
                <li key={stage.title}>
                  <span className="pipeline-step">STAGE {pad(index)}</span>
                  <h3>{stage.title}</h3>
                  <small>{stage.question}</small>
                  <p>{stage.text}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.principles && (
          <section className="case-section">
            <div className="label">{label("DESIGN PRINCIPLES")}</div>

            <div className="principles-grid">
              {project.principles.map((principle, index) => (
                <div key={principle.title}>
                  <span>{pad(index)}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.evaluation && (
          <section className="case-section">
            <div className="label">{label("AI EVALUATION")}</div>

            <p className="case-lead">{project.evaluation.intro}</p>

            <div className="eval-table" role="table" aria-label="Evaluation baseline">
              <div className="eval-row eval-head" role="row">
                <span role="columnheader">CAPABILITY</span>
                <span role="columnheader">METRIC</span>
                <span role="columnheader">BASELINE</span>
              </div>

              {project.evaluation.rows.map((row) => (
                <div className="eval-row" role="row" key={row.metric}>
                  <span role="cell">{row.capability}</span>
                  <p role="cell">{row.metric}</p>
                  <strong role="cell">{row.value}</strong>
                </div>
              ))}
            </div>

            <p className="case-lead case-note">{project.evaluation.findings}</p>
          </section>
        )}

        <section className="case-section">
          <div className="label">{label("TECHNOLOGY")}</div>

          <div className="case-tech-grid">
            {project.tech.map((technology) => (
              <div key={technology}>
                <span>TECHNOLOGY</span>
                <h3>{technology}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="label">
            {label(slug === "kaivan" ? "ENGINEERING FOCUS" : "PROJECT FOCUS")}
          </div>

          <div className="focus-list">
            {project.focus.map((item, index) => (
              <div key={item.title}>
                <span>
                  {pad(index)}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="label">{label(slug === "kaivan" ? "ARCHITECTURE" : "SYSTEM")}</div>

          <div className={`architecture large ${slug === "kaivan" ? "kaivan-architecture" : ""}`}>
            {project.architecture.map((step, index) => (
              <Fragment key={step}>
                {index > 0 && <span>→</span>}
                <div>{step}</div>
              </Fragment>
            ))}
          </div>
        </section>

        {project.roadmap && (
          <section className="case-section">
            <div className="label">{label("ROADMAP")}</div>

            <ol className="roadmap-list">
              {project.roadmap.map((item, index) => (
                <li key={item}>
                  <span>{pad(index)}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className="case-final">
          <div className="label">{label("NEXT")}</div>

          <h2>
            BUILD.
            <br />
            <span>SHIP.</span>
          </h2>

          <button onClick={() => navigate("/")}>
            RETURN TO PORTFOLIO
            <ArrowUpRight size={16} />
          </button>
        </section>
      </main>
    </div>
  );
}

export default ProjectCaseStudy;
