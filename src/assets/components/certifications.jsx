import React, { useState } from "react";
import "./certifications.css";

import fullStackCert from "../images/fullstackwebcertificate.jpg";
import frontEndCert from "../images/apexcertificate.jpeg";
import pythonCert1 from "../images/sakethpython.png";

import IBM from "../images/pythondatascience .jpg";
import pythonCert3 from "../images/sakethNptelcertificate.jpeg";
import pythonCert4 from "../images/projectspace.jpg";



const certifications = [

  {
    title: "Full Stack Web Development",
    issuedBy: "Technical Hub",
    date: "June 2025",
    certificate: fullStackCert,
  },
 
  {
    title: "Front-End Development",
    issuedBy: "Apex Software Tech Company",
    date: "July 2025",
    certificate: frontEndCert,
  },

   {
    title: "Python Full Stack Web Development",
    issuedBy: "Gobal One Services",
    date: "June 2025",
    certificate: pythonCert1, // reuse any image
  },
   {
    title: "Python for Data Science",
    issuedBy: "IBM",
    date: "Feb 2025",
    certificate: IBM, // reuse any image
  },
     {
    title: "Intrduction to Python",
    issuedBy: "Nptel",
    date: "Feb 2025",
    certificate: pythonCert3, // reuse any image
  },
     {
    title:" Project space Full stack development",
    issuedBy: "Technical Hub",
    date: "Jun 2025",
    certificate: pythonCert4, // reuse any image
  }
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
               <button className="certificate-btn">View Certificate</button>

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
