import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import AboutUs from "./Components/About";


export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <AboutUs />
    <Menu />
    <br />
    <Footer />

   </div>
  )
}