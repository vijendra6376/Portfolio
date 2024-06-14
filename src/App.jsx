import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Certificates from "./components/Certificates"
import Contact from "./Contact"

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Certificates />
      <Contact />
    </div>
  )
}