import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'
function Projects(
    {
        projects = [
        {
            title: "Project 1",
            description: "This is a description of Project 1.",
            technologies: ["JavaScript", "React", "Node.js", "Express"],
            link: "https://github.com"
        },
        {
            title: "Project 2",
            description: "This is a description of Project 2.",
            technologies: ["Python", "Django", "PostgreSQL", "Heroku"],
            link: "https://github.com"
        },
        {
            title: "Project 3",
            description: "This is a description of Project 3.",
            technologies: ["Ruby", "Rails", "SQLite", "Netlify", "Heroku"],
            link: "https://github.com"
        }
        ]
    }){
  return (
    <div className="projects">
      <h1>{"< Projects />"}</h1>
        <div className="projects-description">
            {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
            ))}
        </div>
    </div>
  )
}

export default Projects
