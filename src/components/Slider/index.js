import "./styles.css";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider({ items }) {
  const sliderConfig = {
    play: true,
    cancelOnInteraction: false, // should stop playing on user interaction
    bullets: false, // Hide bullet navigation
    organicArrows: false, // Use organic arrows
    infinite: true, // Enable infinite loop
    interval: 3000, // Slide interval in milliseconds
    startupScreen: false, // Hide the startup screen
    animation: "fallAnimation", // Choose an animation type (e.g., 'cubeAnimation', 'fallAnimation', 'foldOutAnimation', etc.)
  };

  return (
    <AutoplaySlider {...sliderConfig}>
      {items?.length > 0 &&
        items.map((item, index) => (
          <div className="slider-item" key={`slider-${index}`}>
            <img src={item} alt={`Slide ${index}`} width="100%" />
          </div>
        ))}
    </AutoplaySlider>
  );
}

export default Slider;
