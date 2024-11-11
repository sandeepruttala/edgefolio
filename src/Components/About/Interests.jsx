import React from 'react'
import "../../Global.css";
import "./Interests.css";
import Pill from "../Pill/Pill";

function Interests({interests}) {
  return (
    <div className="interests">
      <h2>{"<Interests />"}</h2>
        <div className="interests-description">
            {interests.map(interest => <Pill content={interest} />)}
        </div>
    </div>
  )
}

export default Interests
