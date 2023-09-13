import "../../App.css";
import Banner from "../../components/Banner";
import { Status, Status1, Status2 } from "../../components/Status";
import { SideBar } from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBarsProgress,
  faBuilding,
  faCircleInfo,
  faHeart,
  faListCheck,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Reveal from "../../components/Animation/Reveal";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Form } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import Iframe from "../../components/Iframe";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuItems = [
    {
      id: "main",
      logo: (
        <p>
          T<span className="color1">.</span>
        </p>
      ),
      title: "Services",
    },
    // {
    //   id: "about",
    //   logo: <FontAwesomeIcon icon={faCircleInfo} />,
    //   title: "About",
    // },
    // {
    //   id: "projects",
    //   logo: <FontAwesomeIcon icon={faBarsProgress} />,
    //   title: "Projects",
    // },
    // {
    //   id: "experience",
    //   logo: <FontAwesomeIcon icon={faListCheck} />,
    //   title: "Experience",
    // },
    {
      id: "contact",
      logo: <FontAwesomeIcon icon={faAddressBook} />,
      title: "Contact",
    },
  ];

  const status = [
    "JavaScript",
    "React",
    "HTML",
    "Css",
    "Angular",
    "Vue JS",
    "TypeScript",
    "Node",
    "Express",
    "Github",
    "Redux",
  ];

  const status2 = [
    {
      heading: "Google",
      city: "Atlanta",
      date: "2022 - Present",
      title: "Software Engineer",
      detail:
        "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
      status: status.splice(0, 5),
    },
    {
      heading: "Facebook",
      city: "San Francisco",
      date: "2020 - 2022",
      title: "Software Engineer",
      detail:
        "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
      status: status.splice(3, 8),
    },
    {
      heading: "Amazon",
      city: "Seattle",
      date: "2016 - 2020",
      title: "Software Engineer",
      detail:
        "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
      status: status.splice(1, 6),
    },
  ];

  const card = [
    {
      title: "Project 1",
      img: "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
      link: "https://think-big-technology.web.app/",
    },
    {
      title: "Project 2",
      img: "https://codequotient.com/blog/wp-content/uploads/2023/04/Showcasing-Your-Web-Developer-Skills-Crafting-a-Portfolio-That-Packs-a-Punch.jpg",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
      link: "https://think-big-technology.web.app/",
    },
    {
      title: "Project 3",
      img: "https://5.imimg.com/data5/MH/FQ/OV/SELLER-52007146/personal-portfolio-website-500x500.jpg",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
      link: "https://think-big-technology.web.app/",
    },
    {
      title: "Project 4",
      img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/292121659/original/c8d7a4162986e94e44e348f85b2ffeb77feb0a8d/develop-personal-portfolio-website-blog-or-business-website.jpg",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
      link: "https://think-big-technology.web.app/",
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
    <>
      <div className="container1">
        <SideBar
          menuItems={menuItems}
          activeMenu={activeDiv}
          handleActiveMenu={scrollToDiv}
        >
          <div className={`scroll-div section5`} id="about">
            <ContactForm />
          </div>
        </SideBar>
      </div>
    </>
  );
};
export default Services;
