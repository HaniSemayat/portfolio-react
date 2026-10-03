import { useEffect, useState } from 'react'
import './ProjectCard.css'

function ProjectCard({ project, isDark  }) {
  const [visualIndex, setVisualIndex] = useState(0)


  const visuals =
    project.visuals[isDark ? 'dark' : 'light'] ||
    project.visuals.light

  useEffect(() => {
    if (visuals.length <= 1) return

    const interval = setInterval(() => {
      setVisualIndex((current) => (
        (current + 1) % visuals.length
      ))
    }, 3500)

    return () => clearInterval(interval)
  }, [visuals.length])

  const visual = visuals[visualIndex]

  return (
    <article
      className={`project ${project.featured ? 'project-featured' : ''}`}
    >
      <div className="project-number">
        {project.number}
      </div>

      <div className="project-main">
        <div className="project-top">
          <div>
            <span className="project-type">
              {project.type}
            </span>

            <h3>{project.title}</h3>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub ↗
            </a>
          )}
        </div>

        <div className="project-card">
          <div className="project-visual">
            <img
              src={visual.src}
              alt={visual.alt}
              loading={project.featured ? 'eager' : 'lazy'}
            />
          </div>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-bottom">
            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-view"
            >
              View Project
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
