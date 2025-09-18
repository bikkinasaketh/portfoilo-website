import React, { useState } from "react";
import "./experience.css";

// Import images
import globalOneImg from "../assets/images/saketh python.png";
import technicalHubImg from "../assets/images/full stack web certificate.jpg";
import adhocImg from "../assets/images/sakethNptelcertificate.jpeg";
import apexImg from "../assets/images/apex certificate.jpeg";
import skillDzireImg from "../assets/images/skill dzire.jpeg";
import mlInternImg from "../assets/images/python data science .jpg"; // 👈 new image

const experiences = [
  {
    company: "Gobal One Services",
    role: "Python Full Stack Development",
    duration: "Feb 2024 – May 2024",
    certificate: globalOneImg,
  },
  {
    company: "Technical Hub",
    role: "Full Stack Web Development",
    duration: "May 2025 – June 2025",
    certificate: technicalHubImg,
  },
  {
    company: "Adhoc Network Tech Company",
    role: "Core Java Development",
    duration: "Sep 2023 – Oct 2023",
    certificate: adhocImg,
  },
  {
    company: "Apex Software Tech Company",
    role: "Front-End Development",
    duration: "May 2025 – July 2025",
    certificate: apexImg,
  },
  {
    company: "SkillDzire",
    role: "Data Science",
    duration: "May 2025 – July 2025",
    certificate: skillDzireImg,
  },
  {
    company: "Technohacks",   // 👈 new entry
    role: "Full Stack Web Development",
    duration: "aug 2025 – sep 2025",
    certificate: mlInternImg,
  },
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
                <p className="click-text">Click Me for Certificate</p>
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
