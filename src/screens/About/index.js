import "../../App.css";
import Banner from "../../components/Banner";
import { Status, Status1, Status2 } from "../../components/Status";
import { SideBar } from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAddressBook,
//   faBarsProgress,
//   faBuilding,
//   faCircleInfo,
//   faHeart,
//   faListCheck,
//   faMailForward,
// } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Reveal from "../../components/Animation/Reveal";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Form } from "react-router-dom";
import ContactForm from "../../components/ContactForm";
import Iframe from "../../components/Iframe";
import { Card1 } from "../../components/Cards";
import CardQuotationImage from "../../asset/quataions.png";

import { AiFillLinkedin } from "react-icons/ai";
import { FaBuilding, FaHeart } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { RiFeedbackFill } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";
import { GrCircleInformation } from "react-icons/gr";
import{BiLogoAngular, BiLogoCss3, BiLogoGithub, BiLogoHtml5, BiLogoJavascript ,BiLogoNodejs,BiLogoReact, BiLogoRedux, BiLogoTypescript, BiLogoVuejs} from "react-icons/bi"

import AWSSilder from "../../components/AwsomeSlider";
import Slider from "../../components/AwsomeSlider";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuItems = [
    // {
    //   id: "about",
    //   logo: (
    //     <p>
    //       T<span className="color1">.</span>
    //     </p>
    //   ),
    //   title: "About",
    // },
    {
      id: "about",
      logo: <GrCircleInformation className="svgColors" />,
      title: "About",
    },
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
    // {
    //   id: "contact",
    //   logo: <FontAwesomeIcon icon={faAddressBook} />,
    //   title: "Contact",
    // },
    // {
    //   id: "testimonial",
    //   logo: <RiFeedbackFill />,
    //   title: "Testimonial",
    // },
  ];

  const status = [
    <BiLogoJavascript fontSize={30}/>,
    <BiLogoReact   fontSize={30}/>,
    <BiLogoHtml5 fontSize={30}/>,
    <BiLogoCss3 fontSize={30}/>,
    <BiLogoAngular fontSize={30}/>,
    <BiLogoVuejs fontSize={30}/>,
    <BiLogoTypescript fontSize={30}/>,
    <BiLogoNodejs fontSize={30}/>,
    <BiLogoGithub fontSize={30}/>,
    <BiLogoRedux fontSize={30}/>,
  ];

  const card1 = [
    {
      name: "mona lisa",
      logo: CardQuotationImage,
      personImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    },
    {
      name: "mona lisa",
      logo: CardQuotationImage,
      personImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    },
    {
      name: "mona lisa",
      logo: CardQuotationImage,
      personImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    },
    {
      name: "mona lisa",
      logo: CardQuotationImage,
      personImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      detail:
        "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    },
    {
      name: "mona lisa",
      logo: CardQuotationImage,
      personImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="mylink"
                  >
                    <span className="color1 font_s">My Link </span>
                    <button className="SideBarBtn">
                      <BsGithub />
                    </button>
                    <button className="SideBarBtn">
                      <AiFillLinkedin />
                    </button>
                    <button className="SideBarBtn">
                      <BsTwitter />
                    </button>
                  </div>
                </Reveal>
              </div>

              <div className="dividerStatus">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="dividerStatusContaioner"
                >
                  <Reveal>
                    <div className="dividerHeadingMain">
                      <FaBuilding />
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

                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="dividerStatusContaioner"
                >
                  <Reveal>
                    <div className="dividerHeadingMain">
                      <FaHeart />
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

          <div className={`scroll-div section`} id="about">
            <Status1
              value="Testimonial"
              statusDotsG="color1"
              status1Main="status1Main"
            />
          </div>

          <div className="testContainer" id="about">
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
