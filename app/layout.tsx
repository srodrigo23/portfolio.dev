import type { Metadata, Viewport } from "next";
import { bodyFont, displayFont, monoFont } from "./font";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://rodres.xyz'),
  title: 'Sergio Rodrigo Cárdenas Rivera — Full-Stack Software Engineer',
  description:
    'Full-stack software engineer (web, mobile and data) with 4+ years of experience. Next.js, React, Nest.js, React Native, Python and AWS. Based in Cochabamba, Bolivia; open to remote roles.',
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  openGraph: {
    title: 'Sergio Rodrigo Cárdenas Rivera — Full-Stack Software Engineer',
    description:
      'Web, mobile and data. 4+ years building and shipping products with Next.js, React, Nest.js, React Native, Python and AWS.',
    url: '/',
    siteName: 'Sergio Rodrigo Cárdenas Rivera',
    type: 'website',
    images: ['/img/photo_portrait.webp'],
  },
  twitter: {
    card: 'summary',
    title: 'Sergio Rodrigo Cárdenas Rivera — Full-Stack Software Engineer',
    description:
      'Web, mobile and data. 4+ years building and shipping products with Next.js, React, Nest.js, React Native, Python and AWS.',
    images: ['/img/photo_portrait.webp'],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before paint: applies the saved theme (or the system preference)
 * so there is no flash of the wrong theme on load.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-sans`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
