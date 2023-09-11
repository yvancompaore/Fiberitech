import React from "react";

import AboutUsImage from "@/public/assets/images/about-us.png";
import Image from "next/image";
import Button from "@/components/common/Button";

const AboutUs = () => {
  return (
    <div
      id={"about"}
      className={" w-full bg-white xl:px-40 flex items-center py-20"}
    >
      <div className="flex w-full flex-col md:flex-row ">
        <div className="flex-1">
          <Image
            src={AboutUsImage}
            alt={"About us image"}
            width={550}
            height={550}
          />
        </div>
        <div className="  flex-1 p-5 flex flex-col gap-3 items-start">
          <h3 className={`khula-family font-semibold text-xl text-green`}>
            About Us
          </h3>
          <h2 className={`khula-family font-bold text-4xl`}>
            A Story of our company
          </h2>

          <p className={"leading-7"}>
            Welcome to Fiber iTech, the trusted destination for cutting-edge
            fiber equipment solutions. With a focus on quality and innovation,
            we offer a comprehensive range of fiber optic products to meet your
            networking needs. Our expert team is committed to providing
            personalized support and exceptional customer service. Join us in
            building a connected future with reliable fiber equipment you can
            depend on.
          </p>

          {/* <Button>Read More</Button>*/}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
