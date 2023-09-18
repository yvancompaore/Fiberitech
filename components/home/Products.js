"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Product from "@/components/common/Product";
import { products, productsEs } from "@/utils/constants";
import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";
import { getLocale } from "@/utils/constants";
import { usePathname, useSearchParams } from "next/navigation";

const Products = () => {
  const t = useTranslations("Product");
  const pathname = usePathname();
  const locale = getLocale(pathname);
  var rigthProducts;

  if (locale == "es") {
    rigthProducts = productsEs;
  } else {
    rigthProducts = products;
  }

  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 30);
  }, []);

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
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={`mySwiper  m-auto mt-5 lg:h-96 anim-r-to-l ${
          isLoaded ? "loaded" : ""
        }`}
      >
        {rigthProducts.map((product) => (
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
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`mySwiper lg:h-96  anim-l-to-r ${isLoaded ? "loaded" : ""}`}
      >
        {rigthProducts
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
