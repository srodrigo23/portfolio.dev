import { getContent } from '../i18n/content';
import type { Locale } from '../i18n/config';
import MyNavbar from './navigationBar';
import { MainContent } from './mainContent';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';
import Education from './education';
import Contact from './contact';
import Footer from './footer';

export default function Home({ lang }: { lang: Locale }) {
  const t = getContent(lang);

  return (
    <>
      <MyNavbar t={t} />
      <main className='container mx-auto max-w-6xl px-5 md:px-10'>
        <MainContent t={t} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
