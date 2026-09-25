import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'

function App() {
  return (
    <main className="app">
      <Navbar />

      <div className="page-container">
        <Hero />
      </div>
    </main>
  )
}

export default App