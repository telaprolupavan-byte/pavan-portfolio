import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const projectData = {
  kaivan: {
    number: "01",
    title: "KAIVAN",
    category: "BUSINESS PLATFORM",
    dates: "MAR 2026 — PRESENT",
    description:
      "A full-stack business platform designed around real operational workflows, authentication, APIs, data management and maintainable application architecture.",
    tech: ["JAVA", "SPRING BOOT", "MONGODB", "REST API"],
    overview:
      "KAIVAN is being developed as a practical business platform focused on real business workflows. The system emphasizes clear backend architecture, authentication, API design and structured data management.",
    focus: [
      {
        title: "AUTHENTICATION",
        text: "Secure access and protected application workflows.",
      },
      {
        title: "BUSINESS LOGIC",
        text: "Backend services organized around clear business responsibilities.",
      },
      {
        title: "DATA MANAGEMENT",
        text: "Structured persistence and API operations designed for maintainability.",
      },
    ],
  },

  "cloud-infrastructure": {
    number: "02",
    title: "CLOUD INFRASTRUCTURE",
    category: "CLOUD OPERATIONS",
    dates: "AUG 2025 — PRESENT",
    description:
      "A cloud infrastructure monitoring and incident management project focused on operational visibility and infrastructure health.",
    tech: ["AWS", "AZURE", "CLOUD OPERATIONS"],
    overview:
      "A cloud-focused project exploring infrastructure monitoring, operational visibility and incident management workflows across cloud environments.",
    focus: [
      {
        title: "MONITORING",
        text: "Tracking infrastructure health and operational signals.",
      },
      {
        title: "INCIDENTS",
        text: "Organizing operational events and incident workflows.",
      },
      {
        title: "CLOUD",
        text: "Working with modern cloud infrastructure concepts.",
      },
    ],
  },

  "gemini-ai-clone": {
    number: "03",
    title: "GEMINI AI CLONE",
    category: "WEB APPLICATION",
    dates: "JAN 2024 — MAY 2024",
    description:
      "A conversational AI web application built to explore API integration and interactive AI-powered workflows.",
    tech: ["PYTHON", "APIs", "WEB APPLICATION"],
    overview:
      "A web application project focused on connecting an interactive frontend with API-based AI functionality.",
    focus: [
      {
        title: "API INTEGRATION",
        text: "Connecting application interfaces with external APIs.",
      },
      {
        title: "APPLICATION FLOW",
        text: "Designing interactive request and response workflows.",
      },
      {
        title: "WEB UI",
        text: "Building a responsive conversational interface.",
      },
    ],
  },

  "classification-model": {
    number: "04",
    title: "CLASSIFICATION MODEL",
    category: "MACHINE LEARNING",
    dates: "JAN 2023 — APR 2023",
    description:
      "A supervised classification project focused on evaluating machine learning models and comparing performance.",
    tech: ["PYTHON", "MACHINE LEARNING", "MODEL EVALUATION"],
    overview:
      "A machine learning project centered on supervised classification and systematic model evaluation.",
    focus: [
      {
        title: "DATA",
        text: "Preparing datasets for supervised learning workflows.",
      },
      {
        title: "MODELING",
        text: "Training and comparing classification approaches.",
      },
      {
        title: "EVALUATION",
        text: "Analyzing model performance using evaluation metrics.",
      },
    ],
  },

  "amazon-api-gateway": {
    number: "05",
    title: "AMAZON API GATEWAY",
    category: "CLOUD",
    dates: "MAR 2019 — AUG 2019",
    description:
      "A project exploring API management and gateway architecture using Amazon Web Services.",
    tech: ["AWS", "API GATEWAY", "CLOUD"],
    overview:
      "A cloud project focused on understanding API gateway architecture and managed API services.",
    focus: [
      {
        title: "API",
        text: "Designing and exposing application endpoints.",
      },
      {
        title: "GATEWAY",
        text: "Exploring managed API gateway functionality.",
      },
      {
        title: "AWS",
        text: "Working with Amazon cloud infrastructure.",
      },
    ],
  },

  "delve-unv": {
    number: "06",
    title: "DELVE UNV",
    category: "WEB APPLICATION",
    dates: "2023",
    description:
      "A Python-based web application with responsive frontend components and structured backend functionality.",
    tech: ["DJANGO", "PYTHON", "HTML5", "CSS3", "BOOTSTRAP"],
    overview:
      "A web application developed using Django and Python with a responsive frontend.",
    focus: [
      {
        title: "DJANGO",
        text: "Building backend functionality with Django.",
      },
      {
        title: "PYTHON",
        text: "Implementing application logic and server-side functionality.",
      },
      {
        title: "FRONTEND",
        text: "Creating responsive interfaces using modern HTML and CSS.",
      },
    ],
  },

  "turtleback-zoo": {
    number: "07",
    title: "TURTLEBACK ZOO",
    category: "DATABASE APPLICATION",
    dates: "NOV 2023 — DEC 2023",
    description:
      "A database-driven web application implementing structured data management and CRUD functionality.",
    tech: ["MYSQL", "SQL", "CRUD", "WEB APPLICATION"],
    overview:
      "A database-focused application demonstrating relational data management and CRUD operations.",
    focus: [
      {
        title: "DATABASE",
        text: "Designing and working with structured relational data.",
      },
      {
        title: "SQL",
        text: "Using SQL for querying and managing application data.",
      },
      {
        title: "CRUD",
        text: "Implementing create, read, update and delete workflows.",
      },
    ],
  },

  "ddos-detection": {
    number: "08",
    title: "DDOS DETECTION",
    category: "CYBERSECURITY",
    dates: "SEP 2022 — DEC 2022",
    description:
      "A machine learning and cybersecurity project focused on identifying patterns associated with distributed denial-of-service attacks.",
    tech: ["PYTHON", "MACHINE LEARNING", "CYBERSECURITY"],
    overview:
      "A cybersecurity-focused machine learning project exploring detection of network behavior associated with DDoS attacks.",
    focus: [
      {
        title: "SECURITY",
        text: "Exploring patterns associated with malicious network activity.",
      },
      {
        title: "MACHINE LEARNING",
        text: "Applying machine learning techniques to detection workflows.",
      },
      {
        title: "PYTHON",
        text: "Building data processing and analysis workflows.",
      },
    ],
  },

  "trading-signal-assistant": {
    number: "09",
    title: "TRADING SIGNAL ASSISTANT",
    category: "AI / COMPUTER VISION",
    dates: "JAN 2022 — APR 2022",
    description:
      "An AI-powered application combining computer vision, an API backend and an interactive frontend.",
    tech: ["AI/ML", "COMPUTER VISION", "FASTAPI", "REACT"],
    overview:
      "An application combining computer vision capabilities with a FastAPI backend and React interface.",
    focus: [
      {
        title: "COMPUTER VISION",
        text: "Working with visual information as part of the application workflow.",
      },
      {
        title: "FASTAPI",
        text: "Building an API backend for application functionality.",
      },
      {
        title: "REACT",
        text: "Creating an interactive frontend experience.",
      },
    ],
  },

  "customer-churn": {
    number: "10",
    title: "CUSTOMER CHURN",
    category: "MACHINE LEARNING",
    dates: "OCT 2019 — DEC 2021",
    description:
      "A predictive analytics project using machine learning and data analysis to study customer churn patterns.",
    tech: ["PYTHON", "MACHINE LEARNING", "DATA ANALYSIS"],
    overview:
      "A predictive analytics project focused on understanding customer churn through data analysis and machine learning.",
    focus: [
      {
        title: "DATA ANALYSIS",
        text: "Analyzing customer information and identifying relevant patterns.",
      },
      {
        title: "PREDICTION",
        text: "Applying machine learning to churn prediction workflows.",
      },
      {
        title: "INSIGHTS",
        text: "Using model results to understand customer behavior.",
      },
    ],
  },
};

function ProjectCaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectData[slug];

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
            {project.number} / PROJECT
          </div>

          <small>{project.category}</small>

          <h1>
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
                {slug === "kaivan"
                  ? "REAL BUSINESS. REAL WORKFLOWS. REAL SYSTEMS."
                  : "The project demonstrates practical engineering concepts through a structured application, focusing on clear responsibilities and maintainable implementation."}
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="label">03 / TECHNOLOGY</div>

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
            {slug === "kaivan" ? "05 / ENGINEERING FOCUS" : "04 / PROJECT FOCUS"}
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
          <div className="label">{slug === "kaivan" ? "04 / ARCHITECTURE" : "05 / SYSTEM"}</div>

          <div className={`architecture large ${slug === "kaivan" ? "kaivan-architecture" : ""}`}>
            <div>CLIENT</div>
            <span>→</span>
            <div>{slug === "kaivan" ? "REST API" : "APPLICATION"}</div>
            <span>→</span>
            <div>{slug === "kaivan" ? "SPRING BOOT" : "DATA / API"}</div>
            {slug === "kaivan" && <><span>→</span><div>MONGODB</div></>}
          </div>
        </section>

        <section className="case-final">
          <div className="label">{slug === "kaivan" ? "06 / NEXT" : "06 / NEXT"}</div>

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
