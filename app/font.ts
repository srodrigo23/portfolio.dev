import { Space_Grotesk } from 'next/font/google';

/**
 * Display font for the brand, nav and section headings.
 * Swap it here and the whole site follows.
 * (The old local "sreda" files are still in public/fonts/ if you want them back.)
 */
export const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
});
