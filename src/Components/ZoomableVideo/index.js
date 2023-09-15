import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

const ZoomableVideo = ({ src }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(3);

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
        const newScale = 1 + (scrollY - containerTop) * 0.02; // You can adjust the zoom speed here

        // Limit the zoom range to prevent the video from becoming too small or too large
        const minScale = 3;
        const maxScale = 6.5; // Adjust this value as needed
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
    <div className="zoomable-video-container" ref={containerRef}>
      <iframe
        title="Embedded Content"
        src={src}
        frameBorder="0"
        allowFullScreen
        style={videoStyle}
        className="zoomable-video"
      />
    </div>
  );
};

export default ZoomableVideo;
