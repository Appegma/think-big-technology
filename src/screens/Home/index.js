import "../../App.css";
import Banner from "../../components/Banner";
import Card from "../../components/Cards";
import { SideBar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ZoomableVideo from "../../components/ZoomableVideo";
import logo from "../../assets/logo.png";
import { AiFillFacebook, AiOutlineAmazon } from "react-icons/ai";
import { FaGoogle, FaAddressBook } from "react-icons/fa";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";

import Title from "../../components/Title";
import Heading from "../../components/Heading";
import { project, projectCard } from "../../data";

const Home = () => {
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
      logo: <PiProjectorScreenChartBold />,
      title: "Projects",
    },
    {
      id: "google",
      logo: <FaGoogle />,
      title: "Google",
    },
    {
      id: "facebook",
      logo: <AiFillFacebook />,
      title: "Facebook",
    },
    {
      id: "amazon",
      logo: <AiOutlineAmazon />,
      title: "Amazon",
    },
    {
      id: "contact",
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

  const email = "info@thinkbigtechnology.com";

  return (
    <div className="container1">
      <SideBar
        menuItems={menuItems}
        activeMenu={activeDiv || "main"}
        handleActiveMenu={scrollToDiv}
      >
        <div className={`scroll-div`} id="main">
          <Banner image={logo} />
        </div>

        <ZoomableVideo />

        <div className={`scroll-div section1 m-top-full`} id="projects">
          <Heading text="Projects" reverse />
          <div className="projectContainer">
            {projectCard?.length > 0 &&
              projectCard.map((value, index) => (
                <Card key={`portfolio-${index}`} {...value} />
              ))}
          </div>
        </div>

        {project?.length > 0 &&
          project.map((value) => (
            <div className={`scroll-div section3`} key={value.id} id={value.id}>
              <ProjectCard {...value} />
            </div>
          ))}

        <div className={`scroll-div section`} id="contact">
          <Title
            title="Contact"
            subtitle={
              <>
                <MdOutlineAlternateEmail />{" "}
                <a href={`mailto:${email}`}>{email}</a>
              </>
            }
            paragraph="Shoot me an email if you want to connect! You can also find me on Linkedin or Twitter if that's more your speed."
          />
        </div>
      </SideBar>
    </div>
  );
};
export default Home;
