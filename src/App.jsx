import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <main className="app">
      <Navbar />

      <div className="page-container">
        <Hero />
        <About />
        <Skills />
      </div>
    </main>
  )
}

export default App