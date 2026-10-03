import { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

function Navbar({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navbarRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return

    const handlePointerDown = (event) => {
      if (!navbarRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <a
          href="#"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="navbar-logo-mark">◇</span>

          <span className="navbar-logo-text">
            Hani T.
          </span>
        </a>

        <div className="navbar-actions">
          <nav className="navbar-links">
            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#work" onClick={closeMenu}>
              Works
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>

          <a
            href="/Hani-Tsehaye-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="navbar-cv"
          >
            My CV <span>↗</span>
          </a>

          <ThemeToggle
            isDark={isDark}
            setIsDark={setIsDark}
          />

          <button
            type="button"
            className={`navbar-menu-button ${
              menuOpen ? 'navbar-menu-button-open' : ''
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div
          className={`navbar-mobile-menu ${
            menuOpen ? 'navbar-mobile-menu-open' : ''
          }`}
        >
          <a href="#about" onClick={closeMenu}>
            <span>01</span>
            About
          </a>

          <a href="#work" onClick={closeMenu}>
            <span>02</span>
            Works
          </a>

          <a href="#contact" onClick={closeMenu}>
            <span>03</span>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar