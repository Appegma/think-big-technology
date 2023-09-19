import React, { useRef, useState } from "react";
import "./styles.css"; // Import your CSS file for styling
import Title from "../Title";

function ScrollSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const itemWidth = sliderRef.current.clientWidth;
      const itemHeight = sliderRef.current.clientHeight;
      console.log(itemHeight)

      // Calculate the current index based on scroll position
      const newIndex = Math.round(scrollPosition / itemWidth);
      console.log(newIndex)

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  // const handleScroll = () => {
  //   if (sliderRef.current) {
  //     const scrollPosition = sliderRef.current.scrollTop;
  //     const itemHeight = sliderRef.current.clientHeight;

  //     // Calculate the current index based on scroll position
  //     const newIndex = Math.round(scrollPosition / itemHeight);

  //     if (newIndex !== currentIndex) {
  //       setCurrentIndex(newIndex);
  //     }
  //   }
  // };

  return (
    <div className="carousel-slider" onScroll={handleScroll} ref={sliderRef}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? "active" : ""}`}
        >
          <img src={item.image} alt={`Item ${index + 1}`} />
          {index === currentIndex && (
            <div className={`absoluteContainer`}>
              <Title title={item.title} paragraph={item.description} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default ScrollSlider;
