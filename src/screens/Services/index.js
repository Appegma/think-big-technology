import "../../App.css";
import { Status1, Status2 } from "../../components/Status";
import { SideBar } from "../../components/Navbar";
import Reveal from "../../components/Animation/Reveal";
import { useEffect, useState } from "react";
import AOS from "aos";
import Carousel from "../../components/Carousel";
import { GrServices } from "react-icons/gr";
import SliderAS from "../../components/AwsomeSlider";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuItems = [
    // {
    //   id: "contact",
    //   logo: (
    //     <p>
    //       T<span className="color1">.</span>
    //     </p>
    //   ),
    //   title:"Services"
    // },
    {
      id: "contact",
      logo: <GrServices className="svgColors" />,
      title: "Services",
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
          {/* <StarsBackground title="Services" /> */}

          <div className={`scroll-div relative section2`} id="about">
            <SliderAS />
          </div>
          <div className="textAbsolute">
            <div className="footerHeading1 ">
              <Reveal>
                <div className="footerHeading">
                  <h1>
                    Services<span className="color1">.</span>
                  </h1>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className="footerHeading">
                <p>
                  Consequat irure aliquip esse aute minim sit ipsum sint
                  deserunt reprehenderit officia dolor aute. Occaecat deserunt
                  minim aute duis proident dolor officia in.
                
                </p>
              </div>
            </Reveal>
          </div>

          {/* <div className="sectionA">
             
            </div> */}

          <div className={`scroll-div section2`} id="contact">
            <Status1
              value="Partners"
              statusDotsG="color1"
              status1Main="right status1Main"
            />
            <Carousel />
          </div>

          <div className={`serviceProvider`} id="contact">
            <Status1
              value="Satisfied Clients"
              statusDotsG="color1"
              status1Main="left status1Main"
            />
            {status2.map((value) => (
              <Status2 {...value} />
            ))}
          </div>
        </SideBar>
      </div>
    </>
  );
};
export default Services;
