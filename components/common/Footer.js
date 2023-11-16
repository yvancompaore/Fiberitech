import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png";
import { BiMailSend, BiSend } from "react-icons/bi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";
import Map from "@/components/common/Map";
const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return (
    <footer className="bg-green_dark">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between gap-x-4">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Image src={Logo} alt={"logo"} width={150} height={150} />
            </a>
            <p className={"text-white/70 max-w-lg  md:p-5"}>
              {t("Description")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-green">
                {t("Links")}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline text-white">
                    {t("Home")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/#about" className="hover:underline text-white">
                    {t("About")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/#services"
                    className="hover:underline text-white"
                  >
                    {t("Sevices")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/search" className="hover:underline text-white">
                    {t("Products")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/#faq" className="hover:underline text-white">
                    {t("Faq")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-green">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <h2>
                    Sociedad limitada con un capital de 10.000.000 FCFA,Paseo
                    alameda 48 planta 5 puerta 20 ,46023 valencia{" "}
                  </h2>
                </li>
                <li className="mb-4">
                  <h2>Tel : +34 623017360</h2>
                </li>
                <li className="mb-4">
                  <h2>Correro electronico : infos@fiberitech.com</h2>
                </li>
              </ul>
            </div>
            <div className="col-span-3 lg:col-auto">
              <h2 className="mb-6 text-2xl font-semibold text-green">
                {t("Newslatter")}
              </h2>
              <h2 className="text-white text-2xl"> {t("EmailDemand")}</h2>
              <div className="p-1 bg-white flex mt-2 rounded">
                <input
                  type="email"
                  className="border-none w-full"
                  placeholder={t("EmailDemand")}
                />
                <button className="bg-green_dark p-2 rounded text-white">
                  <BiSend size={22} />
                </button>
              </div>
              <div className={'w-full h-52 bg-red-400 mt-4'}>
                <Map classNmae={'h-full w-full'}/>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {t("Copyright")}
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <h3 className={"text-white"}> {t("Privacy")}</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
