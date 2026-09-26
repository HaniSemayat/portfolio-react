import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Education from './sections/Education/Education'

function App() {
  return (
    <main className="app">
      <Navbar />

      <div className="page-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </div>
    </main>
  )
}

export default App