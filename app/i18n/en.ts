/** UI strings (English). Page content lives in app/data/cv.ts. */
export const en = {
  meta: {
    title: 'Sergio Rodrigo Cárdenas Rivera — Full-Stack Software Engineer',
    description:
      'Full-stack software engineer (web, mobile and data) with 4+ years of experience. Next.js, React, Nest.js, React Native, Python and AWS. Based in Cochabamba, Bolivia; open to remote roles.',
    ogDescription:
      'Web, mobile and data. 4+ years building and shipping products with Next.js, React, Nest.js, React Native, Python and AWS.',
    ogLocale: 'en_US',
  },
  cv: {
    file: '/files/sergio_cardenas_cv_en.pdf',
    downloadName: 'sergio_cardenas_cv_en.pdf',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    main: 'Main',
    mobile: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    langCode: 'ES',
    langName: 'Español',
    langLabel: 'Ver en español',
  },
  theme: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
  hero: {
    portraitAlt: 'Portrait of Sergio Rodrigo Cárdenas Rivera',
    downloadCv: 'Download CV',
    getInTouch: 'Get in touch',
    github: 'GitHub profile',
    linkedin: 'LinkedIn profile',
    email: 'Email',
  },
  diagram: { caption: '// what I build — select a layer' },
  about: {
    slug: 'about',
    title: 'About Me',
    lede: 'Software engineer from Cochabamba, Bolivia — building web, mobile and data products since 2014.',
    highlights: '// highlights',
    focus: [
      { title: 'Full-Stack Development', description: 'React, Next.js, NestJS, Flask and FastAPI — from UI to API' },
      { title: 'Data & Machine Learning', description: 'Data engineering, scikit-learn and applied ML on real business data' },
      { title: 'Cloud & DevOps', description: 'AWS (S3, Amplify, RDS, Lambda), Docker and Git workflows' },
      { title: 'Leadership & Teaching', description: 'Tech lead, university professor and hackathon mentor' },
    ],
  },
  experience: {
    slug: 'experience',
    title: 'Working Experience',
    lede: 'From Salesforce agency work to data engineering to leading an international product team.',
  },
  skills: {
    slug: 'skills',
    title: 'Skills & Technologies',
    lede: 'A toolkit for building modern, scalable applications across the entire stack.',
  },
  projects: {
    slug: 'projects',
    title: 'Projects',
    lede: 'Selected personal and professional work — from native Android to computer vision to this site.',
    view: 'view',
  },
  education: {
    slug: 'education',
    title: 'Education & Certifications',
    lede: 'Two engineering degrees, an ongoing master in data science, and a habit of collecting certificates.',
    degrees: '// degrees',
    certifications: '// certifications',
  },
  contact: {
    slug: 'contact',
    title: 'Get In Touch',
    lede: 'Open to interesting projects, teams and collaborations. The fastest way to reach me is email. Available for freelance work and remote roles.',
    email: 'Email',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },
  footer: { builtWith: 'built with Next.js & Tailwind', source: 'source', top: 'back to top ↑' },
  carousel: { prev: 'Previous slide', next: 'Next slide', goTo: 'Go to slide' },
};

export type Ui = typeof en;
