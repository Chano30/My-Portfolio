import { FaArrowDown } from "react-icons/fa6"
import Home from "./component/pages/Home/Home"
import About from "./component/pages/About/About"
import { BouncingArrow } from "./ui/BouncingArrow"
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation"
import { FloatingNav } from "./ui/FloatingNav"
import { NAV_DATA } from "./data"
import Experience from "./component/pages/Experience/Experience"
import Project from "./component/pages/Projects/Project"
import Contact from "./component/pages/Contact/Contact"
import Footer from "./component/pages/Footer"


function App() {

  return (
    <>
    <FloatingNav navItems={NAV_DATA} />
    <Home />
    <About />
    <Experience />
    <Project />
    <Contact />
    <Footer />
    </>
  )
}

export default App
