import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/portfolio.js";

const longestWord = (title) => Math.max(...title.split(" ").map((word) => word.length));

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

  // Section numbers shift when a project has a results section.
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
                  {String(index + 1).padStart(2, "0")}
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
