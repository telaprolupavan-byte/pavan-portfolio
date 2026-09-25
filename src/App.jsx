import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import heroImage from "./assets/pavan.webp";

const experience = [
  {
    number: "01",
    dates: "JAN 2025 — PRESENT",
    role: "AI/ML ENGINEER",
    company: "LUCID SOFTWARE",
    location: "NEW JERSEY · REMOTE · CONTRACT",
    description:
      "Building the ML and AI capabilities of LFRAS, a compliance platform for document collection, validation, submissions, expiration tracking, ticketing and reporting.",
    highlights: [
      "Built predictive ML workflows on historical compliance and submission data to flag potential compliance issues early, so teams could prioritize the highest-risk cases first.",
      "Engineered features from submission behavior, document completeness, validation status and expiration signals; trained Random Forest classifiers with cross-validation and hyperparameter tuning.",
      "Built semantic search and RAG over compliance information using OpenAI embeddings (text-embedding-3-small) stored in PostgreSQL with pgvector.",
      "Contributed to GPT-4 compliance analysis that combines retrieved context with the model, making relevant information faster to review and interpret.",
      "Served models through FastAPI inference services and took ML/AI features from experimentation through integration into the product.",
    ],
    tech: ["PYTHON", "SCIKIT-LEARN", "RAG", "GPT-4", "PGVECTOR", "POSTGRESQL", "FASTAPI", "DOCKER"],
  },
  {
    number: "02",
    dates: "AUG 2023 — DEC 2024",
    role: "MACHINE LEARNING ENGINEER",
    company: "PRUDENTIAL FINANCIAL",
    location: "NEW JERSEY · HYBRID · CONTRACT",
    description:
      "Customer Retention & LTV team — built a lapse prediction model that flags at-risk policyholders early so the retention team can step in before policies lapse.",
    highlights: [
      "Extracted ~3 years of policy, premium-payment and transaction data (2M+ records) from Snowflake with SQL, with validation checks for missing, duplicate and inconsistent records.",
      "Engineered behavioral features in Pandas (payment latency, missed-payment frequency, policy age, engagement) with point-in-time generation to prevent temporal leakage.",
      "Trained Logistic Regression, XGBoost and LightGBM models, tuned with GridSearchCV and tracked in MLflow; optimized for recall with probability threshold tuning.",
      "Containerized training and serving with Docker, built FastAPI inference endpoints and GitHub Actions CI/CD for testing, model validation and image publishing.",
      "Supported daily batch scoring and monitored inference latency, data drift and model performance degradation.",
    ],
    tech: ["PYTHON", "SQL", "SNOWFLAKE", "XGBOOST", "LIGHTGBM", "MLFLOW", "DOCKER", "GITHUB ACTIONS"],
  },
  {
    number: "03",
    dates: "JUL 2019 — NOV 2021",
    role: "SYSTEM ENGINEER",
    company: "IWAY SOFTWARE",
    location: "INDIA · ON-SITE · FULL-TIME",
    description:
      "Developed and supported software solutions using Python and scripting across application data, SQL databases and data-processing workflows.",
    highlights: [
      "Built automation scripts to improve repetitive technical and operational processes.",
      "Troubleshot application and system issues and contributed to production support.",
      "Worked with APIs and backend components to integrate application services.",
      "Collaborated with development teams across the SDLC using Git-based workflows.",
    ],
    tech: ["PYTHON", "SQL", "AUTOMATION", "APIS", "GIT"],
  },
];

const stack = [
  { number: "01", title: "LANGUAGES", items: ["PYTHON", "SQL", "JAVASCRIPT", "TYPESCRIPT", "JAVA"] },
  { number: "02", title: "MACHINE LEARNING", items: ["SCIKIT-LEARN", "XGBOOST", "LIGHTGBM", "PYTORCH", "TENSORFLOW", "OPENCV"] },
  { number: "03", title: "GENERATIVE AI", items: ["RAG", "GPT-4", "OPENAI EMBEDDINGS", "PGVECTOR", "SEMANTIC SEARCH", "PROMPT ENGINEERING"] },
  { number: "04", title: "MLOPS / BACKEND", items: ["FASTAPI", "DOCKER", "MLFLOW", "GITHUB ACTIONS", "NODE.JS", "REST APIS"] },
  { number: "05", title: "DATA / CLOUD", items: ["PANDAS", "NUMPY", "SNOWFLAKE", "POSTGRESQL", "MONGODB", "AWS", "AZURE"] },
];

const kaivan = {
  number: "01",
  title: "KAIVAN",
  category: "AI/ML DATA PLATFORM",
  year: "MAR 2026 — PRESENT",
  description:
    "A full-stack platform for my family business that turns operational data into a foundation for intelligent, data-driven applications — now expanding toward predictive analytics and decision support.",
  tech: ["NODE.JS", "EXPRESS", "MONGODB", "REST API", "PYTHON"],
  slug: "kaivan",
};

const projects = [
  {
    number: "02",
    title: "CLOUD INFRASTRUCTURE MONITORING & INCIDENT MANAGEMENT",
    year: "AUG 2025 — PRESENT",
    description:
      "Monitoring, troubleshooting and incident resolution across AWS and Azure — CloudWatch and Azure Monitor alerts, VNets, subnets, firewalls, IAM and SOP documentation.",
    tech: ["AWS", "AZURE", "CLOUDWATCH", "AZURE MONITOR", "IAM"],
    slug: "cloud-infrastructure",
  },
  {
    number: "03",
    title: "GEMINI AI CLONE — GENERATIVE AI ASSISTANT",
    year: "JAN 2024 — MAY 2024",
    description:
      "A conversational AI assistant with a real-time chat interface, prompt processing, conversation handling and dynamic response rendering on top of an LLM backend.",
    tech: ["PYTHON", "LLMS", "PROMPT ENGINEERING", "REACT"],
    slug: "gemini-ai-clone",
  },
  {
    number: "04",
    title: "SUPERVISED CLASSIFICATION — DIABETES PREDICTION",
    year: "JAN 2023 — APR 2023",
    description:
      "End-to-end pipeline comparing Random Forest, Decision Tree and LSTM with 10-fold cross-validation. The LSTM reached 0.81 AUC and 71.3% F1, outperforming the traditional models.",
    tech: ["PYTHON", "SCIKIT-LEARN", "TENSORFLOW", "LSTM"],
    slug: "classification-model",
  },
  {
    number: "05",
    title: "AMAZON API GATEWAY — CLOUD API INTEGRATION",
    year: "MAR 2019 — AUG 2019",
    description:
      "Designed, configured and tested RESTful APIs on Amazon API Gateway — resources, HTTP methods, request handling and backend endpoint integrations.",
    tech: ["AWS", "API GATEWAY", "REST APIS"],
    slug: "amazon-api-gateway",
  },
  {
    number: "06",
    title: "DELVE UNV — UNIVERSITY SEARCH PLATFORM",
    year: "2023",
    description:
      "A team project at NJIT: a data-driven platform that helps international students discover and compare universities by program, location, tuition and eligibility.",
    tech: ["PYTHON", "REACT", "SQL", "REST APIS"],
    slug: "delve-unv",
  },
  {
    number: "07",
    title: "TURTLEBACK ZOO — FULL-STACK APPLICATION",
    year: "NOV 2023 — DEC 2023",
    description:
      "A database-driven full-stack application for managing zoo operations — animals, buildings, attractions, employees and daily activities.",
    tech: ["REACT", "NODE.JS", "SQL", "REST APIS"],
    slug: "turtleback-zoo",
  },
  {
    number: "08",
    title: "DDOS DETECTION WITH SUPERVISED ML",
    year: "SEP 2022 — DEC 2022",
    description:
      "Classification pipeline on 4M+ KDD Cup 99 network records. Random Forest reached 97.5% accuracy, and threshold tuning cut false positives by over 35%.",
    tech: ["PYTHON", "SCIKIT-LEARN", "RANDOM FOREST", "CYBERSECURITY"],
    slug: "ddos-detection",
  },
  {
    number: "09",
    title: "AI-POWERED TRADING SIGNAL ASSISTANT",
    year: "JAN 2022 — APR 2022",
    description:
      "Analyzes candlestick chart images and video frames across 78+ patterns to generate Buy / Sell / Hold signals, with under 1.2s inference per image.",
    tech: ["TENSORFLOW", "OPENCV", "FASTAPI", "REACT", "TYPESCRIPT"],
    slug: "trading-signal-assistant",
  },
  {
    number: "10",
    title: "CUSTOMER CHURN PREDICTION",
    year: "OCT 2019 — DEC 2021",
    description:
      "Predicts customer churn from historical customer and service data, comparing Logistic Regression, Decision Tree, Random Forest and SVM.",
    tech: ["PYTHON", "PANDAS", "SCIKIT-LEARN", "SQL"],
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
  { number: "01", title: "MACHINE LEARNING", items: ["PREDICTIVE MODELS", "FEATURE ENGINEERING", "MODEL EVALUATION"] },
  { number: "02", title: "GENERATIVE AI", items: ["RAG", "VECTOR SEARCH", "LLM APPLICATIONS"] },
  { number: "03", title: "MLOPS", items: ["FASTAPI SERVING", "DOCKER / CI/CD", "MONITORING"] },
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
            <a href="https://www.linkedin.com/in/pavan-telaprolu-52491694/" target="_blank" rel="noreferrer">
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
                AI/ML ENGINEER / BUILDER
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
                    <span>NJ / USA</span>
                  </div>
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

          <div className="hero-meta meta-left">
            <span>BASED IN</span>
            <strong>NEW JERSEY / USA</strong>
          </div>

          <div className="hero-meta meta-right">
            <span>STATUS</span>
            <strong>AVAILABLE FOR SELECTED PROJECTS</strong>
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
                {stack.map((group) => <span key={group.number}>{group.title}</span>)}
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
                  <div className="kaivan-node accent">NODE / EXPRESS</div>
                  <span className="kaivan-arrow">↓</span>
                  <div className="kaivan-node">MONGODB</div>
                </div>

                <div className="kaivan-note">
                  BUSINESS DATA / REST APIS / AI/ML-READY
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
            <span>AI/ML ENGINEER</span>
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
            <a href="https://www.linkedin.com/in/pavan-telaprolu-52491694/" target="_blank" rel="noreferrer">
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
          <span>AI/ML ENGINEER</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/telaprolupavan-byte" target="_blank" rel="noreferrer">
            GITHUB<span className="arrow-out">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/pavan-telaprolu-52491694/" target="_blank" rel="noreferrer">
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
