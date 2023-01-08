import React, { useRef } from "react";
import useNavigationActive from "../hooks/useNavigationActive";

const Education = () => {
  const educationRef = useRef();
  useNavigationActive(educationRef, "SET_SHOW_EDUCATION");
  return (
    <section
      id="education"
      className="d-flex flex-column justify-content-md-center py-5"
      ref={educationRef}
    >
      <h2 className="text-green fw-bold mb-5">{">"}_ Education</h2>

      <div className="border-left ps-4">
        <h4 className="text-white">
          Polytechnic University of the Philippines - Santa Rosa Campus
        </h4>
        <h5 className="text-green">Santa Rosa City, Laguna</h5>
        <p className="text-white">June 2018 to October 2022</p>
        <p className="m-0 text-white">College</p>
      </div>

      <div className="border-left ps-4 mt-5">
        <h4 className="text-white">Pulo Senior High School</h4>
        <h5 className="text-green">Cabuyao City, Laguna</h5>
        <p className="text-white">June 2016 to April 2018</p>

        <h4 className="text-white mt-4">Pulo National High School</h4>
        <h5 className="text-green">Cabuyao City, Laguna</h5>
        <p className="text-white">June 2012 to April 2016</p>
        <p className="m-0 text-white">High School</p>
      </div>
    </section>
  );
};

export default Education;
