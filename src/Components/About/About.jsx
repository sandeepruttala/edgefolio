import React from "react";
import "../../Global.css";
import "./About.css";
import Education from "./Education";
import Interests from "./Interests";
import Hobbies from "./Hobbies";

function About({ educationEvents = [], interests = [], hobbies = [] }) {
  return (
    <div className="about">
      <h1 className='heading'>{"<About />"}</h1>
      <div className="about-description">
        <Education educationEvents={educationEvents} />
        <Interests interests={interests} />
        <Hobbies hobbies={hobbies} />
      </div>
    </div>
  );
}

export default About;
