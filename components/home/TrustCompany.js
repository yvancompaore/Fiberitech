"use client"

import React from "react";

import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";
import Image from "next/image";
import { partnersCompany } from "@/utils/constants";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

const TrustCompany = () => {
  const t = useTranslations("Trust");
  const locale = useLocale();

  return (
    <div id={"services"} className={"mt-10 lg:px-40"}>
      <h3
        className={`khula-family font-semibold text-xl text-green text-center`}
      >
        {t("Title")}
      </h3>
      <h3 className={`khula-family font-bold text-4xl  text-center mt-3`}>
        {t("SubTitle")}
      </h3>

      <div className="services flex mt-8 w-full   md:flex-nowrap gap-y-2   justify-center items-center ">

          <Swiper
              spaceBetween={50}
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

              }}
              className={'w-full'}

              autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              slidesPerView={3}
          >
              {partnersCompany.map((partner) => (
                  <SwiperSlide>
                      <div className={'flex justify-center items-center'}>
                          <Image
                              src={partner.image}
                              key={partner.title}
                              alt={partner.title}
                              width={250}
                              objectFit={'contain'}
                              height={200}
                          />
                      </div>


                  </SwiperSlide>


              ))}

              ...
          </Swiper>

      </div>
    </div>
  );
};

export default TrustCompany;
