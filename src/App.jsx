import React from "react";
import Navbar from "./assets/components/nav.jsx";
import Home from "./assets/components/home.jsx";
import Education from "./assets/components/education.jsx";
import Skills from "./assets/components/skill.jsx";
import Certifications from './assets/components/certifications.jsx';
import Experience from "./assets/components/experience.jsx";
import Contact from "./assets/components/contact.jsx";
import Projects from './assets/components/project.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education/>
      <Skills /> 
      <Projects/>  
      <Experience />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
