"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Product from "@/components/common/Product";
import { products } from "@/utils/constants";
import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";

const Products = () => {
  const t = useTranslations("Product");
  const locale = useLocale();
  return (
    <div
      id={"products"}
      className={"mt-20 w-full xl:px-40 bg-[#E6EAED] py-16  "}
    >
      <h1 className={"text-center font-bold text-5xl khula-family"}>
        {t("Title")}
      </h1>
      <h4 className={"text-center  text-xl khula-family"}>{t("SubTitle")}</h4>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 6,
          },
          1700: {
            slidesPerView: 7,
          },
        }}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper  m-auto mt-5 lg:h-96"
      >
        {products.map((product) => (
          <SwiperSlide className={"py-8"} key={product.title}>
            <Product {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 6,
          },
          1700: {
            slidesPerView: 7,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper lg:h-96"
      >
        {products
          .sort(() => 0.5 - Math.random())
          .map((product) => (
            <SwiperSlide className={"py-8"} key={product.title + "2"}>
              <Product {...product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Products;
