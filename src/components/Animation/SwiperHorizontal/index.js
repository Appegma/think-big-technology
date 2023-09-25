import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Mousewheel } from "swiper/modules";
import Mobile from "../../MobileSection";

export default function SwiperHorizontal({ items }) {
  return (
    <>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        {items?.length > 0 &&
          items.map(({ title, description, image }, index) => (
            <SwiperSlide key={`Project-${index}`}>
              <Mobile title={title} description={description} image={image} />
            </SwiperSlide>
          ))}
        
      </Swiper>
    </>
  );
}
