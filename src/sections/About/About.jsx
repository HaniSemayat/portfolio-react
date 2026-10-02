import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <span>01</span>
        <span>ABOUT</span>
      </div>

      <div className="about-content">
        <div className="about-avatar">
          <div className="about-avatar-frame">
            <div className="about-avatar-glow" />

            <img
              src="/images/about/avatar2.png"
              alt="Illustrated developer avatar"
            />

            <span className="about-avatar-dot about-avatar-dot-one" />
            <span className="about-avatar-dot about-avatar-dot-two" />
          </div>

          <span className="about-avatar-label">
            BUILDING / LEARNING
          </span>
        </div>

        <div className="about-copy">
          <h2>
            Learning to turn
            <br />
            ideas into systems.
          </h2>

          <div className="about-text">
            <p>
              I am a Software Engineering student building my way
              through the web — from fundamentals and algorithms
              to modern frontend and backend development.
            </p>

            <p>
              My current work moves between React, Next.js,
              JavaScript, and Python, with a growing interest in
              backend systems and the engineering behind useful
              products.
            </p>
          </div>
        </div>
      </div>

      <div className="about-meta">
        <span>Addis Ababa University</span>
        <span>Software Engineering · 4th Year</span>
      </div>
    </section>
  )
}

export default About
