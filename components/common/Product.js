import React from "react";
import Image from "next/image";
import { BsStar, BsStarFill } from "react-icons/bs";
import Link from "next/link";

const Product = ({
  slug,
  image,
  title,
  price,
  rating,
  hideRating = false,
  hidePrice = false,
}) => {
  return (
    <Link href={"/product/" + slug}>
      <div
        className={
          "flex justify-center items-center flex-col cursor-pointer p-2 "
        }
      >
        <Image
          className={
            "w-full   aspect-square object-contain border-2 border-black rounded-[2.2rem] p-5 my-1"
          }
          src={image}
          alt={""}
          width={300}
          height={300}
        />
        {/* <h3 className={`text-3xl font-extrabold ${hidePrice ? "hidden" : ""}`}>
          ${price}
        </h3> */}
        <h4 className={"text-xl font-bold "}>{title}</h4>
        {/*  <div className={`flex gap-1 ${hideRating ? "hidden" : ""}`}>
          {Array.from(Array(rating).keys()).map((i) => {
            return (
              <BsStarFill
                className={"text-yellow-500"}
                key={i}
                size={22}
                color={"yellow/70"}
              />
            );
          })}
          {Array.from(Array(5 - rating).keys()).map((i) => {
            return <BsStar size={22} color={"yellow/70"} key={i} />;
          })}
          ({rating})
        </div>*/}
      </div>
    </Link>
  );
};

export default Product;
