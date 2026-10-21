import { bodyFont, displayFont, monoFont } from '../font';
import type { Locale } from '../i18n/config';
import '../globals.css';

/**
 * Runs before paint: applies the saved theme (or the system preference)
 * so there is no flash of the wrong theme on load.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})()`;

/**
 * The <html> shell, shared by both locale layouts. Each locale is its own
 * root layout so the static export gets a correct `lang` attribute.
 */
export default function RootShell({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-sans`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
