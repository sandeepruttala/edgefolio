import React from 'react'
import '../../Global.css'
import './Certifications.css'
import Certificate from './Certificate'
function Certifications({certifications = [
    {
        certificate: "Full Stack Web Development",
        from: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/username/full-stack"
    },
    {
        certificate: "Front End Libraries",
        from: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/username/front-end-libraries"
    },
    {
        certificate: "JavaScript Algorithms and Data Structures",
        from: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/username/javascript-algorithms-and-data-structures"
    },
]}) {
  return (
    <div className="certifications">
        <h1>{"<Certifications />"}</h1>
        <div className="certificates">
            {certifications.map((certificate, index) => (
                <Certificate key={index} certificate={certificate} />
            ))}
        </div>
    </div>
  )
}

export default Certifications
