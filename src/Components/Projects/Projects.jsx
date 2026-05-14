import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'
function Projects(
    {
        projects = []
    }) {
    return (
        <div className="projects">
            <h1 className='heading'>{"< Projects />"}</h1>
            <div className="projects-description">
                {projects.map((project, index) => (
                    <ProjectContainer key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects
