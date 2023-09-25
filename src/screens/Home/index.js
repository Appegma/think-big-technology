import "../../App.css";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ZoomableVideo from "../../components/ZoomableVideo";
import logo from "../../assets/logo.png";
import {
  AiFillFacebook,
  AiOutlineAmazon,
  AiFillLinkedin,
} from "react-icons/ai";

import { FaGoogle, FaAddressBook } from "react-icons/fa";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsGithub, BsTwitter } from "react-icons/bs";
import Title from "../../components/Title";
import Heading from "../../components/Heading";
import { project } from "../../data";
import Reveal from "../../components/Animation/Reveal";
import { GrCircleInformation } from "react-icons/gr";
import thinkBigVideo from "../../assets/video/homeVideo.mp4";

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
      id: "about",
      logo: <GrCircleInformation className="svgColors" />,
      title: "About",
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

  const aboutDetail = [
    {
      value: `Excepteur cillum ut qui anim id. Cillum ex laboris Lorem
    deserunt anim exercitation laboris minim duis velit nulla eu
    aute ex. Id id exercitation exercitation proident dolor.`,
    },
    {
      value: ` Nulla eiusmod aute ea nulla. Eiusmod eiusmod cillum ullamco
      excepteur non. Labore sint est duis do cupidatat ipsum do
      quis eiusmod non anim est. Fugiat ad consequat nostrud est
      officia et nulla consequat esse enim consequat aliquip.
      Veniam Lorem nostrud sunt aliqua.`,
    },
    {
      value: `Aliqua nostrud aute amet sint velit occaecat laborum fugiat
      adipisicing sunt dolore et elit. Eu do reprehenderit amet
      officia magna dolor exercitation adipisicing laboris ea id
      deserunt. Excepteur amet nisi id dolore dolor veniam
      occaecat sunt cillum incididunt nulla officia ea cupidatat.`,
    },
    {
      value: `  Eu exercitation ex ex et. Ea magna ut aute et officia
      excepteur nisi anim excepteur. Adipisicing incididunt
      cupidatat occaecat ex eu veniam velit proident est irure
      voluptate officia minim do.`,
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

  const email = "info@thinkbigtechnology.com";

  return (
    <div className="container1">
      <Navbar
        menuItems={menuItems}
        activeMenu={activeDiv === 0 ? "main" : activeDiv}
        handleActiveMenu={scrollToDiv}
      >
        <div className={`scroll-div`} id="main">
          <Banner image={logo} />
        </div>

        <ZoomableVideo src={thinkBigVideo} />

        <div className={`scroll-div section1 m-top-full`} id="projects">
          <div className="">
            <Heading text="About" />
            <div className="divider">
              <div className="dividerText">
                {aboutDetail.map((value, index) => (
                  <Reveal key={index}>
                    <div
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      className="dividerText1"
                    >
                      {value.value}
                    </div>
                  </Reveal>
                ))}

                <Reveal>
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="mylink"
                  >
                    <span className="boldBlueText font_s">My Link</span>
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

              {/* <div className="dividerStatus">
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
                    <div className="techContainer">
                      {techStack?.length > 0 &&
                        techStack.map((data) => (
                          <Status key={data.id} {...data} />
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
                      <FaHeart color="#0fa0ff !important" />
                      <h1>Love to Work with</h1>
                    </div>
                  </Reveal>

                  <Reveal>
                    <div className="techContainer">
                      {techStack?.length > 0 &&
                        techStack.map((data) => (
                          <Status key={data.id} {...data} />
                        ))}
                    </div>
                  </Reveal>
                </div>
              </div> */}
            </div>
          </div>

          {/* <Heading text="Projects" reverse />
          <div className="projectContainer">
            {projectCard?.length > 0 &&
              projectCard.map((value, index) => (
                <Card key={`portfolio-${index}`} {...value} />
              ))}
          </div> */}
        </div>

        <div className="section8">
          <Heading text="Cases" reverse />
        </div>
        {project?.length > 0 &&
          project.map((value, index) => (
            <div className={`scroll-div section3`} key={value.id} id={value.id}>
              <ProjectCard {...value} number={index + 1} />
            </div>
          ))}

        <div className={`scroll-div section`} id="contact">
          <Title
            title="Contact"
            subtitle={
              <>
                <MdOutlineAlternateEmail />
                <a href={`mailto:${email}`}>{email}</a>
              </>
            }
            paragraph="Shoot me an email if you want to connect! You can also find me on Linkedin or Twitter if that's more your speed."
          />
        </div>
      </Navbar>
    </div>
  );
};
export default Home;
