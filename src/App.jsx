import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import heroImage from "./assets/pavan.png";

const experience = [
  {
    number: "01",
    dates: "JAN 2025 — PRESENT",
    role: "AI/ML ENGINEER",
    company: "Lucid Compliance",
    location: "NEW JERSEY · REMOTE",
    description:
      "Developed Python-based automation and data-processing workflows supporting AI/ML initiatives.",
    tech: ["PYTHON", "AUTOMATION", "DATA PROCESSING"],
  },
  {
    number: "02",
    dates: "AUG 2023 — DEC 2024",
    role: "MACHINE LEARNING ENGINEER",
    company: "PRUDENTIAL FINANCIAL",
    location: "NEW JERSEY · HYBRID",
    description:
      "Developed Python-based machine learning workflows for data preparation, feature engineering and model development.",
    tech: ["PYTHON", "MACHINE LEARNING", "FEATURE ENGINEERING"],
  },
  {
    number: "03",
    dates: "JUL 2019 — NOV 2021",
    role: "SYSTEM ENGINEER",
    company: "IWAY SOFTWARE",
    location: "INDIA · ON-SITE",
    description:
      "Developed and supported software solutions using Python and scripting.",
    tech: ["PYTHON", "SCRIPTING", "SOFTWARE DEVELOPMENT"],
  },
];

const stack = [
  { number: "01", title: "LANGUAGES", items: ["PYTHON", "JAVA", "JAVASCRIPT", "SQL"] },
  { number: "02", title: "BACKEND", items: ["SPRING BOOT", "REST APIS", "DJANGO", "FASTAPI"] },
  { number: "03", title: "DATA", items: ["MONGODB", "MYSQL", "DATA PROCESSING", "DATA ANALYSIS"] },
  { number: "04", title: "CLOUD / INFRASTRUCTURE", items: ["AWS", "AZURE", "CLOUD INFRASTRUCTURE", "CLOUD OPERATIONS"] },
  { number: "05", title: "FRONTEND", items: ["REACT", "HTML5", "CSS3", "BOOTSTRAP"] },
];

const kaivan = {
  number: "01",
  title: "KAIVAN",
  category: "DATA-DRIVEN BUSINESS PLATFORM",
  year: "MARCH 2026 — PRESENT",
  description:
    "A full-stack platform focused on business workflows, authentication, APIs, data management, and maintainable software architecture.",
  tech: ["JAVA", "SPRING BOOT", "MONGODB", "REST API"],
  slug: "kaivan",
};

const projects = [
  {
    number: "02",
    title: "CLOUD INFRASTRUCTURE MONITORING & INCIDENT MANAGEMENT",
    year: "AUG 2025 — PRESENT",
    description:
      "A cloud infrastructure monitoring and incident management project focused on operational visibility, infrastructure health and incident workflows.",
    tech: ["AWS", "AZURE", "CLOUD OPERATIONS"],
    slug: "cloud-infrastructure",
  },
  {
    number: "03",
    title: "GEMINI AI CLONE",
    year: "JAN 2024 — MAY 2024",
    description:
      "A conversational AI web application built to explore API integration, application interfaces and interactive AI-powered workflows.",
    tech: ["PYTHON", "APIS", "WEB APPLICATION"],
    slug: "gemini-ai-clone",
  },
  {
    number: "04",
    title: "SUPERVISED CLASSIFICATION MODEL EVALUATION",
    year: "JAN 2023 — APR 2023",
    description:
      "A supervised classification project focused on evaluating machine learning models and comparing performance across different approaches.",
    tech: ["PYTHON", "MACHINE LEARNING", "MODEL EVALUATION"],
    slug: "classification-model",
  },
  {
    number: "05",
    title: "AMAZON API GATEWAY",
    year: "MAR 2019 — AUG 2019",
    description:
      "A project exploring API management and gateway architecture using Amazon Web Services.",
    tech: ["AWS", "API GATEWAY", "CLOUD"],
    slug: "amazon-api-gateway",
  },
  {
    number: "06",
    title: "DELVE UNV",
    year: "2023",
    description:
      "A web application developed with a Python-based backend and responsive frontend components.",
    tech: ["DJANGO", "PYTHON", "HTML5", "CSS3", "BOOTSTRAP"],
    slug: "delve-unv",
  },
  {
    number: "07",
    title: "TURTLEBACK ZOO",
    year: "NOV 2023 — DEC 2023",
    description:
      "A database-driven web application implementing structured data management and CRUD functionality.",
    tech: ["MYSQL", "SQL", "CRUD", "WEB APPLICATION"],
    slug: "turtleback-zoo",
  },
  {
    number: "08",
    title: "DDOS DETECTION",
    year: "SEP 2022 — DEC 2022",
    description:
      "A machine learning and cybersecurity project focused on identifying patterns associated with distributed denial-of-service attacks.",
    tech: ["PYTHON", "MACHINE LEARNING", "CYBERSECURITY"],
    slug: "ddos-detection",
  },
  {
    number: "09",
    title: "AI-POWERED TRADING SIGNAL ASSISTANT",
    year: "JAN 2022 — APR 2022",
    description:
      "An AI-powered application combining computer vision, an API backend and an interactive frontend.",
    tech: ["AI/ML", "COMPUTER VISION", "FASTAPI", "REACT"],
    slug: "trading-signal-assistant",
  },
  {
    number: "10",
    title: "CUSTOMER CHURN PREDICTION",
    year: "OCT 2019 — DEC 2021",
    description:
      "A predictive analytics project using machine learning and data analysis to study customer churn patterns.",
    tech: ["PYTHON", "MACHINE LEARNING", "DATA ANALYSIS"],
    slug: "customer-churn",
  },
];

const mindset = [
  {
    number: "01",
    title: "UNDERSTAND THE PROBLEM",
    accent: "PROBLEM",
    text: "Build around the actual requirement, not the technology.",
  },
  {
    number: "02",
    title: "DESIGN THE SYSTEM",
    accent: "SYSTEM",
    text: "Think about APIs, data, services, infrastructure and how the pieces work together.",
  },
  {
    number: "03",
    title: "BUILD FOR MAINTAINABILITY",
    accent: "MAINTAINABILITY",
    text: "Prefer clear architecture, readable code and predictable behavior.",
  },
  {
    number: "04",
    title: "IMPROVE ITERATIVELY",
    accent: "ITERATIVELY",
    text: "Build, test, observe, fix and refine.",
  },
  {
    number: "05",
    title: "SHIP",
    accent: "SHIP",
    text: "A system is valuable when it actually works in production.",
  },
];

const education = [
  {
    number: "01",
    dates: "JAN 2022 — DEC 2023",
    school: "NEW JERSEY INSTITUTE OF TECHNOLOGY",
    degree: "MASTER'S DEGREE",
    field: "COMPUTER AND INFORMATION SCIENCES, GENERAL",
  },
  {
    number: "02",
    dates: "MAR 2015 — MAY 2019",
    school: "VINAYAKA MISSION'S RESEARCH FOUNDATION – UNIVERSITY",
    degree: "BACHELOR'S DEGREE",
    field: "COMPUTER SCIENCE",
  },
];

const aboutPanels = [
  { number: "01", title: "ENGINEERING", items: ["SOFTWARE ARCHITECTURE", "BACKEND SYSTEMS", "APIS"] },
  { number: "02", title: "DATA", items: ["DATA PROCESSING", "MACHINE LEARNING", "ANALYTICS"] },
  { number: "03", title: "CLOUD", items: ["AWS", "AZURE", "INFRASTRUCTURE"] },
];

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
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LINKEDIN<span className="arrow-out">↗</span>
            </a>
            <a href="mailto:your.email@example.com">
              EMAIL<span className="arrow-out">↗</span>
            </a>
          </div>
        </div>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <button onClick={() => scrollTo("projects")}>WORK</button>
          <button onClick={() => scrollTo("about")}>ABOUT</button>
          <button onClick={() => scrollTo("experience")}>EXPERIENCE</button>
          <button onClick={() => scrollTo("stack")}>STACK</button>
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

        <section id="home" className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="tick"></span>
                SOFTWARE ENGINEER / BUILDER
              </div>

              <h1 className="hero-title">
                <span className="hero-line">PAVAN</span>
                <span className="hero-line">SAGAR</span>
                <span className="hero-line red">TELAPROLU</span>
              </h1>
<img
  src={heroImage}
  alt="Pavan Sagar Telaprolu"
  className="hero-genemoji"
/>
              <div className="hero-tags">
                AI/ML ENGINEER <i>•</i> SOFTWARE ENGINEER <i>•</i> CLOUD
              </div>

              <p className="hero-desc">
                Building reliable software systems, data-driven applications, and
                cloud infrastructure with a focus on clean architecture and
                scalable engineering.
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
                    <span>SOFTWARE ENGINEER</span>
                  </div>
                  <div className="interface-status">
                    <span>STATUS</span>
                    <strong>
                      <i className="status-dot"></i>
                      ACTIVE
                    </strong>
                  </div>
                </div>

                <div className="interface-label">SYSTEM / ENGINEERING</div>

                <div className="interface-diagram">
                  <div className="diagram-block">CLIENT</div>
                  <span className="diagram-link"></span>
                  <div className="diagram-block">REST API</div>
                  <span className="diagram-link"></span>
                  <div className="diagram-block accent">SERVICES</div>
                  <span className="diagram-link"></span>
                  <div className="diagram-block">DATA</div>
                </div>

                <div className="interface-rows">
                  <div className="interface-row">
                    <span>ARCHITECTURE</span>
                    <i></i>
                    <em>BACKEND / APIS</em>
                  </div>
                  <div className="interface-row">
                    <span>DATA</span>
                    <i></i>
                    <em>MONGODB / MYSQL</em>
                  </div>
                  <div className="interface-row">
                    <span>CLOUD</span>
                    <i></i>
                    <em>AWS / AZURE</em>
                  </div>
                </div>

                <div className="interface-stack">
                  <span>PYTHON</span>
                  <span>JAVA</span>
                  <span>SPRING BOOT</span>
                  <span>AWS</span>
                  <span>MONGODB</span>
                  <span>REACT</span>
                </div>

                <span className="panel-base" aria-hidden="true"></span>

                <div className="profile-chip glass">
                  <div className="profile-mark">PST</div>
                  <div className="profile-chip-info">
                    <strong>PAVAN</strong>
                    <span>SOFTWARE ENGINEER</span>
                    <span>NJ / USA</span>
                  </div>
                </div>
              </div>

              <div className="float-card float-1 glass">
                <span className="float-num">01</span>
                <span className="float-title">FULL-STACK<br />SYSTEMS</span>
              </div>

              <div className="float-card float-2 glass">
                <span className="float-num">02</span>
                <span className="float-title">CLOUD<br />INFRASTRUCTURE</span>
              </div>

              <div className="float-card float-3 glass">
                <span className="float-num">03</span>
                <span className="float-title">DATA<br />ENGINEERING</span>
              </div>
            </div>
          </div>

          <div className="hero-meta meta-left">
            <span>BASED IN</span>
            <strong>NEW JERSEY / USA</strong>
          </div>

          <div className="hero-meta meta-right">
            <span>STATUS</span>
            <strong>AVAILABLE FOR SELECTED PROJECTS</strong>
          </div>

          <div className="hero-foot">
            <span className="hero-foot-label">ENGINEERED FOR SCALABILITY</span>
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
                  <div className="tech-tags">
                    {item.tech.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 03 / STACK */}

        <section id="stack" className="section stack-section">
          <div className="label reveal">03 / TECHNOLOGY</div>

          <div className="stack-layout">
            <div className="stack-left">
              <h2 className="stack-title reveal">
                WHAT
                <br />
                I WORK <span>WITH</span>
              </h2>

              <div className="stack-meta reveal">
                <span>LANGUAGES</span>
                <span>BACKEND</span>
                <span>DATA</span>
                <span>CLOUD / INFRASTRUCTURE</span>
                <span>FRONTEND</span>
              </div>
            </div>

            <div className="stack-panel">
              {stack.map((group) => (
                <article className="stack-group reveal" key={group.number}>
                  <span className="stack-num">{group.number}</span>
                  <h3>{group.title}</h3>
                  <div className="stack-items">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 / SELECTED WORK */}

        <section id="projects" className="section projects">
          <div className="label reveal">04 / SELECTED WORK</div>

          <div className="project-heading reveal">
            <h2>
              SELECTED
              <br />
              <span>WORK.</span>
            </h2>
            <p>10 PROJECTS</p>
          </div>

          {/* FLAGSHIP — KAIVAN */}

          <article className="kaivan-feature reveal">
            <div className="kaivan-copy">
              <div className="kaivan-topline">
                <span className="kaivan-number">01</span>
                <span className="kaivan-flag">FLAGSHIP PROJECT</span>
              </div>

              <h3 className="kaivan-title">{kaivan.title}</h3>
              <span className="kaivan-category">{kaivan.category}</span>
              <p className="kaivan-desc">{kaivan.description}</p>

              <div className="tech-tags">
                {kaivan.tech.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <small className="kaivan-date">{kaivan.year}</small>

              <button className="case-link" onClick={() => navigate(`/projects/${kaivan.slug}`)}>
                VIEW CASE STUDY <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="kaivan-visual">
              <div className="kaivan-screen">
                <div className="mock-top">
                  <span>KAIVAN / SYSTEM OVERVIEW</span>
                  <span>01</span>
                </div>

                <div className="kaivan-arch">
                  <div className="kaivan-node">CLIENT</div>
                  <span className="kaivan-arrow">↓</span>
                  <div className="kaivan-node">REST API</div>
                  <span className="kaivan-arrow">↓</span>
                  <div className="kaivan-node accent">SPRING BOOT</div>
                  <span className="kaivan-arrow">↓</span>
                  <div className="kaivan-node">MONGODB</div>
                </div>

                <div className="kaivan-note">
                  AUTHENTICATION / BUSINESS LOGIC / DATA MANAGEMENT
                </div>
              </div>
            </div>
          </article>

          {/* REMAINING PROJECTS */}

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row reveal" key={project.number}>
                <span className="project-row-number" aria-hidden="true">{project.number}</span>

                <div className="project-row-main">
                  <h3>{project.title}</h3>
                  <div className="tech-tags project-row-tags">
                    {project.tech.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>

                <div className="project-row-side">
                  <small>{project.year}</small>
                  <p>{project.description}</p>
                  <button className="case-link" onClick={() => navigate(`/projects/${project.slug}`)}>
                    VIEW CASE STUDY <ArrowUpRight size={13} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 05 / ABOUT */}

        <section id="about" className="section about-section">
          <div className="label reveal">05 / ABOUT</div>

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
                <span>SOFTWARE ENGINEER</span>
                <div className="about-focus">
                  <em>FOCUS</em>
                  <span>SOFTWARE / DATA / CLOUD / AUTOMATION</span>
                </div>
              </div>
            </div>

            <div className="about-right">
              <p className="about-lede reveal">
                I build software with a focus on how systems actually work —
                from APIs and backend services to data, cloud infrastructure,
                automation, and user-facing applications.
              </p>

              <p className="about-copy-text reveal">
                I&apos;m Pavan Sagar Telaprolu, a Software Engineer working
                across software development, data, cloud infrastructure,
                automation, and machine learning. The emphasis is on building
                practical, maintainable software and understanding how systems
                work end-to-end.
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

        {/* 06 / ENGINEERING MINDSET */}

        <section id="mindset" className="section mindset-section">
          <div className="label reveal">06 / ENGINEERING MINDSET</div>

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

        {/* 07 / EDUCATION */}

        <section id="education" className="section education-section">
          <div className="label reveal">07 / EDUCATION</div>

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

        {/* 08 / CONTACT */}

        <section id="contact" className="contact">
          <div className="label reveal">08 / CONTACT</div>

          <h2 className="reveal">
            LET&apos;S BUILD
            <br />
            <span>SOMETHING.</span>
          </h2>

          <div className="contact-identity reveal">
            <strong>PAVAN SAGAR TELAPROLU</strong>
            <span>SOFTWARE ENGINEER</span>
          </div>

          <div className="contact-links reveal">
            <a href="mailto:your.email@example.com">
              <span className="contact-link-label">EMAIL</span>
              <ArrowUpRight size={20} />
            </a>
            <a href="https://github.com/telaprolupavan-byte" target="_blank" rel="noreferrer">
              <span className="contact-link-label">GITHUB</span>
              <ArrowUpRight size={20} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <span className="contact-link-label">LINKEDIN</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </section>
      </main>

      {/* 09 / FOOTER */}

      <footer>
        <div className="footer-brand">
          <strong>PT<span className="logo-dot">.</span></strong>
          <span>PAVAN SAGAR TELAPROLU</span>
        </div>

        <div className="footer-role">
          <span>SOFTWARE ENGINEER</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/telaprolupavan-byte" target="_blank" rel="noreferrer">
            GITHUB<span className="arrow-out">↗</span>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LINKEDIN<span className="arrow-out">↗</span>
          </a>
          <a href="mailto:your.email@example.com">
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
