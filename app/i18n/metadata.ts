import type { Metadata } from 'next';
import { localePath, type Locale } from './config';
import { en } from './en';
import { es } from './es';

const ui = { en, es };

export function buildMetadata(lang: Locale): Metadata {
  const m = ui[lang].meta;
  return {
    metadataBase: new URL('https://rodres.xyz'),
    title: m.title,
    description: m.description,
    alternates: {
      canonical: localePath(lang),
      languages: { en: '/', es: '/es', 'x-default': '/' },
    },
    manifest: '/site.webmanifest',
    icons: {
      icon: [
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    },
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: localePath(lang),
      siteName: 'Sergio Rodrigo Cárdenas Rivera',
      type: 'website',
      locale: m.ogLocale,
      images: ['/img/photo_portrait.webp'],
    },
    twitter: {
      card: 'summary',
      title: m.title,
      description: m.ogDescription,
      images: ['/img/photo_portrait.webp'],
    },
  };
}
