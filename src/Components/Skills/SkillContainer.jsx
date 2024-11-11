import React from 'react'
import '../../Global.css'
import './SkillContainer.css'
import Pill from '../Pill/Pill'

function SkillContainer({ title, skills }) {
  return (
    <div className="skill-container">
        <h2>{title}</h2>
        <div className="skills-list">
            {skills.map((skill, index) => (
                <div key={index} className="skill">
                    <Pill content={skill} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default SkillContainer
