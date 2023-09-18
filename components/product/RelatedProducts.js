"use client";
import React from "react";
import { products, productsEs } from "@/utils/constants";
import Product from "@/components/common/Product";
import { getLocale } from "@/utils/constants";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const RelatedProducts = () => {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const locale = getLocale(pathname);
  var rigthProducts;
  console.log("locale search", locale);

  if (locale == "es") {
    rigthProducts = productsEs;
  } else {
    rigthProducts = products;
  }

  return (
    <div className={"lg:px-40 px-3 flex flex-col gap-y-3 py-16"}>
      <h1 className={" font-bold uppercase text-5xl khula-family"}>
        Related Products
      </h1>

      <div className="products flex flex-row gap-y-3 flex-wrap justify-between">
        {rigthProducts.map((product) => (
          <div className={"w-full md:w-1/2 lg:w-1/3"} key={product.id}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
