import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

const ZoomoutVideo = ({ src }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollY = window.scrollY;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.clientHeight;

      if (
        scrollY >= containerTop &&
        scrollY <= containerTop + containerHeight
      ) {
        const newScale = 1 - (scrollY - containerTop) * 0.02; // Reverse the calculation to zoom in

        // Limit the zoom range to prevent the video from becoming too small or too large
        const minScale = 0.5; // Adjust this value as needed
        const maxScale = 1.5; // Adjust this value as needed
        const clampedScale = Math.min(maxScale, Math.max(minScale, newScale));

        setScale(clampedScale);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const videoStyle = {
    transform: `scale(${scale})`,
    transformOrigin: "center center",
    transition: "transform 0.4s ease-in", // You can adjust the transition duration here
  };

  return (
    <div className="zoomout-video-container" ref={containerRef}>
      <video
        id="video"
        className="video-graphics"
        style={videoStyle}
        autoPlay
        muted
        loop
      >
        <source src={src} className="zoomable-video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <iframe
        title="Embedded Content"
        src={thinkBigVideo}
        allowFullScreen
        style={videoStyle}
        className="zoomable-video"
      /> */}
    </div>
  );
};

export default ZoomoutVideo;
