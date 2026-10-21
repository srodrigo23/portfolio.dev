import type { Ui } from './en';

/** UI strings (Spanish). Page content lives in app/data/cv.es.ts. */
export const es: Ui = {
  meta: {
    title: 'Sergio Rodrigo Cárdenas Rivera — Ingeniero de Software Full-Stack',
    description:
      'Ingeniero de software full-stack (web, móvil y datos) con más de 4 años de experiencia. Next.js, React, Nest.js, React Native, Python y AWS. Desde Cochabamba, Bolivia; abierto a roles remotos.',
    ogDescription:
      'Web, móvil y datos. Más de 4 años creando y lanzando productos con Next.js, React, Nest.js, React Native, Python y AWS.',
    ogLocale: 'es_ES',
  },
  cv: {
    file: '/files/sergio_cardenas_cv_es.pdf',
    downloadName: 'sergio_cardenas_cv_es.pdf',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
    main: 'Principal',
    mobile: 'Móvil',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    langCode: 'EN',
    langName: 'English',
    langLabel: 'View in English',
  },
  theme: { toLight: 'Cambiar a modo claro', toDark: 'Cambiar a modo oscuro' },
  hero: {
    portraitAlt: 'Retrato de Sergio Rodrigo Cárdenas Rivera',
    downloadCv: 'Descargar CV',
    getInTouch: 'Contáctame',
    github: 'Perfil de GitHub',
    linkedin: 'Perfil de LinkedIn',
    email: 'Correo',
  },
  diagram: { caption: '// lo que construyo — elige una capa' },
  about: {
    slug: 'sobre-mi',
    title: 'Sobre mí',
    lede: 'Ingeniero de software de Cochabamba, Bolivia — creando productos web, móviles y de datos desde 2014.',
    highlights: '// destacados',
    focus: [
      { title: 'Desarrollo Full-Stack', description: 'React, Next.js, NestJS, Flask y FastAPI — de la interfaz a la API' },
      { title: 'Datos y Machine Learning', description: 'Ingeniería de datos, scikit-learn y ML aplicado a datos reales de negocio' },
      { title: 'Cloud y DevOps', description: 'AWS (S3, Amplify, RDS, Lambda), Docker y flujos de trabajo con Git' },
      { title: 'Liderazgo y Docencia', description: 'Tech lead, docente universitario y mentor de hackathones' },
    ],
  },
  experience: {
    slug: 'experiencia',
    title: 'Experiencia laboral',
    lede: 'De consultoría Salesforce a ingeniería de datos y a liderar un equipo de producto.',
  },
  skills: {
    slug: 'habilidades',
    title: 'Habilidades y tecnologías',
    lede: 'Un conjunto de herramientas para construir aplicaciones modernas y escalables en todo el stack.',
  },
  projects: {
    slug: 'proyectos',
    title: 'Proyectos',
    lede: 'Trabajo personal y profesional seleccionado — de Android nativo a visión por computadora y este sitio.',
    view: 'ver',
  },
  education: {
    slug: 'educacion',
    title: 'Educación y certificaciones',
    lede: 'Dos ingenierías, una maestría en curso en ciencia de datos y el hábito de coleccionar certificados.',
    degrees: '// títulos',
    certifications: '// certificaciones',
  },
  contact: {
    slug: 'contacto',
    title: 'Contacto',
    lede: 'Abierto a proyectos, equipos y colaboraciones interesantes. La forma más rápida de contactarme es el correo. Disponible para trabajo freelance y roles remotos.',
    email: 'Correo',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: { builtWith: 'hecho con Next.js y Tailwind', source: 'código', top: 'volver arriba ↑' },
  carousel: { prev: 'Diapositiva anterior', next: 'Diapositiva siguiente', goTo: 'Ir a la diapositiva' },
};
