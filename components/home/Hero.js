"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroImage from "@/public/assets/images/hero-image.png";

import { Khula } from "next/font/google";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "@/components/common/Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { useTranslations } from "next-intl";

const khula = Khula({ subsets: ["latin"], weight: ["700"] });
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Hero = () => {
  const [swiper, setSwiper] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  const slideTo = (index) => {
    if (swiper) swiper.slideTo(index);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 30);
  }, []);

  const t = useTranslations("Hero");

  return (
    <div className={"lg:px-40 md:px-8 py-16  md:pt-32 md:pb-12   "}>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-y-2 ">
        <div
          className={`left w-full md:w-5/12  flex justify-center flex-col items-end select-none anim-r-to-l ${
            isLoaded ? "loaded" : ""
          } `}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={setSwiper}
            className="mySwiper w-full h-full lg:w-[80%] lg:h-[80%]"
          >
            <SwiperSlide>
              <Image
                className={"w-full h-60 md:h-full p-2"}
                src={HeroImage}
                alt={"Hero image"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className={"w-full h-60 md:h-full p-2"}
                src={HeroImage}
                alt={"Hero image"}
              />
            </SwiperSlide>
          </Swiper>

          <div className={"flex gap-1 w-full justify-center mt-5"}>
            <IoIosArrowBack
              onClick={() => {
                swiper.slidePrev();
              }}
              className={
                "bg-green w-10 h-10 rounded-full p-2 text-white cursor-pointer hover:bg-green/50"
              }
              size={22}
            />
            <IoIosArrowForward
              onClick={() => {
                swiper.slideNext();
              }}
              className={
                "border border-green   w-10 h-10 rounded-full cursor-pointer p-2 text-green hover:bg-green/50"
              }
              size={22}
            />
          </div>
        </div>
        <div
          className={`right w-full  md:w-7/12 flex flex-col gap-5 items-start px-2 anim-l-to-r  ${
            isLoaded ? "loaded" : ""
          }`}
        >
          <h1
            className={` text-2xl lg:text-[2.8rem] leading-[3rem]  text-white  font-bold ${khula.className} `}
          >
            {" "}
            {t("FirstHalfTitle")}
            <span className={"text-green"}>{t("SecondHalfTitle")}</span>
          </h1>

          <p className={"text-white/70 text-xs select-none"}>{t("SubTitle")}</p>
          <Button>
            {" "}
            <Link href={"/search"}>{t("Button1")}</Link>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
