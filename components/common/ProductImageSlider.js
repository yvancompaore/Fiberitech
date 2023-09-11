"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const ProductImageSlider = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#333333",
          "--swiper-pagination-color": "#333333",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product.images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              className={
                "w-full h-full  aspect-square object-contain border-2 border-black rounded-[2.2rem]  "
              }
              src={image}
              height={500}
              width={500}
              alt={"product image"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-6"
      >
        {product.images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              className={
                "w-full h-full cursor-pointer  aspect-square object-contain border border-black rounded-3xl "
              }
              src={image}
              height={200}
              width={200}
              alt={"product image"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
