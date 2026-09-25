import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const projectData = {
  kaivan: {
    number: "01",
    title: "KAIVAN",
    category: "AI/ML DATA PLATFORM",
    dates: "MAR 2026 — PRESENT",
    description:
      "A full-stack platform for my family business, built to turn operational data into a foundation for intelligent, data-driven applications.",
    tech: ["NODE.JS", "EXPRESS", "MONGODB", "REST API", "PYTHON", "DOCKER"],
    overview:
      "KAIVAN started as a way to organize the operational data of my family business. Backend services in Node.js and Express expose REST APIs — including a Stone REST API — backed by MongoDB for persistent business data.",
    context:
      "The platform is now expanding toward AI/ML: business-data processing, feature engineering, predictive analytics and decision-support workflows built on the data it already collects.",
    focus: [
      {
        title: "BACKEND & APIS",
        text: "Node.js and Express services with modular REST APIs, including the Stone REST API, and MongoDB persistence.",
      },
      {
        title: "ENGINEERING WORKFLOW",
        text: "Frontend-to-backend integration, Git and GitHub with feature branches, and environment configuration.",
      },
      {
        title: "TOWARD AI/ML",
        text: "Data processing, feature engineering and predictive analytics that turn business records into decision support.",
      },
    ],
    architecture: ["CLIENT", "REST API", "NODE / EXPRESS", "MONGODB"],
  },

  "cloud-infrastructure": {
    number: "02",
    title: "CLOUD INFRASTRUCTURE",
    category: "CLOUD OPERATIONS · LUCID SOFTWARE",
    dates: "AUG 2025 — PRESENT",
    description:
      "Cloud infrastructure operations across AWS and Azure, focused on monitoring, troubleshooting, network configuration, access management and incident resolution.",
    tech: ["AWS", "AZURE", "CLOUDWATCH", "AZURE MONITOR", "IAM", "VNETS"],
    overview:
      "Supported cloud infrastructure operations across AWS and Azure environments, keeping infrastructure and application environments healthy and resolving incidents when they were not.",
    context:
      "Beyond fixing issues, the work standardized how the team handles them: root causes, troubleshooting steps and remediation procedures were documented as SOPs.",
    focus: [
      {
        title: "MONITORING",
        text: "Monitored environments with AWS CloudWatch and Azure Monitor, investigating alerts and performance issues.",
      },
      {
        title: "NETWORKING",
        text: "Troubleshot connectivity and configuration issues involving VNets, subnets, firewalls and access controls.",
      },
      {
        title: "ACCESS",
        text: "Managed and reviewed IAM and access permissions in line with security and operational requirements.",
      },
      {
        title: "INCIDENTS & SOPS",
        text: "Investigated and resolved incidents, and maintained SOPs to make troubleshooting faster and more consistent.",
      },
    ],
    architecture: ["ALERT", "INVESTIGATE", "RESOLVE", "DOCUMENT"],
  },

  "gemini-ai-clone": {
    number: "03",
    title: "GEMINI AI CLONE",
    category: "GENERATIVE AI",
    dates: "JAN 2024 — MAY 2024",
    description:
      "A conversational AI assistant inspired by modern generative AI platforms, focused on natural-language interaction and AI-powered response generation.",
    tech: ["PYTHON", "LLMS", "NLP", "PROMPT ENGINEERING", "REACT", "JAVASCRIPT"],
    overview:
      "An interactive chat interface for real-time conversations with an AI model, processing natural-language prompts and generating contextual responses.",
    context:
      "The project was a hands-on exploration of LLM application development — how prompt engineering and conversation context shape response quality.",
    focus: [
      {
        title: "CHAT INTERFACE",
        text: "Real-time conversation UI with dynamic response rendering.",
      },
      {
        title: "PROMPT HANDLING",
        text: "Conversation handling and prompt processing to keep responses contextual.",
      },
      {
        title: "ARCHITECTURE",
        text: "Frontend and AI backend designed to interact cleanly and scale.",
      },
    ],
    architecture: ["CHAT UI", "PROMPT", "LLM API", "RESPONSE"],
  },

  "classification-model": {
    number: "04",
    title: "DIABETES PREDICTION",
    category: "SUPERVISED CLASSIFICATION",
    dates: "JAN 2023 — APR 2023",
    description:
      "An end-to-end supervised ML pipeline for diabetes prediction on the Pima Indians Diabetes Dataset (768 samples, 8 features).",
    tech: ["PYTHON", "SCIKIT-LEARN", "TENSORFLOW", "KERAS", "LSTM", "RANDOM FOREST"],
    overview:
      "Random Forest, Decision Tree and LSTM models were implemented and compared using 10-fold cross-validation, with preprocessing, training, validation and metric analysis in Python.",
    context:
      "Beyond accuracy, models were compared on TSS, HSS, FPR and FNR and visualized with ROC curves, giving a fuller picture of how each one fails.",
    results: [
      { label: "LSTM AUC", value: "0.81" },
      { label: "LSTM F1", value: "71.3%" },
      { label: "LSTM PRECISION", value: "74.2%" },
      { label: "RF AUC", value: "0.77" },
    ],
    focus: [
      {
        title: "PIPELINE",
        text: "Data preprocessing, training and validation with 10-fold cross-validation.",
      },
      {
        title: "COMPARISON",
        text: "The LSTM outperformed the traditional models: 74.2% precision, 68.7% recall, 71.3% F1.",
      },
      {
        title: "EVALUATION",
        text: "TSS, HSS, FPR, FNR, ROC curves and comparative plots.",
      },
    ],
    architecture: ["DATA", "PREPROCESS", "10-FOLD CV", "EVALUATE"],
  },

  "amazon-api-gateway": {
    number: "05",
    title: "AMAZON API GATEWAY",
    category: "CLOUD API INTEGRATION",
    dates: "MAR 2019 — AUG 2019",
    description:
      "A cloud-based API integration using Amazon API Gateway, focused on designing, configuring and managing RESTful APIs.",
    tech: ["AWS", "API GATEWAY", "REST APIS", "HTTP"],
    overview:
      "Configured API Gateway resources, HTTP methods, request handling and endpoint integrations, then implemented and tested endpoints between client applications and backend services.",
    context:
      "The project explored API deployment, request/response workflows and API management — the building blocks of scalable, service-based applications.",
    focus: [
      {
        title: "CONFIGURATION",
        text: "Resources, HTTP methods, request handling and endpoint integrations.",
      },
      {
        title: "DEPLOYMENT",
        text: "API deployment and request/response workflows within AWS.",
      },
      {
        title: "TESTING",
        text: "Implemented and tested endpoints between clients and backend services.",
      },
    ],
    architecture: ["CLIENT", "API GATEWAY", "INTEGRATION", "BACKEND"],
  },

  "delve-unv": {
    number: "06",
    title: "DELVE UNV",
    category: "UNIVERSITY SEARCH PLATFORM · NJIT",
    dates: "2023",
    description:
      "A team project at NJIT: a data-driven platform that helps international students discover and compare universities and programs.",
    tech: ["PYTHON", "REACT", "JAVASCRIPT", "SQL", "REST APIS"],
    overview:
      "Students can search and compare universities by academic program, location, tuition, admissions requirements and eligibility, based on their own academic profile and preferences.",
    context:
      "Ranking logic and structured filtering organize university data so the most relevant options surface first, applying ideas from information retrieval and recommendation systems.",
    focus: [
      {
        title: "SEARCH & FILTERING",
        text: "Structured search to match universities to academic and personal preferences.",
      },
      {
        title: "RANKING",
        text: "Data processing and ranking logic to improve the relevance of results.",
      },
      {
        title: "FULL STACK",
        text: "Interactive comparison UI backed by services and APIs for university data.",
      },
    ],
    architecture: ["REACT UI", "REST API", "RANKING", "SQL"],
  },

  "turtleback-zoo": {
    number: "07",
    title: "TURTLEBACK ZOO",
    category: "FULL-STACK DATABASE APPLICATION",
    dates: "NOV 2023 — DEC 2023",
    description:
      "A database-driven full-stack application for managing zoo operations — animals, buildings, attractions, employees and daily activities.",
    tech: ["REACT", "NODE.JS", "SQL", "REST APIS", "JAVASCRIPT"],
    overview:
      "Responsive interfaces for exploring and managing zoo data, backed by an API and a relational database that supports dynamic user interactions.",
    context:
      "Built with modular development, debugging, testing and version control to integrate the frontend and backend into one complete application.",
    focus: [
      {
        title: "DATABASE",
        text: "Relational data model for animals, buildings, attractions, employees and activities.",
      },
      {
        title: "BACKEND",
        text: "API functionality for managing application data.",
      },
      {
        title: "FRONTEND",
        text: "Responsive interfaces focused on usability and intuitive navigation.",
      },
    ],
    architecture: ["REACT UI", "NODE API", "SQL"],
  },

  "ddos-detection": {
    number: "08",
    title: "DDOS DETECTION",
    category: "ML FOR CYBERSECURITY · NJIT",
    dates: "SEP 2022 — DEC 2022",
    description:
      "A supervised ML pipeline for detecting DDoS attacks on the KDD Cup 99 dataset — 4M+ network traffic records with 41 features.",
    tech: ["PYTHON", "PANDAS", "SCIKIT-LEARN", "TENSORFLOW", "RANDOM FOREST"],
    overview:
      "Raw network traffic was preprocessed with protocol encoding, feature engineering and class-imbalance handling, then used to train and compare Random Forest, Decision Tree and other classifiers.",
    context:
      "In detection, false positives are expensive. Parameter tuning and classification-threshold optimization reduced them by over 35% while keeping accuracy high.",
    results: [
      { label: "ACCURACY", value: "97.5%" },
      { label: "FEWER FALSE POSITIVES", value: "35%+" },
      { label: "RECORDS", value: "4M+" },
      { label: "FEATURES", value: "41" },
    ],
    focus: [
      {
        title: "PREPROCESSING",
        text: "Protocol encoding, feature engineering and class-imbalance handling.",
      },
      {
        title: "MODELING",
        text: "Random Forest, Decision Tree and other classifiers compared on accuracy, precision, recall, F1 and AUC.",
      },
      {
        title: "TUNING",
        text: "Threshold optimization, confusion matrices and ROC analysis.",
      },
    ],
    architecture: ["TRAFFIC", "FEATURES", "CLASSIFIER", "ALERT"],
  },

  "trading-signal-assistant": {
    number: "09",
    title: "TRADING SIGNAL ASSISTANT",
    category: "AI / COMPUTER VISION · NJIT",
    dates: "JAN 2022 — APR 2022",
    description:
      "A full-stack AI assistant that analyzes candlestick chart images and video frames to generate Buy, Sell or Hold signals with confidence scores.",
    tech: ["TENSORFLOW", "OPENCV", "FASTAPI", "REACT", "TYPESCRIPT", "PYTORCH"],
    overview:
      "OpenCV pipelines extract candlestick charts from images and video and recognize 78+ patterns. A FastAPI backend serves TensorFlow inference to a React + TypeScript frontend.",
    context:
      "The frontend supports drag-and-drop uploads, live chart previews, confidence scores and warning indicators, backed by prediction logging, error handling and automated recovery.",
    results: [
      { label: "PATTERNS", value: "78+" },
      { label: "PER IMAGE", value: "<1.2S" },
      { label: "PER FRAME BATCH", value: "<3S" },
    ],
    focus: [
      {
        title: "COMPUTER VISION",
        text: "OpenCV image and video processing for chart extraction and pattern recognition.",
      },
      {
        title: "INFERENCE API",
        text: "FastAPI REST endpoints with TensorFlow inference for real-time predictions.",
      },
      {
        title: "FRONTEND",
        text: "React + TypeScript UI with uploads, previews, signals and confidence scores.",
      },
    ],
    architecture: ["CHART IMAGE", "OPENCV", "MODEL", "FASTAPI", "REACT"],
  },

  "customer-churn": {
    number: "10",
    title: "CUSTOMER CHURN",
    category: "PREDICTIVE ANALYTICS · IWAY SOFTWARE",
    dates: "OCT 2019 — DEC 2021",
    description:
      "A machine learning model to predict customer churn from historical customer and service data.",
    tech: ["PYTHON", "PANDAS", "NUMPY", "SCIKIT-LEARN", "MATPLOTLIB", "SQL"],
    overview:
      "Data cleaning, exploratory analysis, feature engineering and preprocessing prepared the dataset for modeling, followed by a comparison of classification algorithms.",
    context:
      "Logistic Regression, Decision Tree, Random Forest and SVM were evaluated on accuracy, precision, recall, F1-score and confusion matrices to pick the right model.",
    focus: [
      {
        title: "DATA PREP",
        text: "Cleaning, EDA and feature engineering on customer and service data.",
      },
      {
        title: "MODELING",
        text: "Logistic Regression, Decision Tree, Random Forest and SVM compared.",
      },
      {
        title: "EVALUATION",
        text: "Accuracy, precision, recall, F1-score and confusion matrices.",
      },
    ],
    architecture: ["CUSTOMER DATA", "FEATURES", "CLASSIFIER", "CHURN RISK"],
  },
};

const longestWord = (title) => Math.max(...title.split(" ").map((word) => word.length));

function ProjectCaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectData[slug];

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
