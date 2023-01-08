import React from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const MainContent = () => {
  return (
    <div className="main-content px-4 bg-dark-gray">
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default MainContent;
