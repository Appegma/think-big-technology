import "../../App.css";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { GrServices } from "react-icons/gr";
// import Slider from "../../components/Slider";
import Heading from "../../components/Heading";
import Title from "../../components/Title";
import { projectSliderItems, techStackLogo } from "../../data";
import Reveal from "../../components/Animation/Reveal";
import SwiperVertical from "../../components/Swiper/SwiperVertical";
// import ProjectPanel from "../../components/ProjectPanel";
// import { PiProjectorScreenChartBold } from "react-icons/pi";
// import { FaAddressBook } from "react-icons/fa";

const ImageCarousel = ({ image }) => {
  return (
    <div className="carouselImage">
      <img src={image} alt="carousel" />
    </div>
  );
};

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
      id: "services",
      logo: <GrServices className="svgColors" />,
      title: "Services",
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

  return (
    <div className={`scroll-div container1`} id="services">
      <Navbar
        menuItems={menuItems}
        activeMenu={activeDiv === 0 ? "services" : activeDiv}
        handleActiveMenu={scrollToDiv}
      >
        <div className={`section3 m-top-full`}>
          <Title
            title="Services"
            paragraph={`Think of our services as the secret sauce to your tech success - you won't know how you ever lived without them. We're the culinary masterminds behind your digital feast, adding just the right blend of innovation, expertise, and reliability to every tech dish we serve. So, prepare to savor success with a side of innovation, a dash of excellence, and a pinch of 'wow,' all served up by the Think Big Technology team.`}
          />
        </div>
        {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
        

        {/* <div className={`relative section2`}>
          <Slider items={sliderItems} />
        </div> */}

        <div className={`section3`}>
          <Heading text="Tech We Love" />
          <div className="techStack">
            {techStackLogo.map((value, index) => (
              <Reveal>
                <div className="techStackItem " key={`techStack-${index}`}>
                  <div className="tectCardImg">
                    <img
                      alt="logo"
                      style={{ marginTop: "10px", marginBottom: "20px" }}
                      src={value.image}
                      width={50}
                    />
                  </div>
                  <p>{value.title}</p>
                  <div className="myDes">{value.description}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Navbar>
      <SwiperVertical items={projectSliderItems} component={ImageCarousel} />


      {/* <div className={`section2`}>
          <Heading text="Satisfied Clients" />
          <Carousel items={carouselItems} />
        </div> */}

      {/* <div className={`section3 serviceProvider`}>
          <Heading text="Clients and Experience" reverse />
          {clientExperience.map((value, index) => (
            <Experience {...value} key={`experience-${index}`} />
          ))}
        </div>  
           <div className="absoluteContainer">
          <Title
            title="Services"
            paragraph={`Consequat irure aliquip esse aute minim sit ipsum sint
                deserunt reprehenderit officia dolor aute. Occaecat deserunt
                minim aute duis proident dolor officia in. Culpa deserunt
                tempor nulla qui qui eu est anim ullamco elit.`}
          />
        </div>
        
        */}
    </div>
  );
};
export default Services;
