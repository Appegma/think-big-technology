import "../../App.css";
import { SideBar } from "../../components/Navbar";
import Experience from "../../components/Experience";
import Reveal from "../../components/Animation/Reveal";
import { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import Heading from "../../components/Heading";
import { testimonial, carouselItems, clientExperience } from "../../data";
import Testimonial from "../../components/Testimonial";
import Carousel from "../../components/Carousel";
import Title from "../../components/Title";
import SwiperHorizontal from "../../components/Swiper/SwiperHorizontal";

const About = () => {
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
          activeMenu={activeDiv === 0 ? "about" : activeDiv}
          handleActiveMenu={scrollToDiv}
        >
          <div className={`section3 m-top-full`}>
            <Title
              title="About Us"
              paragraph={`Consequat irure aliquip esse aute minim sit ipsum sint
                deserunt reprehenderit officia dolor aute. Occaecat deserunt
                minim aute duis proident dolor officia in. Culpa deserunt
                tempor nulla qui qui eu est anim ullamco elit.`}
            />
          </div>
          <div className="section">
            <Heading text="Who we are?" />
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
            </div>
          </div>

          {/* <div className="section">
            <Heading text="Testimonial" reverse />
          </div>

          <div className="testimonialContainer">
            {testimonial?.length > 0 &&
              testimonial.map((value, index) => (
                <Testimonial key={`testimonial-${index}`} {...value} />
              ))}
          </div> */}
          <SwiperHorizontal
            items={testimonial}
            component={Testimonial}
            title="Testimonial"
            wheel={false}
          />

          <div className={`section3`}>
            <Heading text="Our Team" />
            {clientExperience.map((value, index) => (
              <Experience {...value} key={`experience-${index}`} />
            ))}
          </div>
          <div className={`section2`}>
            <Heading text="Satisfied Clients" />
            <Carousel items={carouselItems} />
          </div>
        </SideBar>
      </div>
    </>
  );
};
export default About;
