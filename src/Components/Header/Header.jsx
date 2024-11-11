import React, { useState } from 'react'
import '../../Global.css'
import './Header.css'
import Pill from '../Pill/Pill'
import { Link } from 'react-scroll'

function Header({ name = "John Doe" }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
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
        <Link onClick={handleLinkClick} to="about" spy={true} smooth={true} duration={500}><Pill content="About" /></Link>
        <Link onClick={handleLinkClick} to="skills" spy={true} smooth={true} duration={500}><Pill content="Skills" /></Link>
        <Link onClick={handleLinkClick} to="projects" spy={true} smooth={true} duration={500}><Pill content="Projects" /></Link>
        <Link onClick={handleLinkClick} to="certifications" spy={true} smooth={true} duration={500}><Pill content="Certifications" /></Link>
        <Link onClick={handleLinkClick} to="contact" spy={true} smooth={true} duration={500}><Pill content="Contact" /></Link>
      </div>
    </div>
  )
}

export default Header
