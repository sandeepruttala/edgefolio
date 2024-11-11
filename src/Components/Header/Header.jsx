import React, { useState } from 'react'
import '../../Global.css'
import './Header.css'
import Pill from '../Pill/Pill'

function Header({ name = "John Doe" }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="header">
      <span className="logo">
        {`<${name} />`}
      </span>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <a href="#about"><Pill content="About" /></a>
        <a href="#skills"><Pill content="Skills" /></a>
        <a href="#projects"><Pill content="Projects" /></a>
        <a href="#contact"><Pill content="Contact" /></a>
      </div>
    </div>
  )
}

export default Header
