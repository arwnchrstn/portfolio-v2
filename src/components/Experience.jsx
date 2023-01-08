import React, { useRef } from "react";
import useNavigationActive from "../hooks/useNavigationActive";

const Experience = () => {
  const expRef = useRef();
  useNavigationActive(expRef, "SET_SHOW_EXP");

  return (
    <>
      <section
        id="experience"
        className="d-flex flex-column justify-content-md-center py-5"
        ref={expRef}
      >
        <h2 className="text-green fw-bold mb-5">{">"}_ Work Experience</h2>

        <div className="border-left ps-4">
          <h4 className="text-white">Technology Consulting Associate</h4>
          <h5 className="text-green">
            SyCip Gorres Velayo & Co. (EY Philppines)
          </h5>
          <h6 className="text-white">Makati City</h6>
          <p className="text-white m-0">November 2022 to Present</p>
        </div>

        <div className="border-left ps-4 mt-5">
          <h4 className="text-white">Front-End Web Developer Intern (OJT)</h4>
          <h5 className="text-green">IForm IT Consultancy</h5>
          <h6 className="text-white">Muntinlupa City</h6>
          <p className="text-white m-0">May 2022 to July 2022</p>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Experience;
