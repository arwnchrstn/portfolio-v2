import React, { useRef } from "react";
import {
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiBootstrap,
  DiGithubBadge
} from "react-icons/di";
import {
  SiExpress,
  SiRedux,
  SiPostman,
  SiMysql,
  SiJavascript
} from "react-icons/si";
import useNavigationActive from "../hooks/useNavigationActive";

const Skills = () => {
  const skillsRef = useRef();
  useNavigationActive(skillsRef, "SET_SHOW_SKILLS");

  return (
    <>
      <section
        className="d-flex flex-column justify-content-md-center py-5"
        id="skills"
        ref={skillsRef}
      >
        <h2 className="text-green fw-bold mb-5">{">"}_ Skills</h2>

        <h4 className="text-white">Tools and Languages</h4>

        <div className="d-flex gap-3 mt-4 text-green flex-wrap">
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <DiHtml5 size={20} className="me-1" /> HTML
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <DiCss3 size={20} className="me-1" />
            CSS
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <SiJavascript size={20} className="me-1" />
            JavaScript
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <DiNodejsSmall size={20} className="me-1" />
            Node JS
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <DiReact size={20} className="me-1" />
            React JS
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <DiMongodb size={20} className="me-1" />
            Mongo DB
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <DiBootstrap size={20} className="me-1" />
            Bootstrap
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <SiExpress size={20} className="me-1" />
            Express JS
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <SiRedux size={20} className="me-1" />
            Redux Toolkit
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <SiPostman size={20} className="me-1" />
            Postman
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <SiMysql size={20} className="me-1" />
            MySQL
          </span>
          <span className="border-green rounded d-flex align-items-center px-2 py-1">
            <DiGithubBadge size={20} className="me-1" />
            GitHub
          </span>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Skills;
