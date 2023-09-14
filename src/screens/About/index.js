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
import { Card1 } from "../../components/Cards";
import CardQuotationImage from "../../asset/quataions.png";


const About = () => {
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
      title: "Home",
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

  const card1 = [
    {
      name: "mona lisa",
      logo: CardQuotationImage ,
      personImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    },
    {
        name: "mona lisa",
        logo: CardQuotationImage ,
        personImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        detail:
          "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
      },  {
        name: "mona lisa",
        logo: CardQuotationImage ,
        personImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        detail:
          "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
      },  {
        name: "mona lisa",
        logo: CardQuotationImage ,
        personImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        detail:
          "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
      },  {
        name: "mona lisa",
        logo: CardQuotationImage ,
        personImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        detail:
          "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
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
          <div className="section">
            <Status1
              value="Testimonial"
              statusDotsG="color1"
              status1Main="status1Main"
            />
          </div>

          <div className="testContainer">
            {card1.map((value) => (
              <Card1 {...value} />
            ))}
          </div>
        </SideBar>
      </div>
    </>
  );
};
export default About;
