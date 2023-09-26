import React from "react";
import "./styles.css";

function EnergyBalls() {
  return (
    <>
      <div className="energy">
       <span style={{backgroundColor:"#fbab04",width:"318px", animationDirection:"2.5s"}}></span>
       <span style={{backgroundColor:"#03a1d9",width:"313px", animationDirection:"5s"}}></span>
       <span style={{backgroundColor:"#f7036d",width:"315px", animationDirection:"7.5s"}}></span>
       <span style={{backgroundColor:"#93ff16",width:"320px", animationDirection:"10s"}}></span>
      </div>
    </>
  );
}

export default EnergyBalls;
