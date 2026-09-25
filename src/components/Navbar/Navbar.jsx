import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          Hani T.
        </a>

        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar