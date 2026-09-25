import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-topline">
        <span>SOFTWARE ENGINEERING</span>
        <span>ADDIS ABABA · ETHIOPIA</span>
      </div>

      <div className="hero-content">
        <p className="hero-intro">I build things</p>

        <h1 className="hero-title">
          between logic
          <br />
          and imagination.
        </h1>

        <div className="hero-bottom">
          <p className="hero-description">
            Software Engineering student exploring the space
            between thoughtful interfaces and reliable systems.
          </p>

          <a href="#work" className="hero-link">
            Explore work <span>↘</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero