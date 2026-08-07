/**
 * Single source of truth for portfolio content, extracted from
 * public/files/cv_en.pdf. Update here — components only render this data.
 */

export const profile = {
  firstName: "SERGIO RODRIGO",
  lastName: "CÁRDENAS RIVERA",
  role: "Software Engineer · Tech Lead",
  location: "Cochabamba, Bolivia",
  email: "rodrigosergio93@gmail.com",
  phone: "+591 77418588",
  github: "https://github.com/srodrigo23",
  linkedin: "https://www.linkedin.com/in/srodrigo23",
  cvFile: "/files/cv_en.pdf",
  tagline:
    "I build full-stack web products, mobile apps and data solutions — currently leading an agile team shipping international software with Next.js, NestJS and AWS.",
  summary: [
    "I am a software engineer with a strong background in full-stack web development, mobile, and data science. I have expanded my technical skills into data engineering, machine learning and deep learning through continuous training and a strong commitment to lifelong learning.",
    "I bring proactivity, clear communication and adaptability to development teams, which lets me integrate efficiently with new technologies, workflows and methodologies. Combining solid technical skills with creativity and problem-solving, I aim to deliver measurable impact in complex, high-value projects.",
  ],
  highlights: [
    "Tech Lead on international projects across Latin America, Israel and Korea",
    "Master's candidate in Data Science & Smart Technologies",
    "University professor and hackathon mentor",
    "Double degree: Systems Engineering & Informatics Engineering",
  ],
};

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  intro: string;
  bullets: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "SHEMA YISRAEL S.R.L.",
    role: "Software Engineer — Tech Lead",
    period: "Apr 2025 — Present",
    location: "Cochabamba, Bolivia",
    intro:
      "Company delivering international software projects throughout Latin America, Israel and Korea. As team leader I run the agile process, organize the team, and develop and review feature implementations.",
    bullets: [
      "Full-stack web development with Next.js, NestJS and PostgreSQL",
      "Deployments on AWS with S3, Amplify and RDS",
      "Native mobile development with React Native",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "AWS", "React Native"],
  },
  {
    company: "Alicorp",
    role: "Data Engineer",
    period: "Aug 2024 — Nov 2024",
    location: "Remote",
    intro:
      "Food-industry company with a huge volume of sales and customer data, offering the best deals to their customers.",
    bullets: [
      "Unsupervised machine-learning algorithms for customer segmentation",
      "Python with ML libraries such as scikit-learn",
      "Data visualization with matplotlib",
      "Database management and queries with SQL Server and PostgreSQL",
    ],
    stack: ["Python", "scikit-learn", "matplotlib", "SQL Server", "PostgreSQL"],
  },
  {
    company: "Oktana Corporation",
    role: "Software Engineer",
    period: "Dec 2021 — Feb 2024",
    location: "Remote",
    intro:
      "Software development agency helping companies innovate with Salesforce technologies.",
    bullets: [
      "Web applications with Python: Flask, FastAPI, SQLAlchemy, Docker and the Rasa framework",
      "NLP application building WhatsApp chatbots with the Meta API",
      "Front-end projects with TypeScript, Tailwind CSS, Next.js, Prisma, PostgreSQL, Heroku and AWS S3",
      "Salesforce demos with Aura and Lightning Web Components",
    ],
    stack: ["Flask", "FastAPI", "React", "Rasa", "Next.js", "Salesforce"],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "VBA"],
  },
  {
    title: "Front-end",
    items: ["HTML", "CSS", "React.js", "Vue.js", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Back-end",
    items: ["Flask", "FastAPI", "Express.js", "NestJS"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Firebase Storage"],
  },
  {
    title: "Cloud (AWS)",
    items: ["Amplify", "Lambda", "RDS", "S3"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git"],
  },
  {
    title: "Mobile",
    items: ["Android (Java / Kotlin)", "React Native"],
  },
  {
    title: "Salesforce",
    items: ["LWC", "Aura", "Apex", "SOQL", "SOSL"],
  },
];

export type Project = {
  title: string;
  kind: string;
  year: string;
  description: string;
  bullets: string[];
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Video Surveillance Smart System",
    kind: "Computer Vision · AI",
    year: "2021",
    description:
      "AI-powered home surveillance system for real-time fire, smoke and human detection.",
    bullets: [
      "Client-server architecture for distributed video processing",
      "Real-time frame capture with server-side image-processing pipeline",
      "Pre-trained neural network for human silhouette detection",
      "Automated alerts via SMTP and the WhatsApp API",
    ],
    stack: ["Python", "OpenCV", "Neural Networks", "HTTP streaming"],
    link: "https://github.com/srodrigo23",
  },
  {
    title: "Media Box Player",
    kind: "Android · Mobile",
    year: "2018",
    description:
      "Native Android application for cloud-based multimedia streaming.",
    bullets: [
      "Model-View-Presenter architecture for maintainability",
      "Dropbox API integration with secure OAuth authentication",
      "Adaptive video streaming with ExoPlayer",
      "Background threads and async data loading for performance",
    ],
    stack: ["Java", "Android SDK", "ExoPlayer", "Dropbox API"],
    link: "https://github.com/srodrigo23",
  },
  {
    title: "WhatsApp NLP Chatbots",
    kind: "NLP · Conversational AI",
    year: "2022 — 2024",
    description:
      "Production chatbots for WhatsApp built at Oktana with natural language processing.",
    bullets: [
      "Conversational flows built on the Rasa framework",
      "Meta API integration for WhatsApp messaging",
      "Python back-end services with Flask and FastAPI",
    ],
    stack: ["Rasa", "Python", "Meta API", "NLP"],
  },
  {
    title: "srodrigo23.dev",
    kind: "Web · Portfolio",
    year: "2026",
    description:
      "This site — a fast, single-page portfolio built with the App Router.",
    bullets: [
      "Next.js 16 with React Server Components",
      "Tailwind CSS v4 theme tokens, single dark theme",
      "Scroll-linked reveal animations with IntersectionObserver",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/srodrigo23/portfolio",
  },
];

export type Degree = {
  title: string;
  detail: string;
  period: string;
  school: string;
  location: string;
};

export const education: Degree[] = [
  {
    title: "Master in Data Science & Smart Technologies",
    detail: "In progress",
    period: "Current",
    school: "Oruro's Technical University",
    location: "Remote",
  },
  {
    title: "Postgraduate Diploma in Higher Education Teaching",
    detail: "Teaching credential",
    period: "2021",
    school: "San Simón University",
    location: "Cochabamba, BO",
  },
  {
    title: "Informatics Engineering",
    detail: "Bachelor's degree",
    period: "2018 — 2021",
    school: "San Simón University",
    location: "Cochabamba, BO",
  },
  {
    title: "Systems Engineering",
    detail: "Bachelor's degree",
    period: "2011 — 2018",
    school: "San Simón University",
    location: "Cochabamba, BO",
  },
];

/** `link` is optional — fill it in and the entry renders as an anchor. */
export type Certification = {
  title: string;
  issuer: string;
  year: string;
  link?: string;
};

export const certifications: Certification[] = [
  { title: "React Front-End Developer (Role)", issuer: "HackerRank", year: "2026" },
  { title: "React (Basic)", issuer: "HackerRank", year: "2026" },
  // { title: "Power BI — Basic & Intermediate", issuer: "San Simón University", year: "2023" },
  { title: "Crash Course in Python", issuer: "Coursera", year: "2023" },
  { title: "Trailhead Ranger Level", issuer: "Salesforce Trailhead", year: "2022" },
  { title: "Salesforce Developer 1", issuer: "Salesforce Trailhead", year: "2022" },
  { title: "Python (Basic)", issuer: "HackerRank", year: "2022" },
  { title: "Java (Basic)", issuer: "HackerRank", year: "2020" },
  { title: "Problem Solving", issuer: "HackerRank", year: "2020" },
];

export const teaching = {
  summary:
    "Professor and teaching assistant at San Simón University since 2014 — Computación 1, Sistemas de Información 2, and VBA/Excel instruction. Mentor at the Tech4Future Hackathon 2026 and the Google 'Build with AI' Hackathon 2025.",
};
