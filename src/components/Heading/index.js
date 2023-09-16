import React from "react";
import "./styles.css";
import BlueFullStop from "../BlueFullStop";
import Reveal from "../Animation/Reveal";

function Heading({ text, reverse }) {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      <div className={`${reverse && "reverse"} headingContainer`}>
        <Reveal>
          <div className="headingText">
            <h3>
              {text}
              <BlueFullStop />
            </h3>
          </div>
        </Reveal>
        <hr className="horizontalLine" />
      </div>
    </div>
  );
}

export default Heading;
