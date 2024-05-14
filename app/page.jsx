import Image from "next/image";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import About from "./components/About";

export default function Home() {
  return (
   <>
   <Header></Header>
    <Welcome></Welcome>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <About></About>
   </>
  );
}
