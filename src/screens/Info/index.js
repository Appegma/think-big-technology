import "../../App.css";
import { SideBar } from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import ContactForm from "../../components/ContactForm";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuItems = [
    {
      id: "main",
      logo: (
        <p>
          T<span className="color1">.</span>
        </p>
      ),
      title: "Home",
    },

    {
      id: "contact",
      logo: <FontAwesomeIcon icon={faAddressBook} />,
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
    <>
      <div className="container1">
        <SideBar
          menuItems={menuItems}
          activeMenu={activeDiv}
          handleActiveMenu={scrollToDiv}
        >
          <div className={`scroll-div section5`} id="about">
            <ContactForm />
          </div>
        </SideBar>
      </div>
    </>
  );
};
export default Services;
