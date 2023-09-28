import "../../App.css";
// import Card from "../../components/Cards";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
// import { PiProjectorScreenChartBold } from "react-icons/pi";
// import Heading from "../../components/Heading";
import { teamDetails } from "../../data";
import { projectSliderItems } from "../../data";
import SwiperVertical from "../../components/Swiper/SwiperVertical";
import SwiperHorizontal from "../../components/Swiper/SwiperHorizontal";
import ProjectPanel from "../../components/ProjectPanel";
import Team from "../../components/Team";
import { FaProjectDiagram } from "react-icons/fa";
import EnergyBalls from "../../components/EnergyBalls/index.js";
import Loader from "../../components/Loader";
import ClipEffect from "../../components/ClipPathEffect";

const Projects = () => {
  const menuItems = [
    {
      id: "main",
      logo: (
        <p>
          T<span className="boldBlueText">.</span>
        </p>
      ),
      title: "Home",
    },
    {
      id: "projects",
      logo: <FaProjectDiagram />,
      title: "Projects",
    },
  ];

  const [activeDiv, setActiveDiv] = useState(0);
  const handleScroll = () => {
    // Calculate the index of the active div based on scroll position
    // You may need to customize this logic based on your layout
    // const scrollTop = window.scrollY;
    const divElements = document.querySelectorAll(".scroll-div");
    let newIndex = 0;

    for (let i = 0; i < divElements.length; i++) {
      const div = divElements[i];
      const rect = div.getBoundingClientRect();

      if (rect.top <= window.innerHeight / 2) {
        newIndex = div.id;
      }
    }

    setActiveDiv(newIndex);
  };

  useEffect(() => window.scrollTo(0, 0), []);
  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    setActiveDiv(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <div className={`scroll-div container1`} id="projects">
   
        <Navbar
          menuItems={menuItems}
          activeMenu={activeDiv === 0 ? "projects" : activeDiv}
          handleActiveMenu={scrollToDiv}
        >
          <SwiperVertical
            rtical
            items={projectSliderItems}
            component={ProjectPanel}
          />

          <SwiperHorizontal
            items={teamDetails}
            title="YOU’LL NEVER BELIEVE WHAT WE CAN CREATE TOGETHER. LET'S BUILD AMAZING."
            component={Team}
          />
        </Navbar>
      </div> */}  <div className="">
          <ClipEffect />
        </div>
      {/* <div className={`section1`}>
        <Heading text="Our Project Porfolio" reverse />
        <div className="projectContainer">
          {projectCard.map((value, index) => (
            <Card {...value} key={`portfolio-${index}`} />
          ))}
        </div>
      </div> */}
    </>
  );
};
export default Projects;
