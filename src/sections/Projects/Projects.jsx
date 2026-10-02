import './Projects.css'
import projects from '../../data/projects'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

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
          <ProjectCard
            project={project}
            key={project.number}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
