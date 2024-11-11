import React from 'react'
import "../../Global.css";
import "./Interests.css";
import Pill from "../Pill/Pill";

function Hobbies({hobbies}) {
  return (
    <div className="interests">
      <h2>{"<Hobbies />"}</h2>
        <div className="interests-description">
            {hobbies.map(hobbie => <Pill content={hobbie} />)}

        </div>
    </div>
  )
}

export default Hobbies
