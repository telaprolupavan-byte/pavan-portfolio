import { ArrowDownRight, ArrowUpRight, ExternalLink, Mail } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const experience = [
  {
    number: "01",
    dates: "JAN 2025 — PRESENT",
    role: "AI/ML ENGINEER",
    company: "Cologix, Inc.",
    location: "NEW JERSEY / REMOTE",
    description:
      "Developed Python-based automation and data-processing workflows supporting AI/ML initiatives.",
  },
  {
    number: "02",
    dates: "AUG 2023 — DEC 2024",
    role: "MACHINE LEARNING ENGINEER",
    company: "Prudential Financial",
    location: "NEW JERSEY / HYBRID",
    description:
      "Developed Python-based machine learning workflows for data preparation, feature engineering and model development.",
  },
  {
    number: "03",
    dates: "JUL 2019 — NOV 2021",
    role: "SYSTEM ENGINEER",
    company: "iWay Software",
    location: "INDIA / ON-SITE",
    description:
      "Developed and supported software solutions using Python and scripting.",
  },
];

const education = [
  {
    number: "01",
    dates: "JAN 2022 — DEC 2023",
    school: "NEW JERSEY INSTITUTE OF TECHNOLOGY",
    degree: "MASTER'S DEGREE",
    field: "COMPUTER AND INFORMATION SCIENCES",
  },
  {
    number: "02",
    dates: "MAR 2015 — MAY 2019",
    school: "VINAYAKA MISSION'S RESEARCH FOUNDATION",
    degree: "BACHELOR'S DEGREE",
    field: "COMPUTER SCIENCE",
  },
];

const stack = [
  {
    number: "01",
    title: "LANGUAGES",
    items: ["JAVA", "PYTHON", "JAVASCRIPT", "SQL"],
  },
  {
    number: "02",
    title: "BACKEND",
    items: ["SPRING BOOT", "REST API", "FASTAPI", "DJANGO"],
  },
  {
    number: "03",
    title: "DATA",
    items: ["MONGODB", "MYSQL", "DATA PROCESSING", "MACHINE LEARNING"],
  },
  {
    number: "04",
    title: "CLOUD",
    items: ["AWS", "AZURE", "CLOUD OPERATIONS", "API GATEWAY"],
  },
];

const projects = [
  {
    number: "01",
    year: "MAR 2026 — PRESENT",
    title: "KAIVAN",
    category: "BUSINESS PLATFORM",
    description:
      "A full-stack business platform designed around real operational workflows, authentication, APIs, data management and maintainable application architecture.",
    tech: "JAVA / SPRING BOOT / MONGODB / REST API",
    featured: true,
  },
  {
    number: "02",
    year: "AUG 2025 — PRESENT",
    title: "CLOUD INFRASTRUCTURE",
    category: "CLOUD OPERATIONS",
    description:
      "A cloud infrastructure monitoring and incident management project focused on operational visibility, infrastructure health and incident workflows.",
    tech: "AWS / AZURE / CLOUD OPERATIONS",
  },
  {
    number: "03",
    year: "JAN 2024 — MAY 2024",
    title: "GEMINI AI CLONE",
    category: "WEB APPLICATION",
    description:
      "A conversational AI web application built to explore API integration, application interfaces and interactive AI-powered workflows.",
    tech: "PYTHON / APIs / WEB APPLICATION",
  },
  {
    number: "04",
    year: "JAN 2023 — APR 2023",
    title: "CLASSIFICATION MODEL",
    category: "MACHINE LEARNING",
    description:
      "A supervised classification project focused on evaluating machine learning models and comparing performance across different approaches.",
    tech: "PYTHON / MACHINE LEARNING / MODEL EVALUATION",
  },
  {
    number: "05",
    year: "MAR 2019 — AUG 2019",
    title: "AMAZON API GATEWAY",
    category: "CLOUD",
    description:
      "A project exploring API management and gateway architecture using Amazon Web Services.",
    tech: "AWS / API GATEWAY / CLOUD",
  },
  {
    number: "06",
    year: "2023",
    title: "DELVE UNV",
    category: "WEB APPLICATION",
    description:
      "A web application developed with a Python-based backend and responsive frontend components.",
    tech: "DJANGO / PYTHON / HTML5 / CSS3 / BOOTSTRAP",
  },
  {
    number: "07",
    year: "NOV 2023 — DEC 2023",
    title: "TURTLEBACK ZOO",
    category: "DATABASE APPLICATION",
    description:
      "A database-driven web application implementing structured data management and CRUD functionality.",
    tech: "MYSQL / SQL / CRUD / WEB APPLICATION",
  },
  {
    number: "08",
    year: "SEP 2022 — DEC 2022",
    title: "DDOS DETECTION",
    category: "CYBERSECURITY",
    description:
      "A machine learning and cybersecurity project focused on identifying patterns associated with distributed denial-of-service attacks.",
    tech: "PYTHON / MACHINE LEARNING / CYBERSECURITY",
  },
  {
    number: "09",
    year: "JAN 2022 — APR 2022",
    title: "TRADING SIGNAL ASSISTANT",
    category: "AI / COMPUTER VISION",
    description:
      "An AI-powered application combining computer vision, an API backend and an interactive frontend.",
    tech: "AI/ML / COMPUTER VISION / FASTAPI / REACT",
  },
  {
    number: "10",
    year: "OCT 2019 — DEC 2021",
    title: "CUSTOMER CHURN",
    category: "MACHINE LEARNING",
    description:
      "A predictive analytics project using machine learning and data analysis to study customer churn patterns.",
    tech: "PYTHON / MACHINE LEARNING / DATA ANALYSIS",
  },
];

const slugs = {
  "01": "kaivan",
  "02": "cloud-infrastructure",
  "03": "gemini-ai-clone",
  "04": "classification-model",
  "05": "amazon-api-gateway",
  "06": "delve-unv",
  "07": "turtleback-zoo",
  "08": "ddos-detection",
  "09": "trading-signal-assistant",
  "10": "customer-churn",
};

const aboutPanels = [
  { number: "01", title: "ENGINEERING", items: ["SOFTWARE ARCHITECTURE", "BACKEND SYSTEMS", "APIs"] },
  { number: "02", title: "DATA", items: ["DATA PROCESSING", "MACHINE LEARNING", "ANALYTICS"] },
  { number: "03", title: "CLOUD", items: ["AWS", "AZURE", "INFRASTRUCTURE"] },
];

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      // rootMargin (viewport-relative) instead of an element-size threshold:
      // a 12% threshold can never be reached by sections taller than ~8x the
      // viewport (e.g. the Projects section), leaving them invisible forever.
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site">
      {/* NAVIGATION */}

      <nav className="nav">
        <button className="logo" onClick={() => scrollTo("home")} aria-label="Back to home">
          PT.
        </button>

        <div className="nav-links">
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("experience")}>EXPERIENCE</button>
          <button onClick={() => scrollTo("education")}>EDUCATION</button>
          <button onClick={() => scrollTo("projects")}>PROJECTS</button>
          <button onClick={() => scrollTo("contact")}>CONTACT</button>
        </div>

        <div className="nav-status">
          <span></span>
          AVAILABLE
        </div>
      </nav>

      <main>
        {/* HERO */}

        <section id="home" className="hero">
          <div className="hero-meta">
            <span>SOFTWARE ENGINEER</span>
            <span>NEW JERSEY / USA</span>
          </div>

          <div className="hero-title">
            <div>PAVAN</div>
            <div className="red">TELAPROLU</div>
          </div>

          <div className="hero-bottom">
            <p>
              Software Engineer building reliable software,
              scalable systems and data-driven products.
            </p>

            <button
              className="explore"
              onClick={() => scrollTo("projects")}
            >
              EXPLORE WORK
              <ArrowDownRight size={17} />
            </button>
          </div>

          <div className="hero-number">01</div>
        </section>

        {/* ABOUT */}

        <section id="about" className="section about-section reveal">
          <div className="label">02 / ABOUT THE ENGINEER</div>

          <div className="split">
            <h2>
              SOFTWARE
              <br />
              WITH <span>INTENT.</span>
            </h2>

            <div className="copy">
              <p>
                I'm Pavan Sagar Telaprolu, a Software Engineer focused
                on building practical, maintainable and scalable
                software systems.
              </p>

              <p>
                My background spans software engineering, cloud
                infrastructure, automation, data processing and
                machine learning.
              </p>

              <p>
                I approach engineering with a focus on understanding
                the problem first, designing the right architecture,
                and building software that can actually be maintained
                and extended.
              </p>
            </div>
          </div>

          <div className="about-lower">
            <div className="profile-card">
              <div className="profile-placeholder">PAVAN / PROFILE IMAGE</div>
              <div className="profile-meta"><span>SOFTWARE ENGINEER</span><span>NEW JERSEY / USA</span></div>
            </div>
            <div className="about-panels">
              {aboutPanels.map((panel) => (
                <article className="about-panel" key={panel.number}>
                  <span>{panel.number}</span>
                  <h3>{panel.title}</h3>
                  <div>{panel.items.map((item) => <p key={item}>{item}</p>)}</div>
                  <ArrowUpRight size={17} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}

        <section id="experience" className="section reveal">
          <div className="label">03 / EXPERIENCE</div>

          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.number}>
                <span className="experience-index">{item.number}</span>
                <span className="experience-watermark">{item.number}</span>

                <div>
                  <small>{item.dates}</small>

                  <h3>{item.role}</h3>

                  <strong>{item.company}</strong>

                  <div className="location">
                    {item.location}
                  </div>

                  <p>{item.description}</p>
                </div>

                <ArrowUpRight className="row-icon" size={18} />
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}

        <section id="education" className="section reveal">
          <div className="label">04 / EDUCATION</div>

          <div className="education-list">
            {education.map((item) => (
              <article className="education-row" key={item.number}>
                <span>{item.number}</span>

                <div>
                  <small>{item.dates}</small>

                  <h3>{item.school}</h3>

                  <strong>{item.degree}</strong>

                  <p>{item.field}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* STACK */}

        <section id="stack" className="section stack-section reveal">
          <div className="label">05 / TECHNOLOGY</div>

          <div className="stack-heading">
            <h2>
              THE
              <br />
              <span>STACK.</span>
            </h2>

            <p>
              Technologies I use to build applications,
              services and data-driven systems.
            </p>
          </div>

          <div className="stack-grid">
            {stack.map((group) => (
              <article className="stack-card" key={group.number}>
                <div className="stack-number">{group.number}</div>

                <h3>{group.title}</h3>

                <div className="stack-items">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section id="projects" className="section projects reveal">
          <div className="label">06 / SELECTED WORK</div>

          <div className="project-heading">
            <p>10 PROJECTS</p>

            <h2>
              SELECTED
              <br />
              <span>WORK.</span>
            </h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project ${project.featured ? "project-featured" : ""}`} key={project.number}>
                <div className="project-number">
                  {project.number}
                </div>

                <div className={`project-visual visual-${project.number}`}>
                  <div className="mock-screen">
                    <div className="mock-top">
                      <span>{project.category}</span>
                      <span>{project.number}</span>
                    </div>

                    <div className="mock-title">
                      {project.title}
                    </div>

                    <div className="mock-red"></div>

                    <div className="mock-blocks">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                    <div className="mock-footer">
                      {project.tech}
                    </div>
                  </div>
                </div>

                <div className="project-copy">
                  <small>{project.year}</small>

                  <h3>{project.title}</h3>

                  <div className="project-category">
                    {project.category}
                  </div>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech}
                  </div>

                  <button className="case-link" onClick={() => navigate(`/projects/${slugs[project.number]}`)}>
                    VIEW PROJECT <ArrowUpRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* KAIVAN CASE STUDY */}

        <section id="kaivan" className="section kaivan reveal">
          <div className="label">07 / FEATURED PROJECT</div>

          <div className="kaivan-header">
            <div>
              <small>FULL-STACK BUSINESS PLATFORM</small>

              <h2>
                KAI<span>VAN.</span>
              </h2>
            </div>

            <div className="kaivan-index">01 / 01</div>
          </div>

          <div className="kaivan-grid">
            <div className="kaivan-description">
              <h3>
                BUILT FOR
                <br />
                <span>REAL WORK.</span>
              </h3>

              <p>
                KAIVAN is a full-stack business platform designed
                around real operational workflows.
              </p>

              <p>
                The architecture focuses on authentication,
                business APIs, data management and maintainable
                backend services.
              </p>

              <div className="kaivan-stack">
                JAVA
                <br />
                SPRING BOOT
                <br />
                MONGODB
                <br />
                REST API
              </div>
            </div>

            <div className="architecture">
              <div className="architecture-title">
                SYSTEM OVERVIEW
              </div>

              <div className="architecture-flow">
                <div>CLIENT</div>
                <span>→</span>
                <div>REST API</div>
                <span>→</span>
                <div>SPRING BOOT</div>
                <span>→</span>
                <div>MONGODB</div>
              </div>

              <div className="architecture-note">
                AUTHENTICATION / BUSINESS LOGIC / DATA MANAGEMENT
              </div>
            </div>
          </div>
        </section>

        {/* ENGINEERING MINDSET */}

        <section className="statement">
          <div className="label">08 / ENGINEERING MINDSET</div>

          <h2>
            FROM PROBLEM
            <br />
            TO <span>PRODUCTION.</span>
          </h2>

          <p>
            Understand the problem. Design the system. Build it.
            Test it. Improve it.
          </p>
        </section>

        {/* CONTACT */}

        <section id="contact" className="contact">
          <div className="label">09 / CONTACT</div>

          <h2>
            LET'S BUILD
            <br />
            <span>SOMETHING.</span>
          </h2>

          <div className="contact-grid">
            <p>
              Have a project, opportunity or engineering problem
              worth discussing?
            </p>

            <div className="contact-links">
              <a href="mailto:your.email@example.com">
                <Mail size={18} />
                EMAIL
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://github.com/telaprolupavan-byte"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={18} />
                GITHUB
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={18} />
                LINKEDIN
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer>
        <span>PAVAN SAGAR TELAPROLU © 2026</span>
        <span>SOFTWARE ENGINEER</span>
        <span>NEW JERSEY / USA</span>
      </footer>
    </div>
  );
}

export default App;