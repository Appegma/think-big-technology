import React, { useEffect, useState } from "react";
import "./styles.css";
import EnergyBalls from "../EnergyBalls";

function Loader({ number = 100, duration = 10 }) {
  // number displayed by component
  const [count, setCount] = useState("0");

  useEffect(() => {
    let start = 0;
    const end = parseInt(number?.toString().substring(0, 3));
    if (start === end) return;

    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 2;
      setCount(String(start) + number?.toString().substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
    // dependency array
  }, [number, duration]);

  return (
    <div className="loader-container">
      <EnergyBalls />
      <h1>{count}%</h1>
    </div>
  );
}

export default Loader;
