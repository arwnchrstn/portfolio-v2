import { useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import ButtonGreen from "./buttons/ButtonGreen";
import ButtonGreenOutline from "./buttons/ButtonGreenOutline";

import useNavigationActive from "../hooks/useNavigationActive";

const About = () => {
  const aboutRef = useRef();
  useNavigationActive(aboutRef, "SET_SHOW_ABOUT");

  return (
    <>
      <section
        id="about"
        className="d-flex flex-column justify-content-center py-5"
        ref={aboutRef}
      >
        <h1 className="text-green fw-bold mb-3">Arwen Christian Ceres</h1>
        <h4 className="text-white">Full Stack Developer</h4>
        <h6 className="d-flex align-items-center">
          <HiLocationMarker size={23} className="text-green" />{" "}
          <span className="text-white ms-1">Cabuyao City, Laguna</span>
        </h6>

        <h6 className="d-flex align-items-center">
          <MdEmail size={23} className="text-green" />{" "}
          <span className="text-white ms-1">ceres703@gmail.com</span>
        </h6>

        <div className="mt-5 d-flex gap-2 flex-wrap">
          <ButtonGreen
            onClick={() =>
              window.open("https://github.com/arwnchrstn", "_blank")
            }
          >
            Github
          </ButtonGreen>
          <ButtonGreenOutline
            onClick={() =>
              window.open("https://www.linkedin.com/in/arwenceres/", "_blank")
            }
          >
            LinkedIn
          </ButtonGreenOutline>
        </div>
      </section>
      <hr />
    </>
  );
};

export default About;
