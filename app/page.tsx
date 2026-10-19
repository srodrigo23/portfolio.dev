import MyNavbar from "./components/navigationBar";
import { MainContent } from "./components/mainContent";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import { ReportView } from "./components/reportView";

export default function Home() {
  return (
    <>
      {/* <ReportView/> */}
      <MyNavbar />
      <main className='container mx-auto max-w-6xl px-5 md:px-10'>
        <MainContent />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
