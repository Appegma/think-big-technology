import "../../App.css";
import { SideBar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { GrCircleInformation, GrServices } from "react-icons/gr";
import Slider from "../../components/Slider";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import { sliderItems, techStackLogo } from "../../data";
import Reveal from "../../components/Animation/Reveal";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa";

const Services = () => {
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
      id: "services",
      logo: <GrServices className="svgColors" />,
      title: "Services",
    },
    {
      id: "projects",
      logo: <PiProjectorScreenChartBold />,
      title: "Projects",
    },
    {
      id: "info",
      logo: <FaAddressBook />,
      title: "Contact",
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
    <div className={`scroll-div container1`} id="services">
      <SideBar
        menuItems={menuItems}
        activeMenu={activeDiv === 0 ? "services" : activeDiv}
        handleActiveMenu={scrollToDiv}
      >
        <div className={`section3 m-top-full`}>
          <Title
            title="Services"
            paragraph={`Consequat irure aliquip esse aute minim sit ipsum sint
                deserunt reprehenderit officia dolor aute. Occaecat deserunt
                minim aute duis proident dolor officia in. Culpa deserunt
                tempor nulla qui qui eu est anim ullamco elit.`}
          />
        </div>
        <div className={`relative section2`}>
          <Slider items={sliderItems} />
        </div>

        {/* <div className="absoluteContainer">
          <Title
            title="Services"
            paragraph={`Consequat irure aliquip esse aute minim sit ipsum sint
                deserunt reprehenderit officia dolor aute. Occaecat deserunt
                minim aute duis proident dolor officia in. Culpa deserunt
                tempor nulla qui qui eu est anim ullamco elit.`}
          />
        </div> */}

        <div className={`section3`}>
          <Heading text="Tech Stack" />
          <div className="techStack">
            {techStackLogo.map((value, index) => (
              <Reveal>
                <div className="techStackItem " key={`techStack-${index}`}>
                  {/* <span>{value.logo}</span> */}
                  <div className="tectCardImg">
                    <img
                      alt="logo"
                      style={{ marginTop: "10px", marginBottom: "20px" }}
                      src={value.image}
                      width={50}
                    />
                  </div>
                  <p>{value.title}</p>
                  <div className="myDes">this is the description</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* <div className={`section2`}>
          <Heading text="Satisfied Clients" />
          <Carousel items={carouselItems} />
        </div> */}

        {/* <div className={`section3 serviceProvider`}>
          <Heading text="Clients and Experience" reverse />
          {clientExperience.map((value, index) => (
            <Experience {...value} key={`experience-${index}`} />
          ))}
        </div> */}
      </SideBar>
    </div>
  );
};
export default Services;
