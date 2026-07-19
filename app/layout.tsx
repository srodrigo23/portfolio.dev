import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const ibmPexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://srodrigo23.dev"),
  title: "Sergio Rodrigo Cárdenas Rivera — Software Engineer",
  description:
    "Full-stack software engineer and tech lead from Cochabamba, Bolivia. React, Next.js, NestJS, Python, AWS and data engineering.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sergio Rodrigo Cárdenas Rivera — Software Engineer",
    description:
      "Full-stack software engineer and tech lead. React, Next.js, NestJS, Python, AWS and data engineering.",
    url: "/",
    siteName: "srodrigo23.dev",
    type: "website",
    images: ["/img/photo_react_developer.webp"],
  },
  twitter: {
    card: "summary",
    title: "Sergio Rodrigo Cárdenas Rivera — Software Engineer",
    description:
      "Full-stack software engineer and tech lead. React, Next.js, NestJS, Python, AWS and data engineering.",
    images: ["/img/photo_react_developer.webp"],
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
        className={`${ibmPexMono.className} ${geistSans.variable} ${geistMono.variable}`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
