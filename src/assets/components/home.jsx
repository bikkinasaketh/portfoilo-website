import React from "react";
import "./home.css";
import heroImg from "../images/host.jpg"; // ✅ correct (one level up)

import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { SiGmail } from "react-icons/si"; // <-- Gmail icon

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="hero card-base">
        {/* Left Section (Image) */}
        <div className="hero-left">
          <img
            src={heroImg}
            alt="Golukonda Venu Priyanka"
            className="hero-img"
          />
        </div>

        {/* Right Section (Content) */}
        <div className="hero-right">
          <div className="pill">Full-Stack Web Developer</div>
          <h1>Bikkina Bhuvan Saketh</h1>
          <p>
            Passionate full-stack developer trained in building responsive,
            dynamic, and efficient web applications. Skilled in MERN stack
            technologies (MongoDB, Express, React, Node.js) with a focus on
            clean code and modern web practices.
          </p>

          {/* Buttons */}
          <div className="hero-actions">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="#experience" className="btn ghost">Experience</a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/bhuvan-saketh-bikkina-12638231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/bikkinasaketh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="mailto:priyankanaidu470@gmail.com"  // <-- replace with your Gmail
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <SiGmail className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
