import * as cvEn from '../data/cv';
import * as cvEs from '../data/cv.es';
import type { Locale } from './config';
import { en } from './en';
import { es } from './es';

const content = {
  en: {
    ui: en,
    profile: cvEn.profile,
    experience: cvEn.experience,
    skillGroups: cvEn.skillGroups,
    projects: cvEn.projects,
    education: cvEn.education,
    certifications: cvEn.certifications,
    systemMap: cvEn.systemMap,
  },
  es: {
    ui: es,
    profile: cvEs.profile,
    experience: cvEs.experience,
    skillGroups: cvEs.skillGroups,
    projects: cvEs.projects,
    education: cvEs.education,
    certifications: cvEs.certifications,
    systemMap: cvEs.systemMap,
  },
};

export type Content = (typeof content)['en'] & { lang: Locale };

export function getContent(lang: Locale): Content {
  return { ...content[lang], lang };
}
