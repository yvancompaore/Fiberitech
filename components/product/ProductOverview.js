import React from "react";
import ProductImageSlider from "@/components/common/ProductImageSlider";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "@/components/common/Button";
import DotIndicator from "@/components/common/DotIndicator";

const ProductOverview = ({ product }) => {
  return (
    <div className={"flex flex-col lg:flex-row lg:px-40 mt-32 lg:h-[65vh]"}>
      <div className="w-full p-2 lg:w-4/12 lg:h-[300px] ">
        <ProductImageSlider product={product} />
      </div>
      <div className="w-full lg:w-6/12 lg:h-80 p-5 py-10 flex flex-col gap-y-3 items-start">
        <h1 className={"text-4xl text font-bold khula-family"}>
          {product.title}
        </h1>

        {/* <div className={'flex gap-x-2'}>
                    <h1 className={'text-3xl text  khula-family text-green'}>${product.price}</h1>
                    <h1 className={'text-xl lg:text-4xl text font-thin  khula-family '}>Free Shipping (US Only)</h1>

                </div>
                     

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio
        </p>

        <div
          className={
            "flex flex-col lg:flex-row gap-2 justify-start items-start"
          }
        >
          <div className={"flex flex-row gap-2"}>
            <div className={"bg-green_dark text-white p-3 rounded-full"}>
              <AiOutlineMinus size={22} />
            </div>
            <div
              className={
                "border border-green_dark text-white p-3 rounded-full w-10 h-10 flex justify-center items-center"
              }
            >
              <span className={"text-green_dark"}>3</span>
            </div>
            <div className={"bg-green_dark text-white p-3 rounded-full"}>
              <AiOutlinePlus size={22} />
            </div>
          </div>

          <Button>Add to Cart</Button>
        </div>

        <div>
          <ul className={"flex flex-col gap-y-3"}>
            {product.features.map((feature) => {
              return (
                <li
                  className={"flex flex-row gap-x-2 items-center"}
                  key={feature.title}
                >
                  <DotIndicator />
                  <p>{feature.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
        */}
      </div>
    </div>
  );
};

export default ProductOverview;
