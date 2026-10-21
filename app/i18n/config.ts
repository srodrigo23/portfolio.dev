export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** English lives at `/`, every other locale under its own prefix. */
export const localePath = (lang: Locale) => (lang === defaultLocale ? '/' : `/${lang}`);
