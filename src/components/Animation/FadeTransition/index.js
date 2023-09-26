import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function FadeTransition({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  // const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // slideControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 6,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default FadeTransition;
