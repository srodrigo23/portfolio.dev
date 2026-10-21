/**
 * Single source of truth for portfolio content, extracted from
 * public/files/cv_en.pdf. Update here — components only render this data.
 */

export const profile = {
  firstName: "SERGIO RODRIGO",
  lastName: "CÁRDENAS RIVERA",
  role: "Full-Stack Software Engineer",
  availability: "Freelance · open to remote and international roles",
  location: "Cochabamba, Bolivia",
  email: "rodrigosergio93@gmail.com",
  phone: "+591 77418588",
  github: "https://github.com/srodrigo23",
  linkedin: "https://www.linkedin.com/in/srodrigo23",
  cvFile: "/files/cv_en.pdf",
  tagline:
    "4+ years building web apps, mobile apps and data solutions with TypeScript, React, Next.js, Nest.js, React Native and Python. Tech Lead and Product Owner, shipped to production on AWS.",
  summary: [
    "Full-stack Software Engineer with 4+ years of experience building web and mobile applications with TypeScript, React, Next.js, Nest.js, React Native and Python, plus experience in data engineering and machine learning.",
    "Led development teams as Tech Lead and Product Owner, shipped web and mobile products to production on AWS, and delivered solutions for international clients on the Salesforce platform. University programming instructor since 2014.",
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
    company: "Freelance",
    role: "Full-Stack Software Engineer",
    period: "May 2026 — Present",
    location: "Cochabamba, Remote",
    intro: "Custom enterprise software for local institutions.",
    bullets: [
      "Streamlined clients' corporate information management, reducing operational workload and turnaround times",
      "Build and deploy full-stack web applications with Next.js, React and FastAPI, containerized with Docker",
      "Turn functional and technical requirements into web application specifications",
      "Train end users on the applications delivered",
    ],
    stack: ["Next.js", "React", "TypeScript", "Redux", "Zustand", "Tailwind CSS", "FastAPI", "Docker"],
  },
  {
    company: "SHEMA YISRAEL S.R.L.",
    role: "Tech Lead & Software Engineer",
    period: "May 2025 — May 2026",
    location: "Cochabamba, On-site",
    intro:
      "Head of the software department; Product Owner and technical lead of the development team.",
    bullets: [
      "Designed and implemented web and mobile educational platforms for medical studies",
      "Released web and mobile (React Native) apps to production on AWS (Amplify, S3, RDS)",
      "Led the team with agile methodologies, prioritizing the backlog as Product Owner",
      "Established quality standards and code review practices",
    ],
    stack: ["Next.js", "Nest.js", "React", "React Native", "Redux", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "AWS"],
  },
  {
    company: "Alicorp (Peru)",
    role: "Data Engineer",
    period: "Aug 2024 — Nov 2024",
    location: "Remote",
    intro:
      "Customer analytics for the Bolivian operation of a Peruvian consumer goods company.",
    bullets: [
      "Segmented customers with clustering algorithms by purchase frequency, amount spent and payment time, as the basis for discount policies",
      "Built ETL processes to extract, transform and load sales data from SQL Server",
      "Prepared customer purchase data from Bolivia's main economic corridor for unsupervised learning models",
      "Presented results through visualizations to support commercial decisions",
    ],
    stack: ["Python", "scikit-learn", "matplotlib", "SQL Server", "PostgreSQL"],
  },
  {
    company: "Oktana Corporation",
    role: "Software Engineer",
    period: "Dec 2021 — Feb 2024",
    location: "Remote",
    intro:
      "Software consultancy specialized in Salesforce, serving clients such as Sony PlayStation, Zola, Looker and Okta.",
    bullets: [
      "Implemented the architecture of NLP conversational chatbots (Rasa) integrated with WhatsApp through the Meta API",
      "Built web apps with Python (Flask, SQLAlchemy) and React, and with Next.js, TypeScript, Tailwind CSS, Prisma and PostgreSQL",
      "Deployed on Heroku and AWS S3 with Docker",
      "Developed Salesforce demos with Aura and Lightning Web Components for client presentations",
      "Earned the Salesforce Developer I certification",
    ],
    stack: ["Python", "Flask", "Rasa", "React", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Salesforce"],
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
  /** Full-bleed card art, e.g. "/img/projects/media-box.webp". Optional —
   *  cards fall back to a plain accent wash while a project has no image. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Video Surveillance Smart System",
    kind: "Computer Vision · AI",
    year: "2021",
    description: "Home surveillance that spots fire, smoke and people live.",
    bullets: [
      "Distributed client-server video processing",
      "Neural network for human detection",
      "Alerts over SMTP and WhatsApp",
    ],
    stack: ["Python", "OpenCV", "Neural Networks", "HTTP streaming"],
    link: "https://github.com/srodrigo23",
  },
  {
    title: "Media Box Player",
    kind: "Android · Mobile",
    year: "2018",
    description: "Native Android app for cloud multimedia streaming.",
    bullets: [
      "Model-View-Presenter architecture",
      "Dropbox API over OAuth",
      "Adaptive streaming with ExoPlayer",
    ],
    stack: ["Java", "Android SDK", "ExoPlayer", "Dropbox API"],
    link: "https://github.com/srodrigo23",
  },
  {
    title: "WhatsApp NLP Chatbots",
    kind: "NLP · Conversational AI",
    year: "2022 — 2024",
    description: "Production WhatsApp chatbots built at Oktana.",
    bullets: [
      "Conversational flows on Rasa",
      "Meta API for messaging",
      "Python services with Flask and FastAPI",
    ],
    stack: ["Rasa", "Python", "Meta API", "NLP"],
  },
  {
    title: "rodres.xyz",
    kind: "Web · Portfolio",
    year: "2026",
    description: "This site — a single-page portfolio on the App Router.",
    bullets: [
      "Next.js 16 with React Server Components",
      "Light and dark themes from Tailwind v4 tokens",
      "Scroll-linked reveals via IntersectionObserver",
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
    title: "Master's Degree in Data Science and Intelligent Technologies",
    detail: "In progress",
    period: "In progress",
    school: "Universidad Técnica de Oruro",
    location: "Remote",
  },
  {
    title: "Postgraduate Diploma in Competency-Based Higher Education",
    detail: "Postgraduate diploma",
    period: "Sep 2021",
    school: "Universidad Mayor de San Simón (UMSS)",
    location: "Cochabamba, BO",
  },
  {
    title: "Informatics Engineering",
    detail: "Bachelor's degree",
    period: "2018 — 2021",
    school: "Universidad Mayor de San Simón (UMSS)",
    location: "Cochabamba, BO",
  },
  {
    title: "Systems Engineering",
    detail: "Bachelor's degree",
    period: "2011 — 2017",
    school: "Universidad Mayor de San Simón (UMSS)",
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
  { title: "Frontend Developer (React)", issuer: "HackerRank", year: "2026", link: "https://www.hackerrank.com/certificates/ec0617594afe" },
  { title: "React (Basic)", issuer: "HackerRank", year: "2026", link: "https://www.hackerrank.com/certificates/af68fd41c99e" },
  { title: "Power BI Basic and Intermediate", issuer: "UMSS", year: "2023" },
  { title: "Crash Course on Python", issuer: "Coursera (Google)", year: "2023", link: "https://coursera.org/share/93b9d9abe585cad1e39e8ca427032db2" },
  { title: "Trailhead Ranger", issuer: "Salesforce Trailhead", year: "2022", link: "https://www.salesforce.com/trailblazer/srodrigo23" },
  { title: "Salesforce Developer I", issuer: "Salesforce", year: "2022", link: "https://www.salesforce.com/trailblazer/srodrigo23" },
  { title: "Python (Basic)", issuer: "HackerRank", year: "2022", link: "https://www.hackerrank.com/certificates/bf595008a8ce" },
  { title: "Java (Basic)", issuer: "HackerRank", year: "2020", link: "https://www.hackerrank.com/certificates/0c54c3e28f00" },
  { title: "Problem Solving (Basic)", issuer: "HackerRank", year: "2020", link: "https://www.hackerrank.com/certificates/2f7a6e9672d8" },
];

export const teaching = {
  summary:
    "Professor and teaching assistant at San Simón University since 2014 — Computación 1, Sistemas de Información 2, and VBA/Excel instruction. Mentor at the Tech4Future Hackathon 2026 and the Google 'Build with AI' Hackathon 2025.",
};

/**
 * Hero diagram: five layers of a typical system, each tied to where the work
 * actually happened (all drawn from cv.md).
 */
export type SystemNode = {
  id: "web" | "mobile" | "api" | "data" | "cloud";
  label: string;
  hint: string;
  where: string[];
  stack: string[];
};

export const systemMap: SystemNode[] = [
  {
    id: "web",
    label: "Web",
    hint: "Next.js · React",
    where: [
      "Freelance: full-stack web apps for local institutions",
      "SHEMA YISRAEL: web educational platforms for medical studies",
      "Oktana: web apps with React, Next.js and Flask",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "Zustand"],
  },
  {
    id: "mobile",
    label: "Mobile",
    hint: "React Native · Android",
    where: [
      "SHEMA YISRAEL: React Native apps released to production",
      "Media Box Player: native Android streaming app (capstone)",
    ],
    stack: ["React Native", "Android (Java / Kotlin)"],
  },
  {
    id: "api",
    label: "API",
    hint: "Nest.js · FastAPI",
    where: [
      "SHEMA YISRAEL: Nest.js back end for web and mobile",
      "Freelance: FastAPI services in Docker",
      "Oktana: Python services with Flask, SQLAlchemy and Rasa",
    ],
    stack: ["Nest.js", "FastAPI", "Flask", "SQLAlchemy", "Prisma", "Express"],
  },
  {
    id: "data",
    label: "Data",
    hint: "Python · SQL",
    where: [
      "Alicorp: ETL from SQL Server and customer clustering for discount policies",
      "Master's in Data Science and Intelligent Technologies (in progress)",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "matplotlib", "PostgreSQL", "SQL Server", "Power BI"],
  },
  {
    id: "cloud",
    label: "Cloud",
    hint: "AWS · Docker",
    where: [
      "SHEMA YISRAEL: production releases on AWS (Amplify, S3, RDS)",
      "Oktana: deployments on Heroku and AWS S3",
      "Freelance: Docker-containerized deployments",
    ],
    stack: ["AWS", "Amplify", "S3", "RDS", "Lambda", "Docker", "Heroku"],
  },
];
