import "../../App.css";
import Banner from "../../components/Banner";
import { Status, Status1, Status2 } from "../../components/Status";
import { Card } from "../../components/Cards";
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
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAmazon,
  faFacebook,
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Reveal from "../../components/Animation/Reveal";
import { useEffect, useState } from "react";
import AOS from "aos";
import ProjectCard from "../../components/ProjectCard";
import Iframe from "../../components/Iframe";

const Home = () => {
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
    {
      id: "about",
      logo: <FontAwesomeIcon icon={faCircleInfo} />,
      title: "About",
    },
    {
      id: "iframes",
      logo: <FontAwesomeIcon icon={faVideo} />,
      title: "video",
    },
    {
      id: "projects",
      logo: <FontAwesomeIcon icon={faBarsProgress} />,
      title: "Projects",
    },
    {
      id: "google",
      logo: <FontAwesomeIcon icon={faGoogle} />,
      title: "Google",
    },
    {
      id: "facebook",
      logo: <FontAwesomeIcon icon={faFacebook} />,
      title: "Facebook",
    },
    {
      id: "amazon",
      logo: <FontAwesomeIcon icon={faAmazon} />,
      title: "Amazon",
    },
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

  const project = [
    {
      id: "google",
      title: "Google",
      img: "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
      detail:
        "A social community for painters to connect with others in their community. We handle everything backend (50K monthly active users).",
      percentage: "40%",
      percentageDescription:
        "Of sales attributed to digital alone, in 2023 (Q1).",
    },
    {
      id: "facebook",
      title: "Facebook",
      img: "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
      detail:
        "A social community for painters to connect with others in their community. We handle everything backend (50K monthly active users).",
      percentage: "40%",
      percentageDescription:
        "Of sales attributed to digital alone, in 2023 (Q1).",
    },
    {
      id: "amazon",
      title: "Amazon",
      img: "https://static.wixstatic.com/media/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg/v1/fill/w_640,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94a51f_73781c63931a4bbea817499e1ea5820a~mv2.jpg",
      detail:
        "A social community for painters to connect with others in their community. We handle everything backend (50K monthly active users).",
      percentage: "40%",
      percentageDescription:
        "Of sales attributed to digital alone, in 2023 (Q1).",
    },
  ];

  const [scrollCount, setScrollCount] = useState(0);
  const [activeDiv, setActiveDiv] = useState(0);

  const [zoomLevel, setZoomLevel] = useState(0.5);

  useEffect(() => {
    const handleScroll = (e) => {
      const div = document.getElementById("iframes");
      const rect = div.getBoundingClientRect();

      if (rect.top <= window.innerHeight ) {
        console.log("hello")
        if (e.deltaY > 0) {
          // Scrolling up, zoom in
          setZoomLevel((prevZoom) => Math.min(1.3, prevZoom + 0.1));
        } else {
          // Scrolling down, zoom out
          setZoomLevel((prevZoom) => Math.max(0.5, prevZoom - 0.1));
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

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
          activeMenu={activeDiv || "main"}
          handleActiveMenu={scrollToDiv}
        >
          <div className={`scroll-div`} id="main">
            <Banner bannarHeadingG1="color1" BtnValue="Contact Us" />
          </div>

          <div className={`scroll-div section`} id="about">
            <Status1
              value="About"
              statusDotsG="color1"
              status1Main="status1Main"
            />
            <div className="divider">
              <div className="dividerText">
                <Reveal>
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="dividerText1"
                  >
                    Excepteur cillum ut qui anim id. Cillum ex laboris Lorem
                    deserunt anim exercitation laboris minim duis velit nulla eu
                    aute ex. Id id exercitation exercitation proident dolor.
                  </div>
                </Reveal>

                <Reveal>
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="dividerText1"
                  >
                    Nulla eiusmod aute ea nulla. Eiusmod eiusmod cillum ullamco
                    excepteur non. Labore sint est duis do cupidatat ipsum do
                    quis eiusmod non anim est. Fugiat ad consequat nostrud est
                    officia et nulla consequat esse enim consequat aliquip.
                    Veniam Lorem nostrud sunt aliqua.
                  </div>
                </Reveal>

                <Reveal>
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="dividerText1"
                  >
                    Aliqua nostrud aute amet sint velit occaecat laborum fugiat
                    adipisicing sunt dolore et elit. Eu do reprehenderit amet
                    officia magna dolor exercitation adipisicing laboris ea id
                    deserunt. Excepteur amet nisi id dolore dolor veniam
                    occaecat sunt cillum incididunt nulla officia ea cupidatat.
                  </div>
                </Reveal>

                <Reveal>
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="dividerText1"
                  >
                    Eu exercitation ex ex et. Ea magna ut aute et officia
                    excepteur nisi anim excepteur. Adipisicing incididunt
                    cupidatat occaecat ex eu veniam velit proident est irure
                    voluptate officia minim do.
                  </div>
                </Reveal>

                <Reveal>
                  <div className="mylink">
                    <span className="color1 font_s">My Link </span>
                    <button className="SideBarBtn">
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                    <button className="SideBarBtn">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </button>
                    <button className="SideBarBtn">
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                  </div>
                </Reveal>
              </div>

              <div className="dividerStatus">
                <div className="dividerStatusContaioner">
                  <Reveal>
                    <div className="dividerHeadingMain">
                      <FontAwesomeIcon icon={faBuilding} />
                      <h1>Use at work</h1>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="statusContainer">
                      {status.map((value) => (
                        <Status value={value} />
                      ))}
                    </div>
                  </Reveal>
                </div>

                <div className="dividerStatusContaioner">
                  <Reveal>
                    <div className="dividerHeadingMain">
                      <FontAwesomeIcon icon={faHeart} />
                      <h1>Love to Work with</h1>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="statusContainer">
                      {status.map((value) => (
                        <Status value={value} />
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`scroll-div section1`}
            style={{ transform: `scale(${zoomLevel})` }}
            id="iframes"
          >
            <Iframe zoomLevel={zoomLevel} />
          </div>

          <div className={`scroll-div section1`} id="projects">
            <Status1
              value="Projects"
              statusDotsG="color1"
              status1Main="left status1Main"
            />
            <div className="projectContainer">
              {card.map((value) => (
                <Card {...value} />
              ))}
            </div>
          </div>

          {project.map((value) => (
            <div className={`scroll-div section3`} id={value.id}>
              <ProjectCard {...value} />
            </div>
          ))}

          {/* <div className={`scroll-div section`} id="experience">
            {status2.map((value) => (
              <Status2 {...value} />
            ))}
          </div> */}

          <div className={`scroll-div section`} id="contact">
            <div className="sectionA">
              <div className="footerHeading1">
                <Reveal>
                  <div className="footerHeading">
                    <h1>
                      Contact<span className="color1">.</span>
                    </h1>
                  </div>
                </Reveal>
              </div>
              <Reveal>
                <div className="footerHeading">
                  <p>
                    Shoot me an email if you want to connect! You can also find
                    me on Linkedin or Twitter if that's more your speed.
                  </p>
                </div>
              </Reveal>
              <div className="footerHeading1">
                <Reveal>
                  <div className="footerHeading">
                    <h3>
                      <FontAwesomeIcon icon={faMailForward} />
                      <span className="footerEmail">
                        info@thinkbigtechnology.com
                      </span>
                    </h3>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </SideBar>
      </div>
    </>
  );
};
export default Home;
