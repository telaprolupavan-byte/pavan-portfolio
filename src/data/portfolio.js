// Single source of truth for the portfolio's content. The pages render it
// and the "Ask about Pavan" assistant (netlify/functions/ask.mjs) answers from it,
// so keep it plain data: no JSX and no asset imports.

export const profile = {
  name: "Pavan Sagar Telaprolu",
  headline: "AI/ML Engineer | Generative AI & LLM Applications | RAG & Vector Databases | Python | PyTorch | MLOps | AWS",
  location: "Harrison, New Jersey, USA",
  current: "AI/ML Engineer at Lucid Software (contract, remote), since January 2025",
  email: "telaprolupavan@gmail.com",
  linkedin: "https://www.linkedin.com/in/pavan-telaprolu-52491694/",
  github: "https://github.com/telaprolupavan-byte",
  site: "https://pavan-telaprolu.netlify.app",
  about: [
    "AI/ML Engineer focused on building practical machine learning and AI applications, with a strong foundation in Python, software engineering, data processing and backend development.",
    "At Lucid Software he builds compliance-risk models and RAG-based semantic search with GPT-4 and pgvector. Before that, at Prudential Financial, he built a lapse prediction model on 2M+ policy records, trained XGBoost and LightGBM, tracked experiments in MLflow and shipped it with Docker, FastAPI and GitHub Actions.",
    "He cares about the whole path: clean data, honest evaluation, and models that are served, monitored and actually used.",
  ],
  skills: [
    "Python", "SQL", "JavaScript", "TypeScript", "Java",
    "scikit-learn", "XGBoost", "LightGBM", "Random Forest", "PyTorch", "TensorFlow", "OpenCV",
    "RAG", "Semantic Search", "Vector / Graph Embeddings", "GPT-4", "OpenAI Embeddings", "pgvector", "Prompt Engineering",
    "FastAPI", "Docker", "MLflow", "GitHub Actions", "Node.js", "REST APIs",
    "Pandas", "NumPy", "Snowflake", "PostgreSQL", "MongoDB",
    "AWS", "Azure", "Cloud Infrastructure",
  ],
};

export const experience = [
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
    tech: ["PYTHON", "PANDAS", "SCIKIT-LEARN", "RANDOM FOREST", "RAG", "SEMANTIC SEARCH", "GPT-4", "OPENAI EMBEDDINGS", "PGVECTOR", "POSTGRESQL", "FASTAPI", "DOCKER"],
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
    tech: ["PYTHON", "SQL", "SNOWFLAKE", "PANDAS", "SCIKIT-LEARN", "XGBOOST", "LIGHTGBM", "MLFLOW", "DOCKER", "FASTAPI", "GITHUB ACTIONS"],
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
    tech: ["PYTHON", "SQL", "GITHUB", "AUTOMATION", "APIS"],
  },
];

// Projects, in display order. The first is the flagship on the home page.
// `summary` and `tags` feed the home page list; the rest feeds the case study
// page and the "Ask about Pavan" assistant.
export const projects = [
  {
    slug: "lfras-ai",
    title: "LFRAS AI",
    listTitle: "LFRAS AI — COMPLIANCE RAG & RISK MODELS",
    category: "GENERATIVE AI · LUCID SOFTWARE",
    dates: "JAN 2025 — PRESENT",
    summary:
      "ML and generative AI for LFRAS, a compliance platform: risk models that flag issues before they happen, and RAG-based semantic search that grounds GPT-4 analysis in the right compliance context.",
    tags: ["RAG", "GPT-4", "PGVECTOR", "RANDOM FOREST", "FASTAPI"],
    description:
      "Machine learning and RAG capabilities for LFRAS, Lucid Software's compliance platform for document collection, validation, submissions, expiration tracking, ticketing and reporting.",
    tech: ["PYTHON", "SCIKIT-LEARN", "OPENAI EMBEDDINGS", "PGVECTOR", "POSTGRESQL", "GPT-4", "FASTAPI", "DOCKER"],
    overview:
      "Compliance teams deal with large volumes of submissions, documents and expirations. Two capabilities were added to LFRAS: predictive models trained on historical compliance and submission data that flag likely compliance issues early, and semantic search with retrieval-augmented generation over compliance information.",
    context:
      "Retrieved compliance context is combined with GPT-4 so users get an analysis grounded in the relevant documents, making it faster to review and interpret what matters — and risk scores help teams prioritize the highest-risk cases first.",
    focus: [
      {
        title: "RISK MODELS",
        text: "Features from submission behavior, document completeness, validation status and expiration signals; Random Forest classifiers with cross-validation and hyperparameter tuning, evaluated with precision, recall, F1, ROC-AUC and confusion matrices.",
      },
      {
        title: "SEMANTIC SEARCH & RAG",
        text: "OpenAI text-embedding-3-small embeddings stored in PostgreSQL with pgvector for vector search, plus document processing, relevant-context selection and prompt/context engineering for GPT-4.",
      },
      {
        title: "SERVING",
        text: "Models served through FastAPI inference services and integrated into application workflows, taken from experimentation to production with product and engineering teams.",
      },
    ],
    architecture: ["DOCUMENTS", "EMBEDDINGS", "PGVECTOR", "RETRIEVAL", "GPT-4"],
    accent: 3,
    note: "RISK MODELS / SEMANTIC SEARCH / GROUNDED ANALYSIS",
  },
  {
    slug: "ai-job-intelligence",
    title: "NERO AI JOB INTELLIGENCE",
    listTitle: "NERO AI JOB INTELLIGENCE — EVIDENCE-BASED JOB SEARCH",
    category: "GENERATIVE AI · FULL-STACK PLATFORM",
    dates: "SEP 2026 — PRESENT",
    summary:
      "A job search platform that discovers jobs, filters out the ones a candidate can't take, and decodes each job description into evidence-backed requirements. Deterministic engines score ATS alignment and job match, analyze gaps and rank what to apply to first.",
    tags: ["LLMS", "FASTAPI", "POSTGRESQL", "NEXT.JS", "AI EVALUATION"],
    description:
      "NERO is an end-to-end job search platform that turns raw job descriptions into structured, evidence-backed requirements and helps a candidate decide which jobs to apply to, with which resume.",
    tech: ["PYTHON", "FASTAPI", "PYDANTIC", "SQLALCHEMY", "ALEMBIC", "POSTGRESQL", "OPENAI STRUCTURED OUTPUTS", "NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND", "DOCKER", "GITHUB ACTIONS", "PYTEST", "VITEST"],
    overview:
      "Jobs are discovered from job boards such as Greenhouse on a schedule, then normalized and deduplicated. For each user, a hard-eligibility pre-filter removes jobs they can't take (employment type, location, remote arrangement, sponsorship, citizenship, clearance). Job Intelligence then decodes each JD into a versioned contract that keeps required and preferred skills, experience, compensation and work authorization separate. ATS Alignment, Job Match, Gap Analysis and Priority Ranking all build on that contract without re-parsing the JD.",
    context:
      "The core design rule is that AI interprets and deterministic code scores. LLM output goes through a closed schema, and every claim must quote evidence that actually appears in the source text, which blocks hallucinated requirements and prompt injection hidden in a JD or resume. Missing job data resolves to UNKNOWN, never to a silent rejection. Every analysis is versioned and insert-only, so past results never change after a resume edit.",
    results: [
      { label: "EVIDENCE GROUNDING", value: "42/42" },
      { label: "REQUIRED-SKILL P / R", value: "1.0" },
      { label: "TEST FILES", value: "110+" },
    ],
    focus: [
      {
        title: "JOB INTELLIGENCE",
        text: "Deterministic extraction followed by schema-constrained LLM decoding (OpenAI Structured Outputs), merged by a validator that rejects any claim whose evidence isn't a substring of the JD. Skills resolve through one canonical vocabulary, so k8s maps to Kubernetes while Python and PyTorch stay distinct.",
      },
      {
        title: "ELIGIBILITY & MATCHING",
        text: "A hard-eligibility pre-filter returns ELIGIBLE, INELIGIBLE or UNKNOWN with explainable checks, and no high score can override it. Job Match and ATS Alignment are kept as separate scores. ATS Alignment weights requirement coverage (40%), keyword alignment (25%), demonstrated evidence (25%) and resume parseability (10%).",
      },
      {
        title: "GAPS & RESUME IMPROVEMENT",
        text: "Gap analysis explains why each unmet requirement is a gap and what the candidate could truthfully do about it. Suggestions the candidate approves become a new resume version, which is rechecked with the ATS engine and compared with the original.",
      },
      {
        title: "AI EVALUATION",
        text: "A hand-labelled evaluation dataset of resumes, jobs, match cases and ranking pairs measures precision, recall, evidence grounding and injection detection, with a committed baseline for regression checks. Weak spots it found, such as OR-alternative handling, are recorded as follow-up tickets rather than hidden.",
      },
      {
        title: "PLATFORM",
        text: "FastAPI and PostgreSQL with Alembic migrations, authentication and rate limiting, a Next.js + TypeScript frontend, a Docker Compose stack with a discovery scheduler, and CI on GitHub Actions.",
      },
    ],
    architecture: ["DISCOVERY", "ELIGIBILITY", "JOB INTELLIGENCE", "ATS / MATCH", "GAPS", "PRIORITY"],
    repo: "https://github.com/telaprolupavan-byte/ai-job-intelligence",
  },
  {
    slug: "lapse-prediction",
    title: "LAPSE PREDICTION",
    listTitle: "POLICY LAPSE PREDICTION",
    category: "PREDICTIVE ML · PRUDENTIAL FINANCIAL",
    dates: "AUG 2023 — DEC 2024",
    summary:
      "A lapse prediction model for the Customer Retention & LTV team — flags at-risk policyholders early so retention can step in before policies lapse. Trained on 2M+ records, shipped with Docker, FastAPI and CI/CD.",
    tags: ["XGBOOST", "LIGHTGBM", "SNOWFLAKE", "MLFLOW", "DOCKER"],
    description:
      "An end-to-end lapse prediction system for Prudential's Customer Retention & LTV team, flagging at-risk policyholders early enough for the retention team to intervene.",
    tech: ["PYTHON", "SQL", "SNOWFLAKE", "PANDAS", "XGBOOST", "LIGHTGBM", "MLFLOW", "DOCKER", "FASTAPI", "GITHUB ACTIONS"],
    overview:
      "About three years of policy, premium-payment and transaction data (2M+ records) was extracted from Snowflake with SQL and validated for missing payment dates, duplicate policy records and inconsistent date formats. Behavioral features — payment latency, late and missed-payment frequency, policy age, customer engagement, service interactions and policy changes — were engineered in Pandas.",
    context:
      "A missed lapse costs the business far more than a false alarm, so the model was optimized for recall on an imbalanced dataset with probability threshold tuning, and point-in-time features with time-based splits kept future information out of training.",
    results: [
      { label: "RECORDS", value: "2M+" },
      { label: "YEARS OF HISTORY", value: "~3" },
      { label: "SCORING", value: "DAILY" },
    ],
    focus: [
      {
        title: "DATA & FEATURES",
        text: "Snowflake extraction, validation checks, and behavioral features built point-in-time to prevent temporal leakage.",
      },
      {
        title: "MODELING",
        text: "Logistic Regression, XGBoost and LightGBM tuned with GridSearchCV and tracked in MLflow; recall-first threshold tuning.",
      },
      {
        title: "MLOPS",
        text: "Docker for consistent training and serving, FastAPI inference endpoints, GitHub Actions CI/CD for testing, validation and image publishing.",
      },
      {
        title: "MONITORING",
        text: "Daily batch scoring with monitoring of inference latency, data drift and model performance, handed to MLOps for Kubernetes deployment.",
      },
    ],
    architecture: ["SNOWFLAKE", "FEATURES", "XGBOOST / LIGHTGBM", "FASTAPI", "MONITORING"],
  },
  {
    slug: "kaivan",
    title: "KAIVAN",
    listTitle: "KAIVAN — AI/ML DATA PLATFORM",
    category: "AI/ML DATA PLATFORM",
    dates: "MAR 2026 — PRESENT",
    summary:
      "A full-stack platform for my family business that turns operational data into a foundation for intelligent, data-driven applications — now expanding toward predictive analytics and decision support.",
    tags: ["NODE.JS", "EXPRESS", "MONGODB", "REST API"],
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
    repo: "https://github.com/telaprolupavan-byte/KAivan",
  },
  {
    slug: "trading-signal-assistant",
    title: "TRADING SIGNAL ASSISTANT",
    listTitle: "AI-POWERED TRADING SIGNAL ASSISTANT",
    category: "AI / COMPUTER VISION · NJIT",
    dates: "JAN 2022 — APR 2022",
    summary:
      "Analyzes candlestick chart images and video frames across 78+ patterns to generate Buy / Sell / Hold signals, with under 1.2s inference per image.",
    tags: ["TENSORFLOW", "OPENCV", "FASTAPI", "REACT", "TYPESCRIPT"],
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
  {
    slug: "gemini-ai-clone",
    title: "GEMINI AI CLONE",
    listTitle: "GEMINI AI CLONE — GENERATIVE AI ASSISTANT",
    category: "GENERATIVE AI",
    dates: "JAN 2024 — MAY 2024",
    summary:
      "A conversational AI assistant with a real-time chat interface, prompt processing, conversation handling and dynamic response rendering on top of an LLM backend.",
    tags: ["PYTHON", "LLMS", "PROMPT ENGINEERING", "REACT"],
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
  {
    slug: "ddos-detection",
    title: "DDOS DETECTION",
    listTitle: "DDOS DETECTION WITH SUPERVISED ML",
    category: "ML FOR CYBERSECURITY · NJIT",
    dates: "SEP 2022 — DEC 2022",
    summary:
      "Classification pipeline on 4M+ KDD Cup 99 network records. Random Forest reached 97.5% accuracy, and threshold tuning cut false positives by over 35%.",
    tags: ["PYTHON", "SCIKIT-LEARN", "RANDOM FOREST", "CYBERSECURITY"],
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
  {
    slug: "classification-model",
    title: "DIABETES PREDICTION",
    listTitle: "SUPERVISED CLASSIFICATION — DIABETES PREDICTION",
    category: "SUPERVISED CLASSIFICATION",
    dates: "JAN 2023 — APR 2023",
    summary:
      "End-to-end pipeline comparing Random Forest, Decision Tree and LSTM with 10-fold cross-validation. The LSTM reached 0.81 AUC and 71.3% F1, outperforming the traditional models.",
    tags: ["PYTHON", "SCIKIT-LEARN", "TENSORFLOW", "LSTM"],
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
  {
    slug: "customer-churn",
    title: "CUSTOMER CHURN",
    listTitle: "CUSTOMER CHURN PREDICTION",
    category: "PREDICTIVE ANALYTICS · IWAY SOFTWARE",
    dates: "OCT 2019 — DEC 2021",
    summary:
      "Predicts customer churn from historical customer and service data, comparing Logistic Regression, Decision Tree, Random Forest and SVM.",
    tags: ["PYTHON", "PANDAS", "SCIKIT-LEARN", "SQL"],
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
  {
    slug: "cloud-infrastructure",
    title: "CLOUD INFRASTRUCTURE",
    listTitle: "CLOUD INFRASTRUCTURE MONITORING & INCIDENT MANAGEMENT",
    category: "CLOUD OPERATIONS · LUCID SOFTWARE",
    dates: "AUG 2025 — PRESENT",
    summary:
      "Monitoring, troubleshooting and incident resolution across AWS and Azure — CloudWatch and Azure Monitor alerts, VNets, subnets, firewalls, IAM and SOP documentation.",
    tags: ["AWS", "AZURE", "CLOUDWATCH", "AZURE MONITOR", "IAM"],
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
  {
    slug: "delve-unv",
    title: "DELVE UNV",
    listTitle: "DELVE UNV — UNIVERSITY SEARCH PLATFORM",
    category: "UNIVERSITY SEARCH PLATFORM · NJIT",
    dates: "2023",
    summary:
      "A team project at NJIT: a data-driven platform that helps international students discover and compare universities by program, location, tuition and eligibility.",
    tags: ["PYTHON", "REACT", "SQL", "REST APIS"],
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
  {
    slug: "turtleback-zoo",
    title: "TURTLEBACK ZOO",
    listTitle: "TURTLEBACK ZOO — FULL-STACK APPLICATION",
    category: "FULL-STACK DATABASE APPLICATION",
    dates: "NOV 2023 — DEC 2023",
    summary:
      "A database-driven full-stack application for managing zoo operations — animals, buildings, attractions, employees and daily activities.",
    tags: ["REACT", "NODE.JS", "SQL", "REST APIS"],
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
  {
    slug: "amazon-api-gateway",
    title: "AMAZON API GATEWAY",
    listTitle: "AMAZON API GATEWAY — CLOUD API INTEGRATION",
    category: "CLOUD API INTEGRATION",
    dates: "MAR 2019 — AUG 2019",
    summary:
      "Designed, configured and tested RESTful APIs on Amazon API Gateway — resources, HTTP methods, request handling and backend endpoint integrations.",
    tags: ["AWS", "API GATEWAY", "REST APIS"],
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
];

export const mindset = [
  {
    number: "01",
    title: "START FROM THE DECISION",
    text: "Frame the model around who acts on it — a retention team reaching at-risk policyholders, a compliance team triaging the riskiest cases first.",
  },
  {
    number: "02",
    title: "TRUST THE DATA FIRST",
    text: "Validate before modeling: missing dates, duplicate records, inconsistent formats, and point-in-time features that prevent temporal leakage.",
  },
  {
    number: "03",
    title: "EVALUATE HONESTLY",
    text: "Pick the metric the business pays for — recall when a missed lapse costs more than a false alarm — and tune thresholds to match.",
  },
  {
    number: "04",
    title: "SHIP IT AS SOFTWARE",
    text: "FastAPI inference, Docker for consistent training and serving, GitHub Actions CI/CD, and experiments tracked in MLflow.",
  },
  {
    number: "05",
    title: "WATCH IT IN PRODUCTION",
    text: "Monitor inference latency, data drift and model degradation. A model is valuable when it keeps working after launch.",
  },
];

export const education = [
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
