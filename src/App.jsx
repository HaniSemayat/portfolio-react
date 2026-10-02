import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import Education from './sections/Education/Education'
import Contact from './sections/Contact/Contact'
import Footer from './components/Footer/Footer'
import SectionDivider from './components/SectionDivider/SectionDivider'

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  return (
    <main className="app">
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <div className="page-container">
        <Hero />

        <SectionDivider />    

        <About />

        <SectionDivider />

        <Skills />

        <SectionDivider />

        <Projects isDark={isDark} />

        <SectionDivider />

        <Education />

        <SectionDivider />
        
        <Contact />
      </div>

      <Footer />
    </main>
  )
}

export default App