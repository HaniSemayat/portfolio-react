import './Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <span>05</span>
        <span>CONTACT</span>
      </div>

      <div className="contact-content">
        <div className="contact-main">
          <p className="contact-eyebrow">HAVE SOMETHING TO BUILD?</p>

          <h2>
            Let's make
            <br />
            something useful.
          </h2>
        </div>

        <div className="contact-links">
          <a
            href="mailto:hani.t.semayat@gmail.com"
            className="contact-link"
          >
            <span>Email</span>
            <span>↗</span>
          </a>

          <a
            href="https://github.com/HaniSemayat"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <span>GitHub</span>
            <span>↗</span>
          </a>

          <a
            href="#"
            className="contact-link"
          >
            <span>LinkedIn</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact