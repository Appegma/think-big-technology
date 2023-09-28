// import "./styles.css";

// import React, { useEffect } from "react";

// function ClipEffect() {
//   let section = document.getElementById("a");
//   const handleScrolla = () => {
//     let value = window.scrollY / 2;
//     console.log("scrollY=====>", value);
//     section.style.clipPath = `circle(${value}px at center center)`;
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleScrolla);
//     return () => {
//       window.removeEventListener("scroll", handleScrolla);
//     };
//   }, []);

//   return (
//     <>
//       <h3>scroll down</h3>
//       <section id="a">
//         <h2 className="innerText">Scroll to see magic 4</h2>
//       </section>
//       <div className="containerScroll">
//         <h2>also Watch part 1 2 3 link in video description</h2>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//           <br />
//           <br />
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//           <br />
//           <br />
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>
//       </div>
//     </>
//   );
// }

// export default ClipEffect;

import "./styles.css";
import { BiPlusMedical, BiWinkSmile } from "react-icons/bi";
import React, { useEffect, useState } from "react";

function ClipEffect() {
  const [scale, setScale] = useState(0);

  const handleScroll = () => {
    let overlay = document.getElementById("overlay");
    let scrollY = window.scrollY / 47;
    let rect = overlay.getBoundingClientRect();
    let scrollScale = scrollY - 40;

    // if (scrollScale < scale ) {
    // }
    
    console.log(scrollY - 40);
    const clampedScale = Math.min(7, Math.max(0.2, scrollScale));
    // console.log(clampedScale)
    // if (rect.bottom <= window.scrollY / 2 && rect.top <= window.scrollY / 2) {
      setScale(clampedScale);
      // console.log(scrollScale)
    // }
    // if (rect.bottom >= windowHeight && rect.top >= windowHeight) {
    //   console.log("small");
    //   setScale(scale - 1);
    // }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const OverlayStyle = {
    transform: `scale(${scale})`,
    transformOrigin: "center center",
    transition: "transform 0.4s ease-in", // You can adjust the transition duration here
  };
  // console.log(scale);
  return (
    <>
      <div className="overlay_overlay__Rb7bs">
        <div
          className="overlay_overlay__Rb7bs"
          style={OverlayStyle}
          id="overlay"
        >
          <BiPlusMedical />
        </div>
      </div>
    </>
  );
}

export default ClipEffect;
