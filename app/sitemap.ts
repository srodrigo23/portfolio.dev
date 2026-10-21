import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: 'https://rodres.xyz/', es: 'https://rodres.xyz/es' };
  return [
    { url: languages.en, lastModified: new Date(), alternates: { languages } },
    { url: languages.es, lastModified: new Date(), alternates: { languages } },
  ];
}
