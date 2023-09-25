import { useState } from "react";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import Cube from "../Cube";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar({
  children,
  menuItems,
  activeMenu = "main",
  handleActiveMenu,
}) {
  const [rotate, setRotate] = useState(true);
  const [activeRoute, setActiveRoute] = useState("Home");

  const topActive = (arg) => {
    setActiveRoute(arg);
  };

  const handleActive = (arg) => {
    setRotate(!rotate);
    if (handleActiveMenu) handleActiveMenu(arg);
  };

  const activeIndex = menuItems.findIndex((data) => data.id === activeMenu);

  return (
    <>
      <div className="sideBarMain">
        <div className="SideBarLogo" onClick={() => handleActive("main")}>
          <Cube items={menuItems} active={activeIndex} />
        </div>

        {menuItems?.length > 0 &&
          menuItems.map(
            (data) =>
              data.id !== "main" && (
                <div
                  key={data.id}
                  className={`sideBarLinks ${
                    activeMenu === data.id && "activeSidebar"
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
          <a
            href="https://github.com/think-big-technology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="SideBarBtn">
              <BsGithub />
            </button>
          </a>
          <a
            href="https://instagram.com/thinkbigtechnology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="SideBarBtn">
              <BsInstagram />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/think-big-technology-nj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="SideBarBtn">
              <BsLinkedin />
            </button>
          </a>
          <a
            href="https://www.facebook.com/thinkbigtechnologyusa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="SideBarBtn">
              <BsFacebook />
            </button>
          </a>
        </div>
        <div className="topLinks">
          <ul className="topName">
            <li>
              <NavLink
                className={`topNameStyle ${activeRoute === "home" && "active"}`}
                onClick={() => topActive("home")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`topNameStyle ${
                  activeRoute === "about" && "active"
                } `}
                onClick={() => topActive("about")}
                to={"/about"}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className={`topNameStyle ${
                  activeRoute === "services" && "active"
                }`}
                onClick={() => topActive("services")}
                to={"/Services"}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`topNameStyle ${
                  activeRoute === "porjects" && "active"
                }`}
                onClick={() => topActive("projects")}
                to={"/Projects"}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`topNameStyle ${activeRoute === "info" && "active"}`}
                onClick={() => topActive("info")}
                to={"/Contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="NavbarBtn margin-r">
          <img alt="Logo" src={logo} width={230} />
          {/* <button className="SideBarBtn2">Think Big Technology.</button> */}
        </div>
      </div>

      <div className="screen">{children}</div>
    </>
  );
}

export default Navbar;
