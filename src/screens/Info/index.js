import "../../App.css";
import { SideBar } from "../../components/Navbar";
import { FaAddressBook } from "react-icons/fa";
import { useEffect, useState } from "react";
import ContactForm from "../../components/ContactForm";
import { GrCircleInformation, GrServices } from "react-icons/gr";
import { PiProjectorScreenChartBold } from "react-icons/pi";

function Info() {
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
    <div className={`scroll-div container1`} id="info">
      <SideBar
        menuItems={menuItems}
        activeMenu={activeDiv}
        handleActiveMenu={scrollToDiv}
      >
        <div className="section4">
          <ContactForm />
        </div>
      </SideBar>
    </div>
  );
}
export default Info;
