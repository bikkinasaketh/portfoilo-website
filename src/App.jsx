import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Education from "./components/education";
import Skills from "./components/skills";
import Certifications from './components/certifications';
import Experience from "./components/experience";
import Contact from "./components/contact";
import Projects from './components/project';
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
