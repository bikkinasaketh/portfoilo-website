import React from "react";
import "./experience.css";

const experiences = [
  {
    company: "Gobal One Services",
    role: "Python Full Stack Development ",
    location: "Rajahmundry / Hyderabad",
    duration: "Feb 2024 – May 2024",
    details:
      "Completed 240 hours internship on Python Full Stack organized by Gobal One Services, Hyderabad in collaboration with Andhra Pradesh State Council of Higher Education.",
  },
  {
    company: "Technical Hub",
    role: "Full Stack Web Development ",
    location: "Surampalem",
    duration: "May 2025 – June 2025",
    details: "Successfully completed Full Stack Web Development Internship.",
  },
  {
    company: "Adhoc Network Tech Company",
    role: "Core Java Development",
    location: "Rajahmundry",
    duration: "Sep 2023 – Oct 2023",
    details: "Completed Core Java Development Internship.",
  },
  {
    company: "Apex Software Tech Company",
    role: "Front-End Development ",
    location: "Rajahmundry",
    duration: "May 2025 – July 2025",
    details: "Successfully completed Front-End Development Internship.",
  },
  {
    company: "SkillDzire",
    role: "Data Science ",
    location: "Rajahmundry",
    duration: "May 2025 – July 2025",
    details: "Successfully completed Data Science Internship.",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="role">{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="meta">
              📍 {exp.location} &nbsp; | &nbsp; 📅 {exp.duration}
            </p>
            <p className="details">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
