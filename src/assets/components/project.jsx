import React from "react";
import "./project.css";

// Import project images
import cmsImg from "../images/cmse.jpg";
import sportsHubImg from "../images/sports.jpg";


const projects = [
  {
    title: "Complaint Management System",
    description: "Full-stack React app for submitting and tracking complaints with admin panel.",
    image: cmsImg,
    demo: "https://your-cms-demo-link.com",
    github: "https://github.com/yourusername/complaint-management",
  },
  {
    title: "Event Management System",
    description: "React app for sports quizzes, jokes, and interactive content.",
    image: sportsHubImg,
    demo: "https://your-sports-hub-demo.com",
    github: "https://github.com/yourusername/sports-hub",
  },
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
