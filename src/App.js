import "./App.css";
import Banner from "./Components/Banner";
import { Status, Status1, Status2 } from "./Components/status";
import Card from "./Components/Cards";
import { SideBar } from "./Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHeart,
  faHouse,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Reveal from "./Components/Animation/Reveal";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);
 
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

  return (
    <>
      <div className="container1">
        <SideBar>
          <Banner bannarHeadingG1="color1" BtnValue="Contact Us" />
          <div className="section">
            <Status1
              value="About"
              statusDotsG="color1"
              status1Main="status1Main"
            />
            <div className="divider">
              <div className="dividerText">
                <Reveal>
                  <div className="dividerText1">
                    Excepteur cillum ut qui anim id. Cillum ex laboris Lorem
                    deserunt anim exercitation laboris minim duis velit nulla eu
                    aute ex. Id id exercitation exercitation proident dolor.
                  </div>
                </Reveal>

                <Reveal>
                  <div className="dividerText1">
                    Nulla eiusmod aute ea nulla. Eiusmod eiusmod cillum ullamco
                    excepteur non. Labore sint est duis do cupidatat ipsum do
                    quis eiusmod non anim est. Fugiat ad consequat nostrud est
                    officia et nulla consequat esse enim consequat aliquip.
                    Veniam Lorem nostrud sunt aliqua.
                  </div>
                </Reveal>

                <Reveal>
                  <div className="dividerText1">
                    Aliqua nostrud aute amet sint velit occaecat laborum fugiat
                    adipisicing sunt dolore et elit. Eu do reprehenderit amet
                    officia magna dolor exercitation adipisicing laboris ea id
                    deserunt. Excepteur amet nisi id dolore dolor veniam
                    occaecat sunt cillum incididunt nulla officia ea cupidatat.
                  </div>
                </Reveal>

                <Reveal>
                  <div className="dividerText1">
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

          <div className="section1">
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
          <div className="section">
            {status2.map((value) => (
              <Status2 {...value} />
            ))}
          </div>
          <div className="section">
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
export default App;
