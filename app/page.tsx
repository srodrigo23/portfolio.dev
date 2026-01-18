import Image from "next/image";
import MyNavbar from "./components/MyNavBar";
import FirstContent from "./components/FirstContent";
import About from "./components/About";


export default function Home() {
  return (

    <>
      <MyNavbar/>
      <FirstContent/>
      <About/>
    
    </>
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <button className="cursor-pointer">This is a button</button>
    // </div>
  );
}
