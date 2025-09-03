// src/components/Skills.jsx
import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="page">
      <h1>My Skills</h1>
      
      {/* Row 1 */}
      <div className="skills-row">
        <div className="skill-card"> Python</div>
        <div className="skill-card"> Java</div>
        <div className="skill-card"> C (Basics)</div>
        <div className="skill-card"> JavaScript</div>
      </div>

      {/* Row 2 */}
      <div className="skills-row">
        <div className="skill-card">React</div>
        <div className="skill-card"> Node.js</div>
        <div className="skill-card"> MongoDB</div>
        <div className="skill-card"> CSS / Responsive Design</div>
      </div>
    </section>
  );
};

export default Skills;
