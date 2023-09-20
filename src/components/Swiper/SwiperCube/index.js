/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCube } from "swiper/modules";

function SwiperCube({ items, active }) {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    swiper?.slideTo(active);
  }, [active]);

  return (
    <Swiper
      onSwiper={setSwiper}
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[EffectCube]}
      className="cubeSwiper"
    >
      {items.map((item, index) => (
        <SwiperSlide className="cubeSlides" key={`cube-${index}`}>
          {item.logo}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperCube;
