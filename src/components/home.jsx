import React from "react";
import "./Home.css";
import heroImg from "../assets/images/host.jpg";   // <-- import image

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="hero card-base">
        <div className="hero-left">
          <img
            src={heroImg}   // <-- use imported image
            alt="Bikkina Bhuvan Saketh"
            className="hero-img"
          />
        </div>
        <div className="hero-right">
          <div className="pill">Full-Stack Web Developer</div>
          <h1>Bikkina Bhuvan Saketh</h1>
          <p>
            Passionate full-stack developer trained in building responsive,
            dynamic, and efficient web applications. Skilled in MERN stack
            technologies (MongoDB, Express, React, Node.js) with a focus on
            clean code and modern web practices.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn">Contact Me</a>
            <a href="/experience" className="btn ghost">Experience</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
