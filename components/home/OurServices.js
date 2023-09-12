import React from "react";
import { IconBase } from "react-icons";
import { BiSolidTrash } from "react-icons/bi";
import { services } from "@/utils/constants";
import ServiceItem from "@/components/home/ServiceItem";
import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";

const OurServices = () => {
  const t = useTranslations("Service");
  const locale = useLocale();
  console.log(locale);

  return (
    <div id={"services"} className={"lg:px-40"}>
      <h3
        className={`khula-family font-semibold text-xl text-green text-center`}
      >
        {t("Title")}
      </h3>
      <h3 className={`khula-family font-bold text-4xl  text-center mt-3`}>
        {t("SubTitle")}
      </h3>

      <div className="services flex mt-3 w-full  flex-wrap md:flex-nowrap gap-y-2">
        {locale == "en" ? (
          services.map((service) => {
            return <ServiceItem {...service} key={service.title} />;
          })
        ) : (
          <div>Hello </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;
