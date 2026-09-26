import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <span>Hani.T</span>

        <a href="#home" className="footer-back-top">
          Back to top <span>↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <span>Software Engineering · Addis Ababa, Ethiopia</span>
        <span>© 2026 Hani T.</span>
      </div>
    </footer>
  )
}

export default Footer