import React from "react";
import "./styles.css";
function Loader() {
  return (
    <>
      <div className="conaters">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <h2>Loading...</h2>
        </div>
      </div>
    </>
  );
}

export default Loader;
