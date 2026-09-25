import { useEffect, useState } from 'react'
import './Hero.css'
import IdentityMark from '../../components/IdentityMark/IdentityMark'

const phrases = [
  ['between logic', 'and imagination.'],
  ['between code', 'and people.'],
  ['between systems', 'and ideas.'],
]

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((currentIndex) => {
        return (currentIndex + 1) % phrases.length
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentPhrase = phrases[phraseIndex]

  return (
    <section className="hero" id="home">
      <div className="hero-topline">
        <span>SOFTWARE ENGINEERING</span>
        <span>ADDIS ABABA · ETHIOPIA</span>
      </div>

      <div className="hero-content">
        <div className="hero-identity">
          <IdentityMark />
        </div>

        <p className="hero-intro">I build things</p>

        <h1 className="hero-title" key={phraseIndex}>
          {currentPhrase[0]}
          <br />
          {currentPhrase[1]}
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