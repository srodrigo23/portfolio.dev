import type { CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import { FaDatabase, FaFileCode, FaJava } from 'react-icons/fa6';
import {
  SiAmazonrds,
  SiAmazons3,
  SiAndroid,
  SiAwsamplify,
  SiAwslambda,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSalesforce,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';

/*
 * Brand logos for the skill pills.
 *
 * These hexes are the *brands'* colors, not theme tokens — they're the one
 * place a literal color is correct, since a logo tint isn't ours to theme.
 * `dark` is only set where the official color would disappear or wash out
 * against the dark background (black marks) or the light one (pale marks);
 * the pair is resolved in CSS (`.tech-icon` in globals.css) so this stays a
 * server component. Keys must match the strings in data/cv.ts exactly.
 */
type Tech = { icon: IconType; color: string; dark?: string };

const TECH: Record<string, Tech> = {
  // Languages
  Python: { icon: SiPython, color: '#3776AB', dark: '#4B8BBE' },
  Java: { icon: FaJava, color: '#E76F00', dark: '#F89820' },
  JavaScript: { icon: SiJavascript, color: '#BFA100', dark: '#F7DF1E' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  VBA: { icon: FaFileCode, color: '#7A6E5D', dark: '#A79A86' },

  // Front-end
  HTML: { icon: SiHtml5, color: '#E34F26' },
  CSS: { icon: SiCss3, color: '#1572B6', dark: '#3C9AE0' },
  'React.js': { icon: SiReact, color: '#0B93B4', dark: '#61DAFB' },
  'Vue.js': { icon: SiVuedotjs, color: '#2F8A5E', dark: '#4FC08D' },
  'Next.js': { icon: SiNextdotjs, color: '#111111', dark: '#FFFFFF' },
  'Node.js': { icon: SiNodedotjs, color: '#4A8A3C', dark: '#7DC96B' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#0891B2', dark: '#38BDF8' },

  // Back-end
  Flask: { icon: SiFlask, color: '#111111', dark: '#FFFFFF' },
  FastAPI: { icon: SiFastapi, color: '#009688', dark: '#2BC4B4' },
  'Express.js': { icon: SiExpress, color: '#111111', dark: '#FFFFFF' },
  NestJS: { icon: SiNestjs, color: '#E0234E' },

  // Databases
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1', dark: '#6B8CFF' },
  MySQL: { icon: SiMysql, color: '#00758F', dark: '#4479A1' },
  MongoDB: { icon: SiMongodb, color: '#3F8C3F', dark: '#47A248' },
  'SQL Server': { icon: FaDatabase, color: '#CC2927', dark: '#E5514F' },
  'Firebase Storage': { icon: SiFirebase, color: '#C98A00', dark: '#FFCA28' },

  // Cloud (AWS)
  Amplify: { icon: SiAwsamplify, color: '#D97706', dark: '#FF9900' },
  Lambda: { icon: SiAwslambda, color: '#D97706', dark: '#FF9900' },
  RDS: { icon: SiAmazonrds, color: '#3B62D9', dark: '#527FFF' },
  S3: { icon: SiAmazons3, color: '#4A8329', dark: '#69B83D' },

  // DevOps & Tools
  Docker: { icon: SiDocker, color: '#2496ED' },
  Git: { icon: SiGit, color: '#F05032' },

  // Mobile
  'Android (Java / Kotlin)': { icon: SiAndroid, color: '#2E9E5B', dark: '#3DDC84' },
  'React Native': { icon: SiReact, color: '#0B93B4', dark: '#61DAFB' },

  // Salesforce — the whole platform stack shares the one mark
  LWC : { icon: SiSalesforce, color: '#0086BC', dark: '#00A1E0' },
  Aura: { icon: SiSalesforce, color: '#0086BC', dark: '#00A1E0' },
  Apex: { icon: SiSalesforce, color: '#0086BC', dark: '#00A1E0' },
  SOQL: { icon: SiSalesforce, color: '#0086BC', dark: '#00A1E0' },
  SOSL: { icon: SiSalesforce, color: '#0086BC', dark: '#00A1E0' },
};

const FALLBACK: Tech = { icon: FaFileCode, color: '#7A6E5D', dark: '#A79A86' };

export default function TechIcon({
  name,
  className = '',
}: {
  name: string;
  className?: string;
}) {
  const { icon: Icon, color, dark } = TECH[name] ?? FALLBACK;

  return (
    <Icon
      aria-hidden
      className={`tech-icon shrink-0 ${className}`}
      style={
        {
          '--tech-color': color,
          '--tech-color-dark': dark ?? color,
        } as CSSProperties
      }
    />
  );
}
