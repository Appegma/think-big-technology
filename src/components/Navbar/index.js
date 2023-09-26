import { useState } from "react";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import Cube from "../Cube";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar({
  children,
  menuItems,
  activeMenu = "main",
  handleActiveMenu,
}) {
  const [toggle, setToggle] = useState(false);

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
        <div className="toggleBtn"></div>
        <div className="NavbarBtn margin-l order3">
          <button className="SideBarBtn">
            <BsGithub />
          </button>
          <button className="SideBarBtn">
            <BsInstagram />
          </button>
          <button className="SideBarBtn">
            <BsLinkedin />
          </button>
          <button className="SideBarBtn">
            <BsFacebook />
          </button>
        </div>
        <div className="topToggleBtn order2">
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="toggle"
          >
            <button>{toggle ? <RxCross2 /> : <GiHamburgerMenu />}</button>
          </div>
          <div className={`topLinks`}>
            <ul className={` ${toggle ? "d-flex" : "d-none"}  topName`}>
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
                  className={`topNameStyle ${
                    activeRoute === "info" && "active"
                  }`}
                  onClick={() => topActive("info")}
                  to={"/Contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="NavbarBtn margin-r order1">
          <img alt="Logo" src={logo} width={230} />
          {/* <button className="SideBarBtn2">Think Big Technology.</button> */}
        </div>
      </div>

      <div className="screen">{children}</div>
    </>
  );
}

export default Navbar;
