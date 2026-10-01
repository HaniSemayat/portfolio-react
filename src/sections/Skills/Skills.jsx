import './Skills.css'
import skills from '../../data/skills'
import SkillIcon from '../../components/SkillIcon/SkillIcon'

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
                <div className="skill-item" key={skill.name}>
                  <SkillIcon name={skill.icon} />

                  <span className="skill-name">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
