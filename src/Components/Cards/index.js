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

const Card1 = () => {
  return (
    <>
      <div className="card1Container">
        <div className="Card1Content">
          <img src="https://w7.pngwing.com/pngs/136/474/png-transparent-black-close-quotation-mark-art-quotation-mark-quotation-monochrome-silhouette-internet-thumbnail.png" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <h3>Mona lisa</h3>
        </div>
      </div>
    </>
  );
};

export { Card, Card1 };
