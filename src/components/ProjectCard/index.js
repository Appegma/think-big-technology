import React from "react";
import "./styles.css";
import Reveal from "../Animation/Reveal";

function ProjectCard({
  number,
  title,
  detail,
  image,
  percentage,
  percentageDescription,
}) {
  return (
    <div className="projectContainerLive">
      <Reveal>
        <div
          className="projectheading1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>{number ? `Case ${number}` : "Cases"}</h2>
        </div>
      </Reveal>
      <div
        className="divider1"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
      />
      <div className="projectHeadingArea">
        <Reveal>
          <div
            className="projectheading1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h1>{title || "McDonald’s"}</h1>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="projectHeadingdeatial"
            data-aos="fade-down"
            data-aos-duration="1400"
          >
            <p>
              {detail ||
                `Reinventing McDonald’s ordering experience into a multi-billion dollar sales channel.`}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="projectHeadingdeatial"
            data-aos="fade-down"
            data-aos-duration="1800"
          >
            <div className="projectHeadingDivider">
              <div className="projectheading2">
                <h1>{percentage || "40%"}</h1>
              </div>
              <div className=" projectPercendetail">
                <p>
                  {percentageDescription ||
                    "Of sales attributed to digital alone, in 2023 (Q1)."}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div
        className="projectImage"
        data-aos="fade-left"
        data-aos-easing="ease-in"
        data-aos-offset="500"
        data-aos-anchor="#example-anchor"
      >
        <img
          alt={title || "McDonald’s"}
          src={
            image ||
            "https://24-7fireprotection.com/wp-content/uploads/banner-img-15.webp"
          }
        />
      </div>
    </div>
  );
}

export default ProjectCard;
