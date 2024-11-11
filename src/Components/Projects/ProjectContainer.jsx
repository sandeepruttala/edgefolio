import React from 'react'
import '../../Global.css'
import './ProjectContainer.css'
import Pill from '../Pill/Pill'
function ProjectContainer( { project } ) {
  return (
    <div className="project-container">
      <div className="project-image">
        <img src="https://placehold.co/350x230" alt={project.title} />
      </div>
      <div className='content'>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((technology) => (
          <Pill content={technology} />
        ))}
      </div>
      <a className="p-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
    </div>
    </div>
  )
}

export default ProjectContainer
