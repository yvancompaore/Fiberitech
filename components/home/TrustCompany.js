import React from "react";
import { IconBase } from "react-icons";
import { BiSolidTrash } from "react-icons/bi";
import { servicesEn, servicesEs } from "@/utils/constants";
import ServiceItem from "@/components/home/ServiceItem";
import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";
import Image from "next/image";
import { partnersCompany } from "@/utils/constants";
import PremiumCompany from "@/public/assets/images/partners/PremiumCompany.jpg";

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

      <div className="services flex mt-8 w-full  flex-wrap md:flex-nowrap gap-y-2">
        {partnersCompany.map((partner) => (
          <Image
            src={partner.image}
            key={partner.title}
            alt={partner.title}
            width={250}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustCompany;
