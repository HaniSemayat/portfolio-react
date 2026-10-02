import './Navbar.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Navbar({ isDark, setIsDark }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="navbar-logo-mark">◇</span>

          <span className="navbar-logo-text">
            Hani T.
          </span>
        </a>

        <div className="navbar-actions">
          <nav className="navbar-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <ThemeToggle
            isDark={isDark}
            setIsDark={setIsDark}
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar