import React from 'react'
import '../../Global.css'
import './Pill.css'

function Pill({ content = 'Pill', color = 'default' }) {
  return (
    <div className={ color === 'default' ? "pill" : "pill invert" }>
      {content}
    </div>
  )
}

export default Pill