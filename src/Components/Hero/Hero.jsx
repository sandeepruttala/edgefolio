import React, { useState } from "react";
import "../../Global.css";
import Avatar from "../../Assets/profile.png";
import "./Hero.css";
import Pill from "../Pill/Pill";
import Card from "../Card/Card";

function Hero({
  name = "John Doe",
  role = "Software Developer",
  description = "I am a software developer with a passion for creating web applications. I have experience working with JavaScript, React, and Node.js. I am currently seeking new opportunities to grow my skills and contribute to a team.",
  email = "johndoe@mail.com",
  mobile = "+ 123-456-7890",
  linkedin = "https://linkedin.com/in/johndoe",
  github = "https://github.com/johndoe",
  resume = "https://resume.com",
}) {
  const [cardVisibility, setCardVisibility] = useState(false);

  const handleMode = () => {
    const card = document.querySelector('.wide');
    const hero = document.querySelector('.narrow');
    card.classList.toggle('active');
    hero.classList.toggle('active');
    setCardVisibility(!cardVisibility);
  }

  return (
    <div className="hero">
      <div className="toggle">
          <div className={`wide ${!cardVisibility ? 'active' : ''}`} onClick={handleMode}>Classic</div>
          <div className={`narrow ${cardVisibility ? 'active' : ''}`} onClick={handleMode}>Card</div>
      </div>
      <Card name={name} role={role} description={description} email={email} mobile={mobile} linkedin={linkedin} github={github} resume={resume} 
      visible={cardVisibility}/>
      <div className="image">
        <div className="avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
        <a href={resume} target="_blank" rel="noreferrer">
        <Pill content="View Résumé" color="invert" />
        </a>
      </div>

      <div className="hero-content">
        <div className="role">
          <Pill content={role} />
        </div>
        <div className="description">
          <h1>Hi, I'm {name}</h1>
          <span>{description}</span>
        </div>
        <div className="links">
          <a target="_blank" rel="noreferrer" href={`mailto:${email}`}><Pill content={email} /></a>
          <a target="_blank" rel="noreferrer" href={`tel:${mobile}`}><Pill content={mobile} /></a>
          <a target="_blank" rel="noreferrer" href={linkedin}><Pill content="LinkedIn" /></a>
          <a target="_blank" rel="noreferrer" href={github}><Pill content="GitHub" /></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
