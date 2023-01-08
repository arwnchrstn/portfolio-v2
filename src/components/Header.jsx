import { BsFillPersonFill } from "react-icons/bs";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

import { useContext } from "react";
import { NavContext } from "../context/NavContext";

const Header = () => {
  const { elements } = useContext(NavContext);

  return (
    <header className="bg-black border-right p-1">
      <div className="navigation h-100 d-flex flex-column justify-content-center align-items-center py-3">
        <ul className="navigation-list text-green m-0 p-0 d-flex flex-md-column gap-2 fw-bold">
          <li
            className={`navigation-item rounded ${elements.about && "active"}`}
            onClick={() => (location.href = "#about")}
          >
            <BsFillPersonFill size={25} />
          </li>
          <li
            className={`navigation-item rounded ${
              elements.projects && "active"
            }`}
            onClick={() => (location.href = "#projects")}
          >
            <FaLaptopCode size={25} />
          </li>
          <li
            className={`navigation-item rounded ${elements.skills && "active"}`}
            onClick={() => (location.href = "#skills")}
          >
            <FaTools size={25} />
          </li>
          <li
            className={`navigation-item rounded ${elements.exp && "active"}`}
            onClick={() => (location.href = "#experience")}
          >
            <MdWork size={25} />
          </li>
          <li
            className={`navigation-item rounded ${
              elements.education && "active"
            }`}
            onClick={() => (location.href = "#education")}
          >
            <FaUserGraduate size={25} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
