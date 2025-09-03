import React from "react";
import "./nav.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MY PORTFOLIO</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
