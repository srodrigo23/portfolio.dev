
import MyNavbar from "./components/navigationBar";
import { MainContent } from "./components/mainContent"

import About from "./components/about";
import Skills from "./components/skills";
// import { ReportView } from "./components/reportView";


export default function Home() {
  return (
    <>
      {/* <ReportView/> */}
      <MyNavbar />
      <div className='container mx-auto'>
        <MainContent />
        <About />
        <Skills />
      </div>
    </>
  );
}
