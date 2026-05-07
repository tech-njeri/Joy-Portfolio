import './App.css'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollAnimation from './hooks/useScrollAnimations'

function App() {
  useScrollAnimation();
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <About />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}

export default App
