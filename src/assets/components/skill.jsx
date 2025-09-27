import React from "react";
import "./skill.css";
import { FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from "react-icons/fa"; 
import { SiC } from "react-icons/si"; // For C language

const skills = [
  { name: "Python(basics)", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C (Basics)", icon: <SiC /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "CSS / Responsive Design", icon: <FaCss3Alt /> },
];

const Skills = () => {
  return (
    <section id="skills" className="page">
      <h1>My Skills</h1>

      <div className="skills-row">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
