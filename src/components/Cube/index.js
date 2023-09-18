/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./styles.css";

const Cube = ({ items, active }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  useEffect(() => {
    if (activeIndex > active) {
      handlePrev();
    } else if (activeIndex < active) {
      handleNext();
    }
  }, [active]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            className={`cube-face ${activeIndex === index ? "active" : ""}`}
            key={index}
            style={{
              transform: `rotateY(${
                (index - activeIndex) * (360 / items.length)
              }deg) translateZ(35px)`,
            }}
          >
            {item.logo}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cube;
