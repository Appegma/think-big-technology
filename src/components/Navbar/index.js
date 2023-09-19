import { useState } from "react";
import { BsGithub, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs";
import Cube from "../Cube";
import { NavLink } from "react-router-dom";
const SideBar = ({
  children,
  menuItems,
  activeMenu = "main",
  handleActiveMenu,
}) => {
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

  console.log("activeMenu => ", activeMenu);
  console.log("activeIndex => ", activeIndex);

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
          <button className="SideBarBtn">
            <BsGithub />
          </button>
          <button className="SideBarBtn">
            <BsTwitter />
          </button>
          <button className="SideBarBtn">
            <BsLinkedin />
          </button>
          <button className="SideBarBtn">
            <BsFacebook />
          </button>
        </div>
        <div className="topLinks">
          <ul className="topName">
            <li>
              <NavLink
                className={`topNameStyle ${
                  activeRoute === "home" && "active"
                } `}
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
                to={"/Info"}
              >
                Info
              </NavLink>
            </li>
          </ul>
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
