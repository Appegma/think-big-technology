import React from "react";
import "./styles.css";

function Carousel({ items, element }) {
  return (
    <div className="carouselContainer">
      <div>
        {items?.length > 0 &&
          items.map((item, index) => {
            return (
              <img
                key={`clientLogo-${index}`}
                alt={item.alt || "carousel image"}
                src={item.image}
              />
            );
          })}
      </div>
      <div>
        {items?.length > 0 &&
          items.map((item, index) => {
            return (
              <img
                key={`clientLogo-${index}`}
                alt={item.alt || "carousel image"}
                src={item.image}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Carousel;
