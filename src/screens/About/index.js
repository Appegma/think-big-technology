import "../../App.css";
import Status from "../../components/Status";
import { SideBar } from "../../components/Navbar";

import Reveal from "../../components/Animation/Reveal";
import { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaBuilding, FaHeart } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import Heading from "../../components/Heading";
import { techStack, testimonial } from "../../data";
import Testimonial from "../../components/Testimonial";

const About = () => {
  const menuItems = [
    {
      id: "about",
      logo: <GrCircleInformation className="svgColors" />,
      title: "About",
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
      <div className={`scroll-div container1`} id="about">
        <SideBar
          menuItems={menuItems}
          activeMenu={activeDiv}
          handleActiveMenu={scrollToDiv}
        >
          <div className="section">
            <Heading text="About" />
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
                    <span className="boldBlueText font_s">My Link </span>
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
              </div>
            </div>
          </div>

          <div className="section">
            <Heading text="Testimonial" reverse />
          </div>

          <div className="testimonialContainer">
            {testimonial?.length > 0 &&
              testimonial.map((value, index) => (
                <Testimonial key={`testimonial-${index}`} {...value} />
              ))}
          </div>
        </SideBar>
      </div>
    </>
  );
};
export default About;
