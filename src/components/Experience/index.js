/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import Reveal from "../Animation/Reveal";
import Status from "../Status";
import "./styles.css";

function Experience({
  image,
  title,
  subtitle,
  location,
  activeYear,
  detail,
  techs,
  active,
}) {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div className="experienceContainer">
        <div className={`experienceInformation ${active && "activeEmp"}`}>
          <div className="avatar">
            <Reveal>
              <div className="experienceSection">
                <img alt="Employee Avatar" src={image} />
              </div>
            </Reveal>
          </div>
          <div className="detail">
            <div className="experienceHeading">
              {title && (
                <Reveal>
                  <div className="experienceSection">
                    <h4>{title}</h4>
                  </div>
                </Reveal>
              )}
              {activeYear && (
                <Reveal>
                  <div className="experienceSection">
                    <p>{activeYear}</p>
                  </div>
                </Reveal>
              )}
            </div>
            <div className="experienceHeading">
              {subtitle && (
                <Reveal>
                  <div className="experienceSection">
                    <h5>{subtitle}</h5>
                  </div>
                </Reveal>
              )}
              {location && (
                <Reveal>
                  <div className="experienceSection">
                    <p>{location}</p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
        <div className="experienceDetailSection">
          <Reveal>
            <div className="experienceDetails">
              <p>{detail}</p>
            </div>
          </Reveal>
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
