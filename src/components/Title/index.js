import React from "react";
import Reveal from "../Animation/Reveal";
import "./styles.css";
import BlueFullStop from "../BlueFullStop";

function Title({ title, subtitle, paragraph }) {
  return (
    <div className="titleContainer">
      <div className="titleSection">
        <Reveal>
          <div className="titleText">
            <h1>
              {title || "Think Big Technology"}
              <BlueFullStop />
            </h1>
          </div>
        </Reveal>
      </div>
      {paragraph && (
        <Reveal>
          <div className="titleText">
            <p>{paragraph}</p>
          </div>
        </Reveal>
      )}
      {subtitle && (
        <div className="titleSection">
          <Reveal>
            <div className="titleText">
              <h3>{subtitle}</h3>
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}

export default Title;
