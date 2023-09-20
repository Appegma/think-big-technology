import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";

// import required modules
import { Mousewheel } from "swiper/modules";

export default function SwiperVertical({ items, component: Component }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      modules={[Mousewheel]}
      className="verticalSwiper"
      onActiveIndexChange={(swiper) => {
        setActiveIndex(swiper.realIndex);
      }}
    >
      {items?.length > 0 &&
        items.map((data, index) => (
          <SwiperSlide className="verticalSlides" key={`Project-${index}`}>
            <Component {...data} active={index === activeIndex} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
