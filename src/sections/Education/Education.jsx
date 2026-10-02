import './Education.css'
import education from '../../data/education'

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-heading">
        <span>04</span>
        <span>EDUCATION</span>
      </div>

      <div className="education-intro">
        <h2>
          Building the
          <br />
          foundation.
        </h2>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <article className="education-card" key={item.institution}>
            <div className="education-card-top">
              <span className="education-period">
                {item.period}
              </span>

              <div className="education-logo">
                <img
                  src={item.logo}
                  alt={item.institution}
                />
              </div>
            </div>

            <div className="education-main">
              <h3>{item.institution}</h3>

              <p className="education-program">
                {item.program}
              </p>

              <p className="education-detail">
                {item.detail}
              </p>
            </div>

            <span className="education-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education