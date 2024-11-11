import React from 'react'
import '../../Global.css'
import './Certificate.css'

function Certificate({certificate}) {
  return (
    <div className="certificate">
        <div className="certificate-name">
        <h2>{certificate.certificate}</h2>
        </div>
        <div className="certificate-from">
        <p>{certificate.from}</p>
        </div>
        <div className="certificate-link">
        <a href={certificate.link} target="_blank" rel="noreferrer">View Certificate</a>
        </div>
    </div>
  )
}

export default Certificate
