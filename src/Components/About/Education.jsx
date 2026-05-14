import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education({ educationEvents = [] }) {
  return (
    <div className="education">
      <h2>{"<Education />"}</h2>
      <Timeline events={educationEvents} />
    </div>
  )
}

export default Education
