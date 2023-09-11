import React from 'react';
import Image from "next/image";
import Gear from "@/public/assets/images/gear.svg"
import Link from "next/link";

const CategoryItem = ({image,isActive,title,slug}) => {


    return (
        <Link href={"/search/"+slug}>
            <div className={' rounded-lg border border-green_dark  p-4 px-14 bg-cover bg-no-repeat flex flex-col justify-center items-center '} style={{backgroundImage:isActive && "url('/assets/images/categories/selected-category-bg.png')"}}>
                <Image className={` w-10 h-10  text-white ${isActive?'brightness-0 invert':''} `} src={image} alt={"cable"} width={50} height={50} />
                <h3 className={` mt-3 ${isActive?'text-white':'text-green_dark'}`}>{title}</h3>

            </div>
        </Link>
    );
};

export default CategoryItem;