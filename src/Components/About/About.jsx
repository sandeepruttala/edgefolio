import React from "react";
import "../../Global.css";
import "./About.css";
import Education from "./Education";
import Interests from "./Interests";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="about">
      <h1>{"<About />"}</h1>
      <div className="about-description">
        <Education />
        <Interests interests={["Web Development", "Machine Learning", "Data Science", "Cybersecurity"
        , "Mobile Development", "Artificial Intelligence", "Blockchain", "Quantum Computing", "Internet of Things", "Cloud Computing"]} />
        <Hobbies hobbies={["Reading", "Writing", "Drawing", "Painting", "Playing Guitar", "Playing Piano", "Playing Video Games", "Watching Movies", "Watching TV Shows", "Listening to Music"]} />
      </div>
    </div>
  );
}

export default About;
