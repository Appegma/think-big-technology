import "../../App.css";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ZoomableVideo from "../../components/ZoomableVideo";
import logo from "../../assets/logo.png";
import { AiFillCode } from "react-icons/ai";
import {
  FaDatabase,
  FaCloudsmith,
  FaPortrait,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Title from "../../components/Title";
import Heading from "../../components/Heading";
import { aboutDetail, project } from "../../data";
// import Reveal from "../../components/Animation/Reveal";
import thinkBigVideo from "../../assets/video/homeVideo.mp4";
import ClipEffect from "../../components/ClipPathEffect";

const Home = () => {
  const [activeDiv, setActiveDiv] = useState(0);

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
      logo: <FaPortrait />,
      title: "About",
    },
    // {
    //   id: "projects",
    //   logo: <PiProjectorScreenChartBold />,
    //   title: "Projects",
    // },
    {
      id: "case_01",
      logo: <AiFillCode />,
      title: "Case 1",
    },
    {
      id: "case_02",
      logo: <FaDatabase />,
      title: "Case 2",
    },
    {
      id: "case_03",
      logo: <FaCloudsmith />,
      title: "Case 3",
    },
    {
      id: "contact",
      logo: <FaPhoneAlt />,
      title: "Contact",
    },
  ];

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
        <div className={`scroll-div`} style={{ zIndex: 10 }} id="main">
          <Banner image={logo} />
        </div>

        <ZoomableVideo src={thinkBigVideo} />

        <ClipEffect>
          <div className={`scroll-div`} id="about">
            <div className="">
              <Heading text="About" />
              <div className="divider">
                <div className="dividerText">
                  {aboutDetail.map((value, index) => (
                    // <Reveal key={index}>
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      className="dividerText1"
                    >
                      {value.value}
                    </div>
                    // </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ClipEffect>

        <div className="section">
          <Heading text="Case Studies" reverse />

          {project?.length > 0 &&
            project.map((value, index) => (
              <div
                className={`scroll-div section3`}
                key={value.id}
                id={value.id}
              >
                <ProjectCard {...value} number={index + 1} />
              </div>
            ))}
        </div>
        <div className={`scroll-div section`} id="contact">
          <Title
            title="Contact"
            subtitle={
              <>
                <MdOutlineAlternateEmail />{" "}
                <a href={`mailto:${email}`}>{email}</a>
              </>
            }
            paragraph="Hit us up today. We promise our response time is faster than your internet connection."
          />
        </div>
      </Navbar>
    </div>
  );
};
export default Home;
