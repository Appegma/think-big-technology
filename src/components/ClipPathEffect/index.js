import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

function ClipEffect({ children }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    let scrollY = window.scrollY; //  you will give the number for your webside position here i will give 47

    const newScale = scrollY / 1.5; // You can adjust the zoom speed here

    // Limit the zoom range to prevent the video from becoming too small or too large
    const minScale = 0.2;
    const maxScale = 2000;

    const clampedScale = Math.min(maxScale, Math.max(minScale, newScale));
    // const clampedScale = Math.min(1000, Math.max(0.2, scrollY / 1.5));
    setScale(clampedScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const OverlayClip = {
    clipPath: `circle(${scale}px at center center)`,
  };

  return (
    <div className="transitionContainer" ref={containerRef}>
      <div className="containerFixed">
        <div className="text-center">{children}</div>
      </div>
      <div className="overlay" style={OverlayClip}>
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
}

export default ClipEffect;
