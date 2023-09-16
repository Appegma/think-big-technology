import React from "react";
import Reveal from "../Animation/Reveal";
import Status from "../Status";
import "./styles.css";

function Experience({ title, subtitle, location, activeYear, detail, techs }) {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div className="experienceContainer">
        <div className="experienceHeading">
          <Reveal>
            <div className="experienceSection">
              <h4>{title}</h4>
            </div>
          </Reveal>
          <Reveal>
            <div className="experienceSection">
              <p>{activeYear}</p>
            </div>
          </Reveal>
        </div>
        <div className="experienceHeading">
          <Reveal>
            <div className="experienceSection">
              <h5>{subtitle}</h5>
            </div>
          </Reveal>
          <Reveal>
            <div className="experienceSection">
              <p>{location}</p>
            </div>
          </Reveal>
        </div>
        <div className="experienceDetailSection">
          <div className="experienceDetails">
            <Reveal>
              <p>{detail}</p>
            </Reveal>
          </div>
        </div>
        <div className="experienceDetailSection">
          <marquee behavior="alternate">
            <div className="experienceStatus">
              {techs?.length > 0 &&
                techs.map((data, index) => {
                  return (
                    <span
                      className="statusAnimation"
                      key={data.id}
                      style={{ animationDelay: `${0.05 * index}s` }}
                    >
                      <Status logoOnly {...data} />
                    </span>
                  );
                })}
            </div>
          </marquee>
          <div className="experienceDivider"></div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
