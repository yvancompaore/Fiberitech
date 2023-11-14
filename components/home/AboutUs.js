import React from "react";

import AboutUsImage from "@/public/assets/images/about-us.png";
import AboutUsImage2 from "@/public/assets/images/aboutUs2.png";
import Image from "next/image";
import Button from "@/components/common/Button";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("About");

  return (
    <div
      id={"about"}
      className={" w-full mt-40 bg-white xl:px-40 flex items-center py-20"}
    >
      <div className="flex w-full flex-col md:flex-row ">
        <div className="flex-1">
          <Image
            src={AboutUsImage2}
            alt={"About us image"}
            width={550}
            height={550}
          />
        </div>
        <div className="  flex-1 p-5 flex flex-col gap-3 items-start">
          <h3 className={`khula-family font-semibold text-xl text-green`}>
            {t("Title")}
          </h3>
          <h2 className={`khula-family font-bold text-4xl`}>{t("SubTitle")}</h2>

          <p className={"leading-7"}>{t("Description")}</p>

          {/* <Button>Read More</Button>*/}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
