import './Projects.css'
import projects from '../../data/projects'

function Projects() {
  return (
    <section className="projects" id="work">
      <div className="projects-heading">
        <span>03</span>
        <span>SELECTED WORK</span>
      </div>

      <div className="projects-intro">
        <h2>
          Things I build
          <br />
          while learning.
        </h2>

        <p>
          A selection of projects exploring interfaces, APIs,
          automation, and the engineering behind useful software.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article
            className={`project ${project.featured ? 'project-featured' : ''}`}
            key={project.number}
          >
            <div className="project-number">
              {project.number}
            </div>

            <div className="project-main">
              <div className="project-top">
                <div>
                  <span className="project-type">{project.type}</span>

                  <h3>{project.title}</h3>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub ↗
                </a>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects