import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'

function App() {
  return (
    <main className="app">
      <Navbar />

      <div className="page-container">
        <Hero />
        <About />
      </div>
    </main>
  )
}

export default App