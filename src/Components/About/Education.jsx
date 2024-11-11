import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education() {
  return (
    <div className="education">
      <h2>{"<Education />"}</h2>
        <Timeline events={[
            {
            date: "2019 - 2023",
            title: "B.S. in Computer Science",
            description: "University of California, San Diego"
            },
            {
            date: "2018 - 2019",
            title: "High School Diploma",
            description: "San Diego High School"
            },
            {
            date: "2018",
            title: "Scholar with Distinction",
            description: "San Diego High School"
            }
        ]} />
    </div>
  )
}

export default Education
