import React, { useState } from "react";
import "./education.css";

const educationData = [
  {
    id: "pg",
    title: "Post Graduate (PG)",
    course: "MCA — Master of Computer Applications",
    institution: "Aditya College of Engineering & technology /JNTUK",
    board: "University",
    location: "Surampalem, Andhra Pradesh ",
    year: "2024 – 2026",
    scoreLabel: "CGPA",
    score: "8.4",
    highlights: [
      "Specialization: Full-Stack Development",
      "Major Project: Complaint Management System (MERN)",
      "Key Courses: DAA, SEDP, DBMS",
    ],
  },
  {
    id: "ug",
    title: "Under Graduate (Degree)",
    course: "B.Sc ",
    institution: "Aditya Degree College ,Rajahmundry",
    board: "University",
    location: "Rajahmundry, Andhra Pradesh",
    year: "2021 – 2024",
    scoreLabel: "CGPA",
    score: "8.52",
  
  },
  {
    id: "inter",
    title: "Intermediate (10+2)",
    course: "MPC",
    institution: "Sri Chaitanaya Junior College ",
    board: "State Board ",
    location: "Rajahmundry, Andhra Pradesh",
    year: "2019 – 2021",
    scoreLabel: "Marks",
    score: "778",
   
  },
  {
    id: "ssc",
    title: "SSC (10th)",
    course: "Secondary School Certificate",
    institution: "King George High School ",
    board: "State Board",
    location: "Rajahmundry, Andhra Pradesh",
    year: "2019",
    scoreLabel: "GPA",
    score: "9.2 / 10",
  
  },
];

const EducationCard = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`edu-card ${isOpen ? "open" : ""}`} onClick={onToggle}>
      <div className="edu-header">
        <div>
          <h3 className="edu-title">{item.title}</h3>
          <p className="edu-course">{item.course}</p>
          <p className="edu-meta">
            {item.institution} • {item.location}
          </p>
        </div>
        <div className="edu-right">
          <span className="edu-year">{item.year}</span>
          <span className="edu-score">
            {item.scoreLabel}: <strong>{item.score}</strong>
          </span>
          <span className={`chevron ${isOpen ? "up" : "down"}`} />
        </div>
      </div>

      {isOpen && (
        <div className="edu-body" onClick={(e) => e.stopPropagation()}>
          <div className="edu-grid">
            <div className="edu-info">
              <p>
                <strong>Board/University:</strong> {item.board}
              </p>
              <p>
                <strong>Institution:</strong> {item.institution}
              </p>
              <p>
                <strong>Location:</strong> {item.location}
              </p>
              <p>
                <strong>Duration:</strong> {item.year}
              </p>
              <p>
                <strong>{item.scoreLabel}:</strong> {item.score}
              </p>
            </div>
           <div className="edu-highlights">
  <strong>Highlights</strong>
  <ul>
    {item.highlights?.map((h, i) => (
      <li key={i}>{h}</li>
    )) || <li>No highlights available</li>}
  </ul>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

const Education = () => {
  const [openId, setOpenId] = useState("pg"); // default open PG

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
  <section id="education" className="education-section">
  <h2 className="section-heading">Education</h2>

  <div className="edu-cards">
    {educationData.map((item) => (
      <EducationCard
        key={item.id}
        item={item}
        isOpen={openId === item.id}
        onToggle={() => toggle(item.id)}
      />
    ))}
  </div>
</section>

  );
};

export default Education;
