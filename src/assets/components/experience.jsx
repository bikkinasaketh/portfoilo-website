import React, { useState } from "react";
import "./experience.css";

// Import images
import globalOneImg from "../images/sakethpython.png";
import technicalHubImg from "../images/fullstackwebcertificate.jpg";
import adhocImg from "../images/sakethNptelcertificate.jpeg";
import apexImg from "../images/apexcertificate.jpeg";
import skillDzireImg from "../images/skilldzire.jpeg";



const experiences = [
  {
    company: "Glossary SoftTech Private Limited",
    role: "Python ",
    duration: "Feb 2024 – May 2024",
    certificate: globalOneImg,
  },
    {
    company: "Nptel",
    role: "The joy of computing python ",
    duration: "Jan 2025 – May 2025",
    certificate: adhocImg,
  },
      {
    company: "Skill Dzire",
    role: "Python Data Sciebce ",
    duration: "May 2024 – July 2024",
    certificate: skillDzireImg,
  },
  {
    company: "Technohacks",
    role: "Full Stack Web Development",
    duration: "May 2025 – July 2025",
    certificate: technicalHubImg,
  },
  {
    company: "Technical Hub",
    role: "Full Stack Web Development",
    duration: "May 2025 – July 2025",
    certificate: technicalHubImg,
  },
  {
    company: "Apex Software Tech Company",
    role: "Front-End Development",
    duration: "May 2025 – June 2025",
    certificate: apexImg,
  },
 
  // {
  //   company: "Technohacks",   // 👈 new entry
  //   role: "Full Stack Web Development",
  //   duration: "Mar 2025 – April 2025",
  //   certificate: mlInternImg,
  // },
];


const Experience = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              {/* Front Face */}
              <div className="flip-card-front">
                <h3>{exp.role}</h3>
                <p>{exp.company}</p>
                <p>{exp.duration}</p>
                <button className="certificate-btn">View Certificate</button>

              </div>

              {/* Back Face */}
              <div className="flip-card-back">
                <img src={exp.certificate} alt={exp.company} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
