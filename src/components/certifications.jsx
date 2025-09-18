import React, { useState } from "react";
import "./certifications.css";

// Import certificate images
import pythonCert from "../assets/images/python data science .jpg";
import fullStackCert from "../assets/images/full stack web certificate.jpg";
import javaCert from "../assets/images/sakethNptelcertificate.jpeg";
import frontEndCert from "../assets/images/apex certificate.jpeg";
import dataScienceCert from "../assets/images/skill dzire.jpeg";

const certifications = [
  {
    title: "Python Full Stack Development",
    issuedBy: "Global One Services",
    date: "May 2024",
    certificate: pythonCert,
  },
  {
    title: "Full Stack Web Development",
    issuedBy: "Technical Hub",
    date: "June 2025",
    certificate: fullStackCert,
  },
  {
    title: "Core Java Development",
    issuedBy: "Adhoc Network Tech Company",
    date: "Oct 2023",
    certificate: javaCert,
  },
  {
    title: "Front-End Development",
    issuedBy: "Apex Software Tech Company",
    date: "July 2025",
    certificate: frontEndCert,
  },
  {
    title: "Data Science",
    issuedBy: "SkillDzire",
    date: "July 2025",
    certificate: dataScienceCert,
  },
  {
    title: "Python for Data science",
    issuedBy: "IBM",
    date: "Feb 2025",
    certificate: pythonCert, // reuse any image
  },
];

const Certifications = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-container">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
            <div className="flip-card-inner">
              {/* Front Face */}
              <div className="flip-card-front">
                <h3>{cert.title}</h3>
                <p>{cert.issuedBy}</p>
                <p>{cert.date}</p>
                <p className="click-text">Click Me for Certificate</p>
              </div>

              {/* Back Face */}
              <div className="flip-card-back">
                <img src={cert.certificate} alt={cert.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
