import React from "react";
import Stars from "./Stars";
import Overlay from "./Overlay";

function StarsBackground({ title }) {
  return (
    <>
      <div className="StarsContainerRoot">
        <div className="StarsContainer">
          <Stars /> <Overlay title={title} />
        </div>
      </div>
    </>
  );
}

export default StarsBackground;
