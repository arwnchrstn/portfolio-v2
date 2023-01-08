import { projects } from "../config/projects";
import { BsFillEyeFill, BsLink45Deg } from "react-icons/bs";
import React, { useRef } from "react";
import useNavigationActive from "../hooks/useNavigationActive";

const Projects = () => {
  const projectsRef = useRef();
  useNavigationActive(projectsRef, "SET_SHOW_PROJECTS");

  return (
    <>
      <section className="py-5" id="projects" ref={projectsRef}>
        <h2 className="text-green fw-bold mb-5">{">"}_ Personal Projects</h2>

        {projects?.map((project, index) => (
          <React.Fragment key={index}>
            <div className="py-2 ps-4 border-left my-4">
              <h5 className="text-white">{project?.title}</h5>
              <div className="d-flex gap-2 flex-wrap">
                {project.tech_stack.map((techStack, index) => (
                  <small
                    className="bg-green text-white rounded px-2 fw-bold text-nowrap"
                    key={index}
                  >
                    <small>{techStack}</small>
                  </small>
                ))}
              </div>
              <div className="mt-5 d-flex gap-2 flex-wrap">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-decoration-none text-green d-flex align-items-center mx-1 fw-bold"
                  >
                    <BsFillEyeFill className="me-1" /> Live
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  className="text-decoration-none text-green d-flex align-items-center mx-1 fw-bold"
                >
                  <BsLink45Deg className="me-1" /> Repo
                </a>
              </div>
            </div>
            {projects.length - 1 !== index && <hr className="divider" />}
          </React.Fragment>
        ))}
      </section>
      <hr />
    </>
  );
};

export default Projects;
