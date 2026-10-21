/**
 * Spanish content — mirrors app/data/cv.ts field by field (translated from
 * cv.md). Stack/tech names and links are shared with the English source.
 */
import {
  certifications as certsEn,
  education as educationEn,
  experience as experienceEn,
  profile as profileEn,
  projects as projectsEn,
  skillGroups as skillGroupsEn,
  systemMap as systemMapEn,
  type Certification,
  type Degree,
  type Job,
  type Project,
  type SkillGroup,
  type SystemNode,
} from './cv';

export const profile: typeof profileEn = {
  ...profileEn,
  role: 'Ingeniero de Software Full-Stack',
  availability: 'Freelance · abierto a roles remotos e internacionales',
  tagline:
    'Más de 4 años creando aplicaciones web, móviles y soluciones de datos con TypeScript, React, Next.js, Nest.js, React Native y Python. Tech Lead y Product Owner, con productos en producción en AWS.',
  summary: [
    'Ingeniero de software full-stack con más de 4 años de experiencia creando aplicaciones web y móviles con TypeScript, React, Next.js, Nest.js, React Native y Python, además de experiencia en ingeniería de datos y machine learning.',
    'Lideré equipos de desarrollo como Tech Lead y Product Owner, llevé productos web y móviles a producción en AWS y entregué soluciones para clientes internacionales en la plataforma Salesforce. Docente universitario de programación desde 2014.',
  ],
  highlights: [
    'Tech Lead en proyectos internacionales en Latinoamérica, Israel y Corea',
    'Maestrante en Ciencia de Datos y Tecnologías Inteligentes',
    'Docente universitario y mentor de hackathones',
    'Doble titulación: Ingeniería de Sistemas e Ingeniería Informática',
  ],
};

const jobText: Pick<Job, 'role' | 'period' | 'location' | 'intro' | 'bullets'>[] = [
  {
    role: 'Ingeniero de Software Full-Stack',
    period: 'May 2026 — Actualidad',
    location: 'Cochabamba, remoto',
    intro: 'Desarrollo de software empresarial a medida para instituciones locales.',
    bullets: [
      'Agilicé la gestión de la información corporativa de los clientes, reduciendo la carga operativa y los tiempos de respuesta',
      'Construyo y despliego aplicaciones web full-stack con Next.js, React y FastAPI, contenerizadas con Docker',
      'Convierto requisitos funcionales y técnicos en especificaciones de aplicaciones web',
      'Capacito a los usuarios finales en las aplicaciones entregadas',
    ],
  },
  {
    role: 'Tech Lead e Ingeniero de Software',
    period: 'May 2025 — May 2026',
    location: 'Cochabamba, presencial',
    intro:
      'Jefe del departamento de software; Product Owner y líder técnico del equipo de desarrollo.',
    bullets: [
      'Diseñé e implementé plataformas educativas web y móviles para estudios de medicina',
      'Publiqué aplicaciones web y móviles (React Native) en producción en AWS (Amplify, S3, RDS)',
      'Lideré el equipo con metodologías ágiles, priorizando el backlog como Product Owner',
      'Establecí estándares de calidad y prácticas de revisión de código',
    ],
  },
  {
    role: 'Ingeniero de Datos',
    period: 'Ago 2024 — Nov 2024',
    location: 'Remoto',
    intro:
      'Analítica de clientes para la operación boliviana de una empresa peruana de consumo masivo.',
    bullets: [
      'Segmenté clientes con algoritmos de clustering según frecuencia de compra, monto gastado y tiempo de pago, como base para políticas de descuento',
      'Construí procesos ETL para extraer, transformar y cargar datos de ventas desde SQL Server',
      'Preparé los datos de compras de clientes del principal eje económico de Bolivia para modelos de aprendizaje no supervisado',
      'Presenté los resultados con visualizaciones para apoyar decisiones comerciales',
    ],
  },
  {
    role: 'Ingeniero de Software',
    period: 'Dic 2021 — Feb 2024',
    location: 'Remoto',
    intro:
      'Consultora de software especializada en Salesforce, con clientes como Sony PlayStation, Zola, Looker y Okta.',
    bullets: [
      'Implementé la arquitectura de chatbots conversacionales NLP (Rasa) integrados con WhatsApp mediante la API de Meta',
      'Construí aplicaciones web con Python (Flask, SQLAlchemy) y React, y con Next.js, TypeScript, Tailwind CSS, Prisma y PostgreSQL',
      'Desplegué en Heroku y AWS S3 con Docker',
      'Desarrollé demos de soluciones Salesforce con Aura y Lightning Web Components para presentaciones a clientes',
      'Obtuve la certificación Salesforce Developer I',
    ],
  },
];

export const experience: Job[] = experienceEn.map((job, i) => ({ ...job, ...jobText[i] }));

const skillTitles = ['Lenguajes', 'Front-end', 'Back-end', 'Bases de datos', 'Cloud (AWS)', 'DevOps y herramientas', 'Móvil', 'Salesforce'];
export const skillGroups: SkillGroup[] = skillGroupsEn.map((g, i) => ({ ...g, title: skillTitles[i] }));

const projectText: Pick<Project, 'kind' | 'year' | 'description' | 'bullets'>[] = [
  {
    kind: 'Visión por computadora · IA',
    year: '2021',
    description: 'Videovigilancia doméstica que detecta fuego, humo y personas en vivo.',
    bullets: [
      'Procesamiento de video distribuido cliente-servidor',
      'Red neuronal para detección de personas',
      'Alertas por SMTP y WhatsApp',
    ],
  },
  {
    kind: 'Android · Móvil',
    year: '2018',
    description: 'App nativa de Android para streaming multimedia desde la nube.',
    bullets: [
      'Arquitectura Model-View-Presenter',
      'API de Dropbox con OAuth',
      'Streaming adaptativo con ExoPlayer',
    ],
  },
  {
    kind: 'NLP · IA conversacional',
    year: '2022 — 2024',
    description: 'Chatbots de WhatsApp en producción creados en Oktana.',
    bullets: [
      'Flujos conversacionales en Rasa',
      'API de Meta para mensajería',
      'Servicios Python con Flask y FastAPI',
    ],
  },
  {
    kind: 'Web · Portafolio',
    year: '2026',
    description: 'Este sitio — un portafolio de una sola página con el App Router.',
    bullets: [
      'Next.js 16 con React Server Components',
      'Temas claro y oscuro con tokens de Tailwind v4',
      'Revelado al hacer scroll con IntersectionObserver',
    ],
  },
];
export const projects: Project[] = projectsEn.map((p, i) => ({ ...p, ...projectText[i] }));

const degreeText: Pick<Degree, 'title' | 'detail' | 'period' | 'school'>[] = [
  { title: 'Maestría en Ciencia de Datos y Tecnologías Inteligentes', detail: 'En curso', period: 'En curso', school: 'Universidad Técnica de Oruro' },
  { title: 'Diplomado en Educación Superior Basada en Competencias', detail: 'Diplomado de posgrado', period: 'Sep 2021', school: 'Universidad Mayor de San Simón' },
  { title: 'Ingeniería Informática', detail: 'Licenciatura', period: '2018 — 2021', school: 'Universidad Mayor de San Simón' },
  { title: 'Ingeniería de Sistemas', detail: 'Licenciatura', period: '2011 — 2017', school: 'Universidad Mayor de San Simón' },
];
export const education: Degree[] = educationEn.map((d, i) => ({ ...d, ...degreeText[i] }));

const certTitles: Record<string, string> = {
  'Frontend Developer (React)': 'Frontend Developer (React)',
  'Power BI Basic and Intermediate': 'Power BI Básico e Intermedio',
  'Crash Course on Python': 'Curso intensivo de Python',
  'Python (Basic)': 'Python (Básico)',
  'Java (Basic)': 'Java (Básico)',
  'Problem Solving (Basic)': 'Resolución de problemas (Básico)',
  'React (Basic)': 'React (Básico)',
};
export const certifications: Certification[] = certsEn.map((c) => ({
  ...c,
  title: certTitles[c.title] ?? c.title,
  issuer: c.issuer === 'UMSS' ? 'UMSS' : c.issuer,
}));

export const teaching = {
  summary:
    'Docente y auxiliar de docencia en la Universidad Mayor de San Simón desde 2014 — Computación 1, Sistemas de Información 2 e instrucción de VBA/Excel. Mentor en el Hackathon Tech4Future 2026 y en el Hackathon de Google "Build with AI" 2025.',
};

const nodeText: Record<SystemNode['id'], Pick<SystemNode, 'hint' | 'where'> & { label: string }> = {
  web: {
    label: 'Web',
    hint: 'Next.js · React',
    where: [
      'Freelance: aplicaciones web full-stack para instituciones locales',
      'SHEMA YISRAEL: plataformas educativas web para estudios de medicina',
      'Oktana: aplicaciones web con React, Next.js y Flask',
    ],
  },
  mobile: {
    label: 'Móvil',
    hint: 'React Native · Android',
    where: [
      'SHEMA YISRAEL: apps React Native publicadas en producción',
      'Media Box Player: app nativa de Android para streaming (proyecto de grado)',
    ],
  },
  api: {
    label: 'API',
    hint: 'Nest.js · FastAPI',
    where: [
      'SHEMA YISRAEL: back end Nest.js para web y móvil',
      'Freelance: servicios FastAPI en Docker',
      'Oktana: servicios Python con Flask, SQLAlchemy y Rasa',
    ],
  },
  data: {
    label: 'Datos',
    hint: 'Python · SQL',
    where: [
      'Alicorp: ETL desde SQL Server y clustering de clientes para políticas de descuento',
      'Maestría en Ciencia de Datos y Tecnologías Inteligentes (en curso)',
    ],
  },
  cloud: {
    label: 'Cloud',
    hint: 'AWS · Docker',
    where: [
      'SHEMA YISRAEL: despliegues en producción en AWS (Amplify, S3, RDS)',
      'Oktana: despliegues en Heroku y AWS S3',
      'Freelance: despliegues contenerizados con Docker',
    ],
  },
};
export const systemMap: SystemNode[] = systemMapEn.map((n) => ({ ...n, ...nodeText[n.id] }));
