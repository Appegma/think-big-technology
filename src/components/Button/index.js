import React from "react";
import "./styles.css";

function Button({ value, onClick }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };
  return (
    <button className="buttonPrimary" onClick={handleClick}>
      {value}
    </button>
  );
}

export { Button };
