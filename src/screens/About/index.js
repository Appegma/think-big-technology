import "../../App.css";
import Navbar from "../../components/Navbar";
import Experience from "../../components/Experience";
import Reveal from "../../components/Animation/Reveal";
import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { testimonial, carouselItems, clientExperience } from "../../data";
import Testimonial from "../../components/Testimonial";
import Carousel from "../../components/Carousel";
import Title from "../../components/Title";
import SwiperHorizontal from "../../components/Swiper/SwiperHorizontal";
import { FaPortrait } from "react-icons/fa";

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
      logo: <FaPortrait />,
      title: "About",
    },
  ];

  const aboutDetail = [
    {
      value: `In today's digital era, establishing a robust online presence is paramount for businesses looking to thrive. At Think Big Technology, we recognize that web and mobile applications serve as the digital storefronts of enterprises, acting as the primary interface for customer engagement. Our technical prowess in crafting these applications, meticulously fine-tuned for optimal performance, ensures that your business not only exists in the digital realm but excels in it. These applications, powered by cutting-edge technologies, seamlessly bridge the gap between your brand and your audience, facilitating frictionless transactions, enhancing user experiences, and fostering customer loyalty.`,
    },
    {
      value: ` Efficiency lies at the core of any successful enterprise. This is where Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems come into play. Think Big Technology's mastery in implementing these systems means that your business can streamline operations, consolidate data, and gain insights that drive informed decision-making. Our technically proficient team leverages CRM to optimize customer interactions, harnessing data-driven strategies for personalized engagement. Simultaneously, ERP systems provide the backbone for resource management, ensuring that all facets of your business operate in concert, maximizing productivity, and driving growth.`,
    },
    {
      value: `Artificial Intelligence (AI) and Machine Learning (ML) represent the cutting edge of technological advancement. Think Big Technology integrates these transformative technologies into your operations, propelling your business into a realm where predictive analytics, automation, and data-driven decision-making reign supreme. Through AI and ML, we empower your enterprise to analyze vast datasets, uncover hidden patterns, and forecast trends with unparalleled accuracy. This equips your business with the ability to proactively respond to market shifts, optimize processes, and unlock new revenue streams, setting you apart as a leader in your industry.`,
    },
    {
      value: `  In an era where technology is the catalyst for business evolution, Think Big Technology stands as your strategic partner, arming you with the tools necessary to navigate the complex digital landscape. With our technical expertise in web and mobile applications, CRM, ERP, and the transformative capabilities of AI and ML, we propel your business toward unprecedented growth, efficiency, and innovation. Together, we engineer not just solutions but technological legacies that define excellence in the digital age.`,
    },
  ];

  const [activeDiv, setActiveDiv] = useState(0);
  const [activeEmp, setActiveEmp] = useState("emp_01");

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

  const handleActive = () => {
    const divElements = document.querySelectorAll(".active-emp");
    let newIndex = 0;

    for (let i = 0; i < divElements.length; i++) {
      const div = divElements[i];
      const rect = div.getBoundingClientRect();

      if (rect.top <= window.innerHeight / 1.75) {
        newIndex = div.id;
      }
    }
    setActiveEmp(newIndex);
  };

  useEffect(() => window.scrollTo(0, 0), []);
  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleActive);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleActive);
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
        <Navbar
          menuItems={menuItems}
          activeMenu={activeDiv === 0 ? "about" : activeDiv}
          handleActiveMenu={scrollToDiv}
        >
          <div className={`section3 m-top-full`}>
            <Title
              title="About Us"
              paragraph={` We're the tech wizards who dwell behind the digital curtains, orchestrating a symphony of ones and zeros to the rhythm of innovation. Our mission? To transform your tech dreams into dazzling realities, one line of code at a time. So, allow us to introduce ourselves, the digital architects at Think Big Technology, where creativity and code converge, sparking digital magic that lights up the digital world.`}
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
              </div>
            </div>
          </div>

          <div className={`section3`}>
            <Heading text="Our Team" />
            {clientExperience.map((value) => (
              <div
                key={`experience-${value.id}`}
                className={`active-emp`}
                id={value.id}
              >
                <Experience {...value} active={activeEmp === value.id} />
              </div>
            ))}
          </div>

          <SwiperHorizontal
            items={testimonial}
            component={Testimonial}
            title="Testimonials"
            wheel={false}
          />

          <div className={`section2`}>
            <Heading text="Satisfied Clients" />
            <Carousel items={carouselItems} />
          </div>
        </Navbar>
      </div>
    </>
  );
};
export default About;
