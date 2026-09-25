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
    "Outside client work he designed and built NERO, an AI job intelligence platform where every LLM claim must quote its source text and every score comes from deterministic, explainable code, backed by its own AI evaluation framework.",
    "He cares about the whole path: clean data, honest evaluation, and models that are served, monitored and actually used.",
  ],
  skills: [
    "Python", "SQL", "JavaScript", "TypeScript", "Java",
    "scikit-learn", "XGBoost", "LightGBM", "Random Forest", "PyTorch", "TensorFlow", "OpenCV",
    "RAG", "Semantic Search", "Vector / Graph Embeddings", "GPT-4", "OpenAI Embeddings", "pgvector", "Prompt Engineering",
    "LLM Evaluation", "Structured Outputs",
    "FastAPI", "Docker", "MLflow", "GitHub Actions", "Node.js", "Next.js", "REST APIs",
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
// page and the "Ask about Pavan" assistant. `story`, `pipeline`, `principles`,
// `evaluation` and `roadmap` are optional deeper sections of a case study.
export const projects = [
  {
    slug: "nero",
    title: "NERO AI JOB INTELLIGENCE",
    listTitle: "NERO — AI JOB INTELLIGENCE PLATFORM",
    category: "GENERATIVE AI · FULL-STACK PLATFORM",
    dates: "SEP 2026 — PRESENT",
    summary:
      "An AI job search platform I designed and built end to end. NERO reads every job description the way a careful recruiter would, turns it into evidence-backed requirements, and shows a candidate which jobs they can take, how their resume reads against each one, what to improve and where to apply first.",
    tags: ["LLMS", "EVIDENCE GROUNDING", "FASTAPI", "POSTGRESQL", "NEXT.JS", "AI EVALUATION"],
    description:
      "NERO is an AI job intelligence platform I designed and built end to end. It discovers jobs, decodes every job description into structured, evidence-backed requirements, and takes a candidate from \"which jobs can I even take?\" to \"which one should I apply to first, and with which resume?\" It never invents a requirement, a skill or a score.",
    tech: [
      "PYTHON", "FASTAPI", "PYDANTIC", "SQLALCHEMY", "ALEMBIC", "POSTGRESQL",
      "OPENAI STRUCTURED OUTPUTS", "NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS", "SHADCN/UI",
      "DOCKER COMPOSE", "GITHUB ACTIONS", "PYTEST", "VITEST",
    ],
    overview:
      "Job searching is noisy and hard to see into. Postings mix hard requirements with nice-to-haves, bury deal-breakers like sponsorship or security clearance in the fine print, and every applicant tracking system reads a resume a little differently. Most AI job tools answer with a single confident match percentage that nobody can check, and fill the gaps with guesses.",
    context:
      "NERO takes the opposite approach. It gives each question a candidate actually has its own engine and its own explainable answer: can I be considered, what does this job require, how well do I fit, how will an ATS read my resume, what should I improve, and where should I start. AI is used where language needs understanding. Every score is computed by deterministic, versioned, tested code, and every AI claim has to quote the text it came from.",
    story: {
      title: "WHY I BUILT NERO",
      paragraphs: [
        "I built NERO because I was living the problem. As an AI/ML engineer on the job market, I kept running into tools that hand you one match score with no explanation, suggest resume lines you never earned, and treat \"the posting doesn't say\" as \"you don't qualify.\"",
        "So I wrote the rules before the code, and built them into the architecture: AI may understand text but never decides a score. Every claim needs evidence you can point to. Unknown stays unknown. And the candidate is always the one who decides and applies.",
        "I ran it like a product team of one. Every capability started as a numbered ticket with acceptance rules, was built behind tests, and had its design decisions recorded in the architecture notes before the next one began: more than 30 tickets and 200 commits in under two weeks.",
      ],
    },
    results: [
      { label: "PIPELINE STAGES", value: "9" },
      { label: "AI EVIDENCE GROUNDED", value: "42/42" },
      { label: "BACKEND TESTS", value: "1,390+" },
      { label: "TICKETS SHIPPED", value: "30+" },
    ],
    pipeline: [
      {
        title: "RESUME INTELLIGENCE",
        question: "WHAT DOES THIS RESUME ACTUALLY DEMONSTRATE?",
        text: "PDF and DOCX resumes are validated and parsed into sections, contact details, bullets and skills, then analyzed by an LLM. Each skill is marked as demonstrated in real work or only listed. A job-independent General Resume Score averages five ratio-based components (structure, action-oriented writing, measurable impact, clarity and skill evidence), so a longer resume can't score higher just by being longer.",
      },
      {
        title: "JOB DISCOVERY",
        question: "WHAT JOBS ARE OUT THERE?",
        text: "A provider-independent pipeline fetches, normalizes, validates, deduplicates and stores jobs on a six-hour schedule. The shared HTTP client handles retries with backoff, Retry-After, response size caps and throttling. One malformed record is counted and skipped instead of failing the run, and unsafe links are never stored. Candidates can also paste any posting, which stays private to them.",
      },
      {
        title: "HARD ELIGIBILITY",
        question: "CAN THIS JOB EVEN BE CONSIDERED?",
        text: "A deterministic pre-filter checks employment type, location, remote arrangement, sponsorship, citizenship, security clearance and, if the candidate opts in, minimum experience. The result is ELIGIBLE, INELIGIBLE or UNKNOWN, with a reason for every check. No score can override it, and a posting that doesn't say is UNKNOWN, never a silent rejection.",
      },
      {
        title: "JOB INTELLIGENCE",
        question: "WHAT DOES THIS JOB REALLY REQUIRE?",
        text: "Deterministic extraction runs first, then an LLM decodes meaning into a strict schema. The result is a versioned contract: title, seniority and role family, employment and location, required and preferred skills (never collapsed into one list), experience, compensation and work authorization, with responsibilities kept apart from requirements. Requirement Intelligence adds four importance tiers, AND / OR / minimum-count / equivalent relationships, character-level source spans, and duplicate, contradiction and prompt-injection detection.",
      },
      {
        title: "JOB MATCH",
        question: "HOW WELL DOES THIS JOB FIT ME?",
        text: "A 0–100 fit score built from must-have skills (35), preferred skills (15), experience (20), role alignment (15), location (10) and employment type (5). Every requirement shows the resume evidence behind it, and the result carries a confidence level.",
      },
      {
        title: "ATS ALIGNMENT",
        question: "HOW WILL AN ATS READ THIS RESUME FOR THIS JOB?",
        text: "NERO's own estimate, never presented as an employer's score. Each requirement is matched, partial or missing, and the score weights requirement coverage (40%), keyword alignment (25%), demonstrated evidence (25%) and parseability (10%). A must-have ceiling means a resume missing required skills can't score highly just because it is well formatted. It is always shown separately from Job Match.",
      },
      {
        title: "GAPS & RESUME IMPROVEMENT",
        question: "WHAT CAN I TRUTHFULLY IMPROVE?",
        text: "Every partial or missing requirement becomes a gap with a suggestion type decided in code: missing means \"add if true\", partial means \"rephrase what's there\". The AI may only write an explanation that quotes that gap's own evidence, and an \"add if true\" suggestion must be phrased conditionally, never as a claim. Suggestions the candidate approves become a new resume version, which is rechecked and compared with the original.",
      },
      {
        title: "PRIORITY RANKING",
        question: "WHERE SHOULD I START?",
        text: "An explained ordering, not another blended score. Ineligible jobs are excluded and eligible jobs come before unknown ones. Jobs are then ordered by Job Match, with ATS Alignment breaking ties and the newest posting first after that. Every position lists the evidence and cautions behind it, and outdated inputs are flagged. It makes zero AI calls and uses a fixed number of database queries per request.",
      },
      {
        title: "APPLICATION TRACKING",
        question: "WHAT HAPPENED NEXT?",
        text: "Saved, applied, interviewing, offer, rejected or withdrawn, with an append-only status timeline for every application. NERO only records what the candidate did. It never submits an application on anyone's behalf.",
      },
    ],
    principles: [
      {
        title: "AI UNDERSTANDS, CODE DECIDES",
        text: "LLMs interpret language. Every score, ranking and suggestion type comes from deterministic, versioned code that gives the same answer for the same input.",
      },
      {
        title: "EVIDENCE OR IT DIDN'T HAPPEN",
        text: "Every AI claim must quote text that literally appears in the job description or resume. Anything unsupported is dropped and replaced with a safe deterministic result.",
      },
      {
        title: "UNKNOWN STAYS UNKNOWN",
        text: "Missing data never turns into a guess, a zero or a rejection. It is labelled unknown and explained.",
      },
      {
        title: "ONE QUESTION, ONE ENGINE",
        text: "Eligibility, Job Match, ATS Alignment, gaps and priority each answer a different question and are never blended into one opaque number.",
      },
      {
        title: "HISTORY IS NEVER REWRITTEN",
        text: "Analyses are insert-only and stamped with analysis, analyzer, prompt and engine versions, so a past result stays exactly as it was after a resume edit or a logic change.",
      },
      {
        title: "INPUT IS UNTRUSTED",
        text: "Job descriptions and resumes are treated as data, never as instructions. Known prompt-injection phrasing is detected and flagged.",
      },
      {
        title: "THE CANDIDATE DECIDES",
        text: "Nothing changes a resume without the candidate's approval, and NERO never applies to a job for them.",
      },
      {
        title: "MEASURE HONESTLY",
        text: "If an evaluation can't run, it reports NOT RUN instead of substituting mocked output. Weak spots are written down, not hidden.",
      },
    ],
    evaluation: {
      intro:
        "NERO ships with its own AI evaluation framework: a hand-labelled dataset of 6 resumes, 6 jobs, 9 match cases and 5 ranking pairs, run through the production code paths. The committed baseline is checked by the test suite, so a change that makes NERO less accurate fails CI. The first baseline covers every deterministic stage. Live LLM evaluation is built in and runs on request.",
      rows: [
        { capability: "JOB INTELLIGENCE", metric: "Required skills, precision / recall", value: "1.0 / 1.0" },
        { capability: "JOB INTELLIGENCE", metric: "Evidence quoted verbatim from the JD", value: "42/42" },
        { capability: "JOB INTELLIGENCE", metric: "Required vs. preferred tier accuracy", value: "25/25" },
        { capability: "REQUIREMENT INTELLIGENCE", metric: "\"A or B\" and \"A and B\" groups found", value: "3/3 · 4/4" },
        { capability: "RESUME ANALYSIS", metric: "Skill recall / precision", value: "1.0 / 0.98" },
        { capability: "JOB MATCH", metric: "Strong resume ranked above weak for the same job", value: "5/5" },
        { capability: "GAP ANALYSIS", metric: "Missing-requirement recall", value: "0.96" },
        { capability: "ALL STAGES", metric: "Pipeline error rate", value: "0.0" },
      ],
      findings:
        "The evaluation also did its job by finding real issues: \"A or B\" alternatives such as \"PyTorch or TensorFlow\" are still treated as two separate requirements by Job Match and Gap Analysis, dotted names like Next.js are split mid-word, and a detected prompt injection can still add a requirement. Each finding is recorded with its cause and queued as a follow-up.",
    },
    focus: [
      {
        title: "SCHEMA-CONSTRAINED LLMS",
        text: "OpenAI Structured Outputs with closed Pydantic schemas that reject unexpected fields. A validator merges deterministic and AI results field by field. If the AI call fails, the result degrades to a partial, deterministic one instead of an error, and every stored field records whether it came from the AI or the fallback.",
      },
      {
        title: "ONE SKILL VOCABULARY",
        text: "A single canonical skill service is shared by resume analysis, job extraction and matching. It resolves \"k8s\" to Kubernetes and \"GCP\" to Google Cloud, keeps related-but-different technologies like Python and PyTorch apart, and doesn't let React Native count as React.",
      },
      {
        title: "VERSIONED, REPRODUCIBLE RESULTS",
        text: "Every AI and scoring result is insert-only, content-fingerprinted and idempotent, with separate analysis, analyzer, prompt and engine versions. Repeating a request returns the same result instead of paying for another AI call.",
      },
      {
        title: "PRIVACY BY CONSTRUCTION",
        text: "Every personalized query is scoped to the user and the chosen resume version. Another user's private job returns the same 404 as one that doesn't exist, and the public job listing is never personalized. JWT authentication, Argon2 password hashing, rate-limited auth endpoints and a password reset flow.",
      },
      {
        title: "PRODUCTION ENGINEERING",
        text: "FastAPI and PostgreSQL with Alembic migrations, a Docker Compose stack with a discovery scheduler, and a Next.js + TypeScript app built from Figma designs, with loading, empty, error and retry states for every stage. GitHub Actions migrates an empty database, runs the full pytest suite, and type-checks, lints, tests and builds the web app on every change.",
      },
    ],
    architecture: ["RESUME", "DISCOVERY", "ELIGIBILITY", "JOB INTELLIGENCE", "MATCH / ATS", "GAPS", "PRIORITY", "TRACKING"],
    accent: 3,
    note: "EVIDENCE-GROUNDED AI / EXPLAINABLE SCORES / THE CANDIDATE DECIDES",
    roadmap: [
      "Treat \"A or B\" requirements as true alternatives in Job Match and Gap Analysis.",
      "Act on detected prompt injection, and add injection detection on the resume side.",
      "Run and commit the live LLM evaluation baseline next to the deterministic one.",
      "Connect a second job source once its terms of use are reviewed and approved.",
      "Keep dotted skill names such as Next.js and Node.js intact during extraction.",
    ],
    repo: "https://github.com/telaprolupavan-byte/ai-job-intelligence",
  },
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
