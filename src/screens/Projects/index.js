import "../../App.css";
import Card from "../../components/Cards";
import { SideBar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import Heading from "../../components/Heading";
// import Slider from "../../components/Slider";
// import Title from "../../components/Title";
import { projectCard } from "../../data";
import ScrollSlider from "../../components/ScrollSlider";
import { GrCircleInformation, GrServices } from "react-icons/gr";
import { FaAddressBook } from "react-icons/fa";
import { projectSliderItems } from "../../data";
import Title from "../../components/Title";

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
      id: "about",
      logo: <GrCircleInformation className="svgColors" />,
      title: "About",
    },
    {
      id: "services",
      logo: <GrServices className="svgColors" />,
      title: "Services",
    },
    {
      id: "projects",
      logo: <PiProjectorScreenChartBold />,
      title: "Projects",
    },
    {
      id: "info",
      logo: <FaAddressBook />,
      title: "Contact",
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
    <div className={`scroll-div container1`} id="projects">
      <SideBar
        menuItems={menuItems}
        activeMenu={activeDiv === 0 ? "projects" : activeDiv}
        handleActiveMenu={scrollToDiv}
      >
        {/* <div className={`section3 m-top-full`}>
          <Title
            title="Projects"
            paragraph={`Consequat irure aliquip esse aute minim sit ipsum sint
                deserunt reprehenderit officia dolor aute. Occaecat deserunt
                minim aute duis proident dolor officia in. Culpa deserunt
                tempor nulla qui qui eu est anim ullamco elit.`}
          />
        </div> */}

        <ScrollSlider items={projectSliderItems} />

        {/* <div className={`relative section2`}>
          <Slider items={sliderItems} />
        </div>

        <div className="absoluteContainer">
          <Title
            title="Projects"
            paragraph={`Consequat irure aliquip esse aute minim sit ipsum sint
                deserunt reprehenderit officia dolor aute. Occaecat deserunt
                minim aute duis proident dolor officia in. Culpa deserunt
                tempor nulla qui qui eu est anim ullamco elit.`}
          />
        </div> */}

        <div className={`section1`}>
          <Heading text="Our Project Porfolio" reverse />
          <div className="projectContainer">
            {projectCard.map((value, index) => (
              <Card {...value} key={`portfolio-${index}`} />
            ))}
          </div>
        </div>
      </SideBar>
    </div>
  );
};
export default Projects;
