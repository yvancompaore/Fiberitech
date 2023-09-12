import React from "react";
import Button from "@/components/common/Button";
import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";

const ContactUs = () => {
  const t = useTranslations("Contact");
  const locale = useLocale();

  return (
    <div id={"contact"} className={"px-2 xl:px-40 py-24"}>
      <h1 className={"text-center font-semibold text-5xl khula-family"}>
        {t("Title")}
      </h1>

      <div className="flex flex-wrap   justify-between gap-y-3 mt-5">
        <div className={"flex flex-col w-1/2 px-2"}>
          <label htmlFor="">{t("FirstName")}</label>
          <input
            type="text"
            className={"rounded  bg-light_gray py-3 border-none focus:border"}
            placeholder={t("Type")}
          />
        </div>
        <div className={"flex flex-col w-1/2 px-2"}>
          <label htmlFor="">{t("LastName")}</label>
          <input
            type="text"
            className={"rounded  bg-light_gray py-3 border-none focus:border"}
            placeholder={t("Type")}
          />
        </div>
        <div className={"flex flex-col w-1/2 px-2"}>
          <label htmlFor="">{t("Email")}</label>
          <input
            type="text"
            className={"rounded  bg-light_gray py-3 border-none focus:border"}
            placeholder={t("Type")}
          />
        </div>
        <div className={"flex flex-col w-1/2 px-2"}>
          <label htmlFor="">{t("Phone")}</label>
          <input
            type="text"
            className={"rounded  bg-light_gray py-3 border-none focus:border"}
            placeholder={t("Type")}
          />
        </div>
        <div className={"flex flex-col w-full px-2"}>
          <label htmlFor="">{t("Message")}</label>
          <textarea
            className={
              "rounded  bg-light_gray py-3 border-none focus:border h-32"
            }
            placeholder={t("Type")}
          ></textarea>
        </div>

        <Button>{t("Submit")}</Button>
      </div>
    </div>
  );
};

export default ContactUs;
