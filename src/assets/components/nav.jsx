import React, { useState } from "react";
import "./nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">MY PORTFOLIO</div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#certifications" onClick={() => setIsOpen(false)}>Certificate</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
