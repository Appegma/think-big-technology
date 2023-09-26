import React, { useEffect, useState } from "react";
import "./styles.css";

function Matrix() {
  const [letters, setLetters] = useState([]);

  // Create initial letters
  useEffect(() => {
    createLetters();
  }, []);

  // Start the animation loop
  useEffect(() => {
    const animationLoop = () => {
      // Add new letters
      //   setTimeout(() => {
      //     createLetters();
      //   }, 10000);

      // Remove letters that have fallen off the screen
      setTimeout(() => {
        setLetters((prevLetters) =>
          prevLetters.filter((letter) => letter.top < window.innerHeight),
        );
      }, 3000);

      // Repeat the animation loop
      setTimeout(animationLoop, 1000);
    };

    animationLoop();
  }, []);

  const createLetters = () => {
    const newLetters = [];
    const characters = "<Think Big />";
    for (let i = 0; i < 100; i++) {
      const randomChar = characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
      newLetters.push({
        left: Math.random() * window.innerWidth,
        top: -20,
        character: randomChar,
        animationDuration: `${5 + Math.random() * 5}s`,
      });
    }
    setLetters(newLetters);
  };

  return (
    <div className="Rain">
      {letters.map((letter, index) => (
        <div
          key={index}
          className="letter"
          style={{
            left: letter.left,
            top: letter.top,
            animationDuration: letter.animationDuration,
          }}
        >
          {letter.character}
        </div>
      ))}
    </div>
  );
}
export default Matrix;
