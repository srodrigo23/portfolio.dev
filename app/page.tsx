import Image from "next/image";
import MyNavbar from "./components/MyNavBar";
import FirstContent from "./components/FirstContent";
import About from "./components/About";
import Skills from "./components/skills";
import { ReportView } from "./components/ReportView";


export default function Home() {
  return (

    <>
      <ReportView/>
      <MyNavbar/>
      <FirstContent/>
      <About/>
      <Skills/>
    </>

  );
}
