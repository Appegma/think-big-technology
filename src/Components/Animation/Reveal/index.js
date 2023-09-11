/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// interface props {
//     children:JSX.Element,
//     width?:"fit-contant" | "100%"
// }

const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div
        ref={ref}
        style={{ position: "relative", width, overflow: "hidden" }}
      >
        <motion.dev
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </motion.dev>
        <motion.dev
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "#0FA0FF",
            zIndex: 20,
          }}
        />
      </div>
    </>
  );
};

export default Reveal;
