import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"

import Certificates from "./components/Certificates"
import Contact from "./Contact"

import background from './assets/background.png' 

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react"

export default function App() {

  useEffect(() => {
    AOS.init({
      offest: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
    }}
  >
      <Navbar />
      <Home />
      <About />
      <Skills />
    
      <Certificates />
      <Contact />
    </div>
  )
}