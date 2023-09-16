import "./styles.css";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "react-awesome-slider/dist/styles.css";
import Background1 from "../../asset/backgroundImage/background1.jpg"
import Background2 from "../../asset/backgroundImage/background2.jpg"
import Background3 from "../../asset/backgroundImage/background3.jpg"

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderAS = () => {


    
  const sliderConfig = {
    play:true,
    cancelOnInteraction:false, // should stop playing on user interaction
    interval:6000,
    bullets: false, // Hide bullet navigation
    organicArrows: true, // Use organic arrows
    infinite: true, // Enable infinite loop
    interval: 5000, // Slide interval in milliseconds
    startupScreen: false, // Hide the startup screen
    animation: "cubeAnimation", // Choose an animation type (e.g., 'cubeAnimation', 'fallAnimation', 'foldOutAnimation', etc.)
  };

  return (
    <AutoplaySlider {...sliderConfig}>
      
      <div className="slider-item">
        <img  
          src={Background1}
          alt="Slide 1"
          width="100%"

        />
      </div>
      <div className="slider-item">
        <img
          src={Background2}
          alt="Slide 2"
          width="100%"

        />
      </div>
      <div className="slider-item">
        <img   
          src={Background3}
          alt="Slide 3"
          width="100%"
        />
      </div>
    </AutoplaySlider>
  );
};

export default SliderAS;
