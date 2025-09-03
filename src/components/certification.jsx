import React from "react";
import "./certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="page">
      <h1>My Certifications</h1>
      
      <div className="certifications-list">
        <div className="cert-card">
          <h3>Full Stack Web Development</h3>
          <p>Issued by: Technical Hub</p>
          <a 
            href="src/assets/images/full stack web certificate.jpg" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        <div className="cert-card">
          <h3>The Joy of Python</h3>
          <p>Issued by: NPTEL</p>
          <a 
            href="src/assets/images/sakethNptelcertificate.jpeg" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>

        <div className="cert-card">
          <h3>Python 101 Data Science</h3>
          <p>Issued by: IBM</p>
          <a 
            href="src/assets/images/python data science .jpg" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
