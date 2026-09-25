import './Navbar.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Hani T.
        </a>

        <div className="navbar-actions">
          <nav className="navbar-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar