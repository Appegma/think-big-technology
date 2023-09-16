import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import Reveal from "../Animation/Reveal";
import "./styles.css";

const Card = ({ title, detail, img, link }) => {
  return (
    <>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <div className="cardContainer">
          <div className="cardImage">
            <img src={img} alt="Project Portfolio" />
          </div>
          <div className="cardText">
            <Reveal>
              <div className="cardHead">
                <h4>{title}</h4>
                <div className="horizontalLine" />
                <button className="cardBtn">
                  <BsGithub />
                </button>
                <button className="cardBtn">
                  <BsLinkedin />
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
                  <a
                    className="boldBlueText"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn more
                    <FaChevronRight color="#0FA0FF" fontSize={"12px"} />
                  </a>
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
