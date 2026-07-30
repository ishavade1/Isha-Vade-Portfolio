import Nav from './components/Nav'
import Hero from './components/Hero'
import Logos from './components/Logos'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <main id="top">
        <Hero theme={theme} />
        <Logos />
        <About />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
