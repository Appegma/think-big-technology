import React from "react";
import "./styles.css";

function Team({ image, name }) {
  return (
    <div className="teamCard">
      <img alt={name || "team"} src={image} />
    </div>
  );
}

export default Team;
