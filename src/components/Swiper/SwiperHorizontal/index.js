import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Autoplay, Mousewheel } from "swiper/modules";

function SwiperHorizontal({
  items,
  title,
  component: Component,
  wheel = true,
}) {
  return (
    <Swiper
      direction={"horizontal"}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={250}
      mousewheel={
        wheel && {
          forceToAxis: false,
          sensitivity: 1,
          releaseOnEdges: true,
          // invert: true,
        }
      }
      autoplay={
        wheel
          ? false
          : {
              delay: 2500,
              disableOnInteraction: false,
            }
      }
      modules={[wheel ? Mousewheel : Autoplay]}
      className="horizontalSwiper"
    >
      {title && (
        <div className="backgroundTitle">
          <h1>{title}</h1>
        </div>
      )}

      {items.map((data, index) => {
        return (
          <SwiperSlide
            key={data.id || `horizontal-${index}`}
            className="horizontalSlides"
          >
            <Component {...data} />
          </SwiperSlide>
        );
      })}
      {title && (
        <div className="backgroundTitle">
          <h1 className="stroke">{title}</h1>
        </div>
      )}
    </Swiper>
  );
}

export default SwiperHorizontal;
