import React from "react";
import Reveal from "../Animation/Reveal";
import qoutes from "../../assets/qoutations.png";
import "./styles.css";

function Testimonial({ name, detail, logo, personImage }) {
  return (
    <div className="testimonialCard">
      <Reveal>
        <div className="testimonialContent">
          <div className="testimoniallogo">
            <img src={logo || qoutes} alt="client company logo" />
          </div>
          <p>{detail}</p>
          <div className="testimonialPersonImg">
            <img src={personImage} alt="client face" />
          </div>
          <div className="testimonialText">
            <h3 className="boldBlueText">{name}</h3>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default Testimonial;
