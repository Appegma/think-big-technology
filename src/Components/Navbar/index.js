import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = ({ children }) => {
  const [active, setActive] = useState("main");

  const handleActive = (arg) => {
    setActive(arg);
  };

  return (
    <>
      <div className="sideBarMain">
        <div className="SideBarLogo" onClick={() => handleActive("main")}>
          <p>
            T<span className="color1">.</span>
          </p>
        </div>
        <div
          className={`sideBarLinks ${active === "about" && "active"}`}
          onClick={() => handleActive("about")}
        >
          About
        </div>
        <div
          className={`sideBarLinks ${active === "project" && "active"}`}
          onClick={() => handleActive("project")}
        >
          Project
        </div>
        <div
          className={`sideBarLinks ${active === "experence" && "active"}`}
          onClick={() => handleActive("experence")}
        >
          Exp.
        </div>
        <div
          className={`sideBarLinks ${active === "contact" && "active"}`}
          onClick={() => handleActive("contact")}
        >
          Contact
        </div>
      </div>

      <div className="sideBarTop">
        <div className="NavbarBtn margin-l">
          <button className="SideBarBtn">
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button className="SideBarBtn">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button className="SideBarBtn">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button className="SideBarBtn">
            {" "}
            <FontAwesomeIcon icon={faFacebook} />
          </button>
        </div>
        <div className="NavbarBtn margin-r">
          <button className="SideBarBtn2">Think Big Technology.</button>
        </div>
      </div>

      <div className="screen">{children}</div>
    </>
  );
};

export { SideBar };
