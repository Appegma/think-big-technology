import { useEffect } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reveal from "../Animation/Reveal";

const Card = ({ title, detail, img, link }) => {
  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div className="cardContainer">
          <div className="cardImage">
            <img src={img} />
          </div>
          <div className="cardText">
            <Reveal>
              <div className="cardHead">
                <h4>{title}</h4>
                <div className="status1Line" />
                <button className="cardBtn">
                  <FontAwesomeIcon icon={faGithub} />
                </button>
                <button className="cardBtn">
                  <FontAwesomeIcon icon={faLinkedin} />
                </button>
              </div>
            </Reveal>

            <Reveal>
              <div className="cardGreenHeading">
                Node - Express - Postgres - Kafka - Redis
              </div>
            </Reveal>
            <Reveal>
              <div className="cardDetail">
                <p>
                  {detail}{" "}
                  <span className="color1">
                    Learn more{" "}
                    <FontAwesomeIcon
                      color="#0FA0FF"
                      fontSize={"12px"}
                      icon={faChevronRight}
                    />
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
