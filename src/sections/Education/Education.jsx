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
          <article className="education-item" key={item.institution}>
            <div className="education-period">
              {item.period}
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
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education