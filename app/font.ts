import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';

/**
 * Display: Archivo, a variable font with a width axis. Headings set
 * font-stretch: expanded (Tailwind `font-stretch-expanded`) to use it.
 * Swap the families here and the site follows (tokens live in globals.css).
 */
export const displayFont = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
});

export const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
});

export const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
});
