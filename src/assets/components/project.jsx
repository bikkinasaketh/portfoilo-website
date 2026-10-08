import React from "react";
import "./project.css";

// Import project images
import cmsImg from "../images/cmse.jpg";
import sportsHubImg from "../images/smart .png";
import freelancerImg from "../images/freelancer.jfif";


const projects = [
  {
    title: "Complaint Management System",
    description: "Full-stack React app for submitting and tracking complaints with admin panel.",
    image: cmsImg,
    demo: "https://electricial-website.vercel.app/",
    github: "https://github.com/bikkinasaketh/campus/",
  },
  {
    title: "Smart Crop recomendation system using Ml& iot",
    description: "AI-powered crop recommendation system that uses Machine Learning and IoT-based environmental and soil data to recommend the most suitable crops for better agricultural productivity..",
    image: sportsHubImg,
    demo: "https://smartcrop-10.onrender.com/",
    github: "https://github.com/bikkinasaketh/smartcrop",
  },
  {
  title: "Smart Freelancer Project & Client Management System",
  description:
    "Full-stack web application for managing freelancers, clients, and projects with secure authentication, role-based access, and REST APIs.",
  image: freelancerImg,
  demo: "https://freelance-frotend.netlify.app/",
  github: "https://github.com/bikkinasaketh/freelance-frontend",
}

];

const Projects = () => {
  return (
   <section id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <img src={proj.image} alt={proj.title} />
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
              </div>
              <div className="project-card-back">
                <a href={proj.demo} target="_blank" rel="noreferrer">
                  🔗 Live Demo
                </a>
                <a href={proj.github} target="_blank" rel="noreferrer">
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
