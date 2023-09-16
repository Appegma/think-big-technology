import "../../App.css";
import { Card } from "../../components/Cards";
import { SideBar } from "../../components/Navbar";
import Reveal from "../../components/Animation/Reveal";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Status1 } from "../../components/Status";
import {PiProjectorScreenChartBold} from "react-icons/pi"


const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuItems = [
    // {
    //   id: "project",
    //   logo: (
    //     <p>
    //       T<span className="color1">.</span>
    //     </p>
    //   ),
    //   title: "Projects",
    // },
    {
      id: "project",
      logo: <PiProjectorScreenChartBold/>,
      title: "Projects",
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
      {/* <div className="container11">
        <Card1 />
      </div> */}

      <div className="container1">
        <SideBar
          menuItems={menuItems}
          activeMenu={activeDiv}
          handleActiveMenu={scrollToDiv}
        >
          {/* <StarsBackground title="Projects" /> */}
          <div className={`scroll-div section`} id="project">
            <div className="sectionA">
              <div className="footerHeading1">
                <Reveal>
                  <div className="footerHeading">
                    <h1>
                      Project<span className="color1">.</span>
                    </h1>
                  </div>
                </Reveal>
              </div>
              <Reveal>
                <div className="footerHeading">
                  <p>
                    Consequat irure aliquip esse aute minim sit ipsum sint
                    deserunt reprehenderit officia dolor aute. Occaecat deserunt
                    minim aute duis proident dolor officia in. Culpa deserunt
                    tempor nulla qui qui eu est anim ullamco elit. Deserunt
                    proident in cillum amet Lorem esse voluptate commodo duis
                    proident. Exercitation sunt eiusmod sunt cupidatat veniam
                    ipsum cupidatat eu ea. Sunt veniam ea et occaecat dolor et
                    non in magna duis occaecat reprehenderit sint.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
          <div className={`scroll-div section1`} id="project">
            <Status1
              value="Our Project Porfolio"
              statusDotsG="color1"
              status1Main="left status1Main"
            />
            <div className="projectContainer">
              {card.map((value) => (
                <Card {...value} />
              ))}
            </div>
          </div>
        </SideBar>
      </div>
    </>
  );
};
export default Projects;
