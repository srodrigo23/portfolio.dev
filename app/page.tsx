
import MyNavbar from "./components/navigationBar";
import FirstContent from "./components/mainContent";
import About from "./components/about";
import Skills from "./components/skills";
// import { ReportView } from "./components/reportView";


export default function Home() {
  return (

    <>
      {/* <ReportView/> */}
      <MyNavbar/>
      <FirstContent/>
      <About/>
      <Skills/>
    </>

  );
}
