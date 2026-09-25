import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import heroImage from "./assets/pavan.webp";
import { education, experience, mindset, profile, projects } from "./data/portfolio.js";

const aboutPanels = [
  { number: "01", title: "MACHINE LEARNING", items: ["PREDICTIVE MODELS", "FEATURE ENGINEERING", "MODEL EVALUATION"] },
  { number: "02", title: "GENERATIVE AI", items: ["RAG", "VECTOR SEARCH", "LLM APPLICATIONS"] },
  { number: "03", title: "MLOPS", items: ["FASTAPI SERVING", "DOCKER / CI/CD", "MONITORING"] },
];

const [flagship, ...otherProjects] = projects;

function ProjectLinks({ project, onOpen, iconSize }) {
  return (
    <div className="case-links">
      <button className="case-link" onClick={onOpen}>
        VIEW CASE STUDY <ArrowUpRight size={iconSize} />
      </button>
      {project.repo && (
        <a className="case-link" href={project.repo} target="_blank" rel="noreferrer">
          VIEW CODE <ArrowUpRight size={iconSize} />
        </a>
      )}
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Tilt the hero portrait toward the pointer (in degrees, via CSS variables).
  const tiltPortrait = (event) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;
    event.currentTarget.style.setProperty("--tilt-y", (x * 16).toFixed(2));
    event.currentTarget.style.setProperty("--tilt-x", (y * -12).toFixed(2));
  };

  const resetPortrait = (event) => {
    event.currentTarget.style.setProperty("--tilt-x", "0");
    event.currentTarget.style.setProperty("--tilt-y", "0");
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <div className="grain" aria-hidden="true"></div>

      {/* 01 / NAVIGATION */}

      <nav className="nav">
        <div className="nav-left">
          <button className="logo" onClick={() => scrollTo("home")} aria-label="Back to home">
            PT<span className="logo-dot">.</span>
          </button>

          <div className="nav-utility">
            <a href="https://github.com/telaprolupavan-byte" target="_blank" rel="noreferrer">
              GITHUB<span className="arrow-out">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/pavan-telaprolu-52491694/" target="_blank" rel="noreferrer">
              LINKEDIN<span className="arrow-out">↗</span>
            </a>
            <a href="mailto:telaprolupavan@gmail.com">
              EMAIL<span className="arrow-out">↗</span>
            </a>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <button onClick={() => scrollTo("projects")}>WORK</button>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("experience")}>EXPERIENCE</button>
        </div>

        <div className="nav-right">
          <button className="nav-cta" onClick={() => scrollTo("contact")}>
            LET&apos;S TALK
            <ArrowUpRight size={13} />
          </button>
          <button
            className="nav-burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <main>
        {/* 01 / HERO */}

        <section id="home" className="hero" onPointerMove={tiltPortrait} onPointerLeave={resetPortrait}>
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="tick"></span>
                AI/ML ENGINEER / BUILDER
              </div>

              <h1 className="hero-title">
                <span className="hero-line">PAVAN</span>
                <span className="hero-line hero-line-portrait">
                  SAGAR
                  <span className="hero-portrait" aria-hidden="true">
                    <span className="hero-portrait-tilt">
                      <img src={heroImage} alt="" width="1000" height="1007" decoding="async" fetchPriority="high" />
                    </span>
                  </span>
                </span>
                <span className="hero-line red">TELAPROLU</span>
              </h1>

              <div className="hero-tags">
                GENERATIVE AI <i>•</i> MACHINE LEARNING <i>•</i> MLOPS
              </div>

              <p className="hero-desc">
                I build machine learning and LLM applications that make it to
                production — from predictive models and RAG pipelines to the
                APIs, containers and monitoring that keep them running.
              </p>

              <div className="hero-ctas">
                <button className="btn btn-light" onClick={() => scrollTo("projects")}>
                  VIEW PROJECTS
                  <ArrowDownRight size={15} />
                </button>
                <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
                  CONTACT ME
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-glow" aria-hidden="true"></div>
              <div className="interface-back" aria-hidden="true"></div>

              <div className="interface-panel glass">
                <div className="interface-top">
                  <div className="interface-id">
                    <strong>PAVAN TELAPROLU</strong>
                    <span>AI/ML ENGINEER</span>
                  </div>
                  <div className="interface-status">
                    <span>STATUS</span>
                    <strong>
                      <i className="status-dot"></i>
                      ACTIVE
                    </strong>
                  </div>
                </div>

                <div className="interface-label">SYSTEM / ML PIPELINE</div>

                <div className="interface-diagram">
                  <div className="diagram-block">DATA</div>
                  <span className="diagram-link"></span>
                  <div className="diagram-block">FEATURES</div>
                  <span className="diagram-link"></span>
                  <div className="diagram-block accent">MODEL</div>
                  <span className="diagram-link"></span>
                  <div className="diagram-block">API</div>
                </div>

                <div className="interface-rows">
                  <div className="interface-row">
                    <span>ML</span>
                    <i></i>
                    <em>XGBOOST / SCIKIT-LEARN</em>
                  </div>
                  <div className="interface-row">
                    <span>GENAI</span>
                    <i></i>
                    <em>RAG / PGVECTOR</em>
                  </div>
                  <div className="interface-row">
                    <span>MLOPS</span>
                    <i></i>
                    <em>FASTAPI / DOCKER</em>
                  </div>
                </div>

                <div className="interface-stack">
                  <span>PYTHON</span>
                  <span>PYTORCH</span>
                  <span>GPT-4</span>
                  <span>MLFLOW</span>
                  <span>SNOWFLAKE</span>
                  <span>AWS</span>
                </div>

                <span className="panel-base" aria-hidden="true"></span>

                <div className="profile-chip glass">
                  <div className="profile-mark">PST</div>
                  <div className="profile-chip-info">
                    <strong>PAVAN</strong>
                    <span>AI/ML ENGINEER</span>
                    <span>HARRISON, NJ</span>
                  </div>
                </div>

                <div className="float-card float-1 glass">
                  <span className="float-num">01</span>
                  <span className="float-title">PREDICTIVE<br />ML</span>
                </div>

                <div className="float-card float-2 glass">
                  <span className="float-num">02</span>
                  <span className="float-title">LLM / RAG<br />APPLICATIONS</span>
                </div>

                <div className="float-card float-3 glass">
                  <span className="float-num">03</span>
                  <span className="float-title">MLOPS<br />PIPELINES</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-meta meta-left">
            <span>BASED IN</span>
            <strong>HARRISON, NEW JERSEY / USA</strong>
          </div>

          <div className="hero-meta meta-right">
            <span>CURRENTLY</span>
            <strong>AI/ML ENGINEER @ LUCID SOFTWARE</strong>
          </div>

          <div className="hero-foot">
            <span className="hero-foot-label">FROM DATA TO PRODUCTION</span>
            <span className="hero-foot-line" aria-hidden="true"></span>
            <span className="hero-foot-label">SCROLL</span>
          </div>
        </section>

        {/* 02 / EXPERIENCE */}

        <section id="experience" className="section experience-section">
          <div className="label reveal">02 / EXPERIENCE</div>

          <h2 className="experience-title reveal">
            WHERE
            <br />
            I&apos;VE <span>WORKED</span>
          </h2>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row reveal" key={item.number}>
                <span className="experience-number" aria-hidden="true">{item.number}</span>

                <div className="experience-primary">
                  <h3>{item.company}</h3>
                  <strong>{item.role}</strong>
                  <div className="experience-meta">
                    <small>{item.dates}</small>
                    <span className="experience-loc">{item.location}</span>
                  </div>
                </div>

                <div className="experience-side">
                  <p>{item.description}</p>
                  <ul className="experience-highlights">
                    {item.highlights.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <div className="tech-tags">
                    {item.tech.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 03 / SELECTED WORK */}

        <section id="projects" className="section projects">
          <div className="label reveal">03 / SELECTED WORK</div>

          <div className="project-heading reveal">
            <h2>
              SELECTED
              <br />
              <span>WORK.</span>
            </h2>
            <p>
              {projects.length} PROJECTS
              <a href={profile.github} target="_blank" rel="noreferrer">
                CODE ON GITHUB<span className="arrow-out">↗</span>
              </a>
            </p>
          </div>

          {/* FLAGSHIP */}

          <article className="kaivan-feature reveal">
            <div className="kaivan-copy">
              <div className="kaivan-topline">
                <span className="kaivan-number">01</span>
                <span className="kaivan-flag">FLAGSHIP PROJECT</span>
              </div>

              <h3 className="kaivan-title">{flagship.title}</h3>
              <span className="kaivan-category">{flagship.category}</span>
              <p className="kaivan-desc">{flagship.summary}</p>

              <div className="tech-tags">
                {flagship.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <small className="kaivan-date">{flagship.dates}</small>

              <ProjectLinks project={flagship} onOpen={() => navigate(`/projects/${flagship.slug}`)} iconSize={14} />
            </div>

            <div className="kaivan-visual">
              <div className="kaivan-screen">
                <div className="mock-top">
                  <span>{flagship.title} / SYSTEM OVERVIEW</span>
                  <span>01</span>
                </div>

                <div className="kaivan-arch">
                  {flagship.architecture.map((step, index) => (
                    <Fragment key={step}>
                      {index > 0 && <span className="kaivan-arrow">↓</span>}
                      <div className={`kaivan-node ${index === flagship.accent ? "accent" : ""}`}>{step}</div>
                    </Fragment>
                  ))}
                </div>

                <div className="kaivan-note">{flagship.note}</div>
              </div>
            </div>
          </article>

          {/* REMAINING PROJECTS */}

          <div className="project-list">
            {otherProjects.map((project, index) => {
              const number = String(index + 2).padStart(2, "0");
              return (
                <article className="project-row reveal" key={project.slug}>
                  <span className="project-row-number" aria-hidden="true">{number}</span>

                  <div className="project-row-main">
                    <h3>{project.listTitle}</h3>
                    <div className="tech-tags project-row-tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>

                  <div className="project-row-side">
                    <small>{project.dates}</small>
                    <p>{project.summary}</p>
                    <ProjectLinks project={project} onOpen={() => navigate(`/projects/${project.slug}`)} iconSize={13} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 04 / ABOUT */}

        <section id="about" className="section about-section">
          <div className="label reveal">04 / ABOUT</div>

          <div className="about-split">
            <div className="about-left">
              <h2 className="about-title reveal">
                I BUILD
                <br />
                SOFTWARE
                <br />
                THAT <span>WORKS.</span>
              </h2>

              <div className="about-profile reveal">
                <strong>PAVAN SAGAR TELAPROLU</strong>
                <span>AI/ML ENGINEER</span>
                <div className="about-focus">
                  <em>FOCUS</em>
                  <span>ML / GENERATIVE AI / RAG / MLOPS</span>
                </div>
              </div>
            </div>

            <div className="about-right">
              <p className="about-lede reveal">
                AI/ML Engineer focused on building practical machine learning
                and AI applications, with a strong foundation in Python,
                software engineering, data processing and backend development.
              </p>

              <p className="about-copy-text reveal">
                At Lucid Software I build compliance-risk models and RAG-based
                semantic search with GPT-4 and pgvector. Before that, at
                Prudential Financial, I built a lapse prediction model on 2M+
                policy records, trained XGBoost and LightGBM, tracked
                experiments in MLflow and shipped it with Docker, FastAPI and
                GitHub Actions. I care about the whole path: clean data, honest
                evaluation, and models that are served, monitored and actually
                used.
              </p>

              <div className="about-panels">
                {aboutPanels.map((panel) => (
                  <article className="about-panel glass reveal" key={panel.number}>
                    <span className="panel-num">{panel.number}</span>
                    <h3>{panel.title}</h3>
                    <p>{panel.items.map((item, i) => (
                      <span key={item}>{item}{i < panel.items.length - 1 && <br />}</span>
                    ))}</p>
                    <ArrowUpRight className="panel-icon" size={15} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 / ENGINEERING MINDSET */}

        <section id="mindset" className="section mindset-section">
          <div className="label reveal">05 / ENGINEERING MINDSET</div>

          <h2 className="mindset-title reveal">
            FROM
            <br />
            PROBLEM
            <br />
            TO <span>PRODUCTION.</span>
          </h2>

          <div className="mindset-list">
            {mindset.map((item) => (
              <article className="mindset-row reveal" key={item.number}>
                <span className="mindset-number" aria-hidden="true">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 06 / EDUCATION */}

        <section id="education" className="section education-section">
          <div className="label reveal">06 / EDUCATION</div>

          <h2 className="education-title reveal">
            BACKGROUND
            <br />
            THAT BUILT
            <br />
            THE <span>FOUNDATION.</span>
          </h2>

          <div className="education-list">
            {education.map((item) => (
              <article className="education-row reveal" key={item.number}>
                <span className="education-number" aria-hidden="true">{item.number}</span>
                <div className="education-body">
                  <h3>{item.school}</h3>
                  <strong>{item.degree}</strong>
                  <p>{item.field}</p>
                </div>
                <small className="education-dates">{item.dates}</small>
              </article>
            ))}
          </div>
        </section>

        {/* 07 / CONTACT */}

        <section id="contact" className="contact">
          <div className="label reveal">07 / CONTACT</div>

          <h2 className="reveal">
            LET&apos;S BUILD
            <br />
            <span>SOMETHING.</span>
          </h2>

          <div className="contact-identity reveal">
            <strong>PAVAN SAGAR TELAPROLU</strong>
            <span>AI/ML ENGINEER</span>
          </div>

          <div className="contact-links reveal">
            <a href="mailto:telaprolupavan@gmail.com">
              <span className="contact-link-label">EMAIL</span>
              <ArrowUpRight size={20} />
            </a>
            <a href="https://github.com/telaprolupavan-byte" target="_blank" rel="noreferrer">
              <span className="contact-link-label">GITHUB</span>
              <ArrowUpRight size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pavan-telaprolu-52491694/" target="_blank" rel="noreferrer">
              <span className="contact-link-label">LINKEDIN</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </section>
      </main>

      {/* 08 / FOOTER */}

      <footer>
        <div className="footer-brand">
          <strong>PT<span className="logo-dot">.</span></strong>
          <span>PAVAN SAGAR TELAPROLU</span>
        </div>

        <div className="footer-role">
          <span>AI/ML ENGINEER</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/telaprolupavan-byte" target="_blank" rel="noreferrer">
            GITHUB<span className="arrow-out">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/pavan-telaprolu-52491694/" target="_blank" rel="noreferrer">
            LINKEDIN<span className="arrow-out">↗</span>
          </a>
          <a href="mailto:telaprolupavan@gmail.com">
            EMAIL<span className="arrow-out">↗</span>
          </a>
        </div>

        <div className="footer-copy">
          <span>© 2026 PAVAN SAGAR TELAPROLU</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
