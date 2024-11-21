import React from "react";
import "./Card.css";
import Pill from "../Pill/Pill";
import Avatar from "../../Assets/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdCall } from "react-icons/md";
export default function Card({
    name = "John Doe",
    role = "Software Developer",
    description = "I am a software developer with a passion for creating web applications. I have experience working with JavaScript, React, and Node.js. I am currently seeking new opportunities to grow my skills and contribute to a team.",
    email = "johndoe@mail.com",
    mobile = "+ 123-456-7890",
    linkedin = "https://linkedin.com/in/johndoe",
    github = "https://github.com/johndoe",
    resume = "https://resume.com",
    visible = true,
  }) {
  return (
    <div className="card-background" style={{ display: visible ? "flex" : "none" }}>
      <div className="card">
        <div className="resume-button">
            <a href={resume} target="_blank" rel="noreferrer">
                <Pill content="résumé" />
            </a>
        </div>
        <div className="card-header">
          <div className="card-image">
            <div className="card-holder">
              <img src={Avatar} alt="Avatar" />
            </div>
          </div>
          <div className="card-content">
            <h1>{name}</h1>
            <Pill content={role} />
            <div className="card-links">
                <a target="_blank" rel="noreferrer" href={`mailto:${email}`}><FaEnvelope /></a>
                <a target="_blank" rel="noreferrer" href={`tel:${mobile}`}><MdCall /></a>
                <a target="_blank" rel="noreferrer" href={linkedin}><FaLinkedin /></a>
                <a target="_blank" rel="noreferrer" href={github}><FaGithub /></a>
                </div>
          </div>
        </div>
        <div className="card-description">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}
