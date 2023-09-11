import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SideBar = ({
  children,
  menuItems,
  activeMenu = "main",
  handleActiveMenu,
}) => {
  const [rotate, setRotate] = useState(true);

  const handleActive = (arg) => {
    setRotate(!rotate);
    if (handleActiveMenu) handleActiveMenu(arg);
  };

  return (
    <>
      <div className="sideBarMain">
        <div
          className="SideBarLogo"
          style={{
            transform: rotate
              ? "perspective(600px) rotateY(0deg)"
              : "perspective(600px) rotateY(360deg)",
          }}
          onClick={() => handleActive("main")}
        >
          {menuItems?.length > 0 &&
            menuItems.map((data) => activeMenu === data.id && data.logo)}
        </div>

        {menuItems?.length > 0 &&
          menuItems.map(
            (data) =>
              data.id !== "main" && (
                <div
                  className={`sideBarLinks ${
                    activeMenu === data.id && "active"
                  }`}
                  onClick={() => handleActive(data.id)}
                >
                  {data.title}
                </div>
              ),
          )}
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
