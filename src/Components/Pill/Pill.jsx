import React from 'react'
import '../../Global.css'
import './Pill.css'

function Pill({ content = 'Pill'}) {
  return (
    <div className='pill'>
      {content}
    </div>
  )
}

export default Pill