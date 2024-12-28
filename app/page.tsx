import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

