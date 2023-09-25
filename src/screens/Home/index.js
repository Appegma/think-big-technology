import "../../App.css";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ZoomableVideo from "../../components/ZoomableVideo";
import logo from "../../assets/logo.png";
import {
  // AiFillFacebook,
  // AiOutlineAmazon,
  // AiFillLinkedin,
  AiFillCode,
} from "react-icons/ai";
import {
  // FaGoogle,
  // FaAddressBook,
  FaDatabase,
  FaCloudsmith,
  FaPortrait,
  FaPhoneAlt,
} from "react-icons/fa";
// import { PiProjectorScreenChartBold } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";
// import { BsGithub, BsTwitter } from "react-icons/bs";
import Title from "../../components/Title";
import Heading from "../../components/Heading";
import { project } from "../../data";
import Reveal from "../../components/Animation/Reveal";
// import { GrCircleInformation } from "react-icons/gr";
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

  const aboutDetail = [
    {
      value: `Welcome to the epicenter of technological innovation, just beyond the bustling landscape of New York City. Founded in 2021, our journey commenced with a vision - to be at the forefront of pioneering technological solutions that reshape industries and empower businesses to thrive in a rapidly evolving digital landscape.`,
    },
    {
      value: `At the heart of our operation resides a team of 15 in-house developers, each a maestro in their respective domains, wielding the power of code to craft solutions that transcend the ordinary. Our assembly of brilliant minds extends beyond developers to encompass a cadre of UI/UX designers, the architects of seamless and intuitive user experiences that define excellence in the digital realm. But we don't stop there. Beyond the realms of software and design, we boast a battalion of network and IT engineers who orchestrate the complex symphony of infrastructure, ensuring uninterrupted connectivity and security in a world where data is paramount.`,
    },
    {
      value: `In a world where information flows ceaselessly, our social media marketing team serves as the gatekeepers of visibility and engagement, strategically deploying campaigns that captivate, engage, and convert. In every line of code, every pixel perfected, every network secured, and every campaign launched, we engineer not just products and services but also futures. Futures where innovation is a given, transformation is the norm, and excellence is the benchmark.`,
    },
    {
      value: `Join us as we navigate the frontiers of technology, not just as observers but as pioneers. Welcome to a world where boundaries are not constraints but canvases, waiting to be filled with the brushstrokes of innovation. Explore our technological sanctuary, where ideas evolve into solutions, and aspirations ascend into achievements. This is more than technology; this is the future, and we invite you to be a part of it.`,
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
        <div className={`scroll-div`} style={{ zIndex: 10 }} id="main">
          <Banner image={logo} />
        </div>

        <ZoomableVideo src={thinkBigVideo} />

        <div className={`scroll-div section1 m-top-full`} id="about">
          <div className="section">
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

                {/* <Reveal>
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="mylink"
                  >
                   <span className="boldBlueText font_s">Our Links </span>
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
                </Reveal> */}
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

        <div className="section">
          <Heading text="Case Studies" reverse />
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
