import './Skills.css'
import skills from '../../data/skills'

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <span>02</span>
        <span>SKILLS</span>
      </div>

      <div className="skills-intro">
        <h2>
          Tools for turning
          <br />
          ideas into software.
        </h2>
      </div>

      <div className="skills-list">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>

            <div className="skill-items">
              {group.items.map((skill) => (
                <span className="skill-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills