import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Education/>
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
