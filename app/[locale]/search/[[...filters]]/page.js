"use client";
import React from "react";

import NavBarLight from "@/components/common/NavBarLight";
import ProductImageSlider from "@/components/common/ProductImageSlider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { categories, products } from "@/utils/constants";

import RelatedProducts from "@/components/product/RelatedProducts";
import SearchArea from "@/components/search/SearchArea";
import Cable from "@/public/assets/images/categories/cable.png";
import Image from "next/image";
import CategoryItem from "@/components/search/CategoryItem";
import SearchProducts from "@/components/search/SearchProducts";
import { getLocale } from "@/utils/constants";

import { useTranslations } from "next-intl";
import { useLocale, useMessages } from "next-intl";

import { usePathname, useSearchParams } from "next/navigation";

const SearchPage = ({ params }) => {
  const categorySlug =
    params.filters && params.filters.length > 0
      ? params.filters[0]
      : categories[0].slug;

  const t = useTranslations("Footer");
  const pathname = usePathname();
  const locale = getLocale(pathname);
  console.log("locale product", locale);

  return (
    <main className=" w-full l">
      <NavBarLight />

      <SearchArea />

      <div className={"lg:px-40 px-2 mt-6 overflow-scroll hide-scroll "}>
        <div className="flex gap-2 justify-between">
          {categories.map((category) => (
            <CategoryItem
              {...category}
              isActive={category.slug === categorySlug}
              key={category.slug}
            />
          ))}
        </div>
      </div>

      <SearchProducts categorySlug={categorySlug} />
    </main>
  );
};

export default SearchPage;
