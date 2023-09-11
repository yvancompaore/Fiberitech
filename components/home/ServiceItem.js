import React from 'react';
import {BiSolidTrash} from "react-icons/bi";
import Image from "next/image";

const ServiceItem = ({description,title,icon}) => {
    return (
        <div className="service-item p-5 bg-green_dark rounded-2xl w-full lg:w-1/3 flex flex-col gap-2 mx-2 ">

            <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
             <Image src={icon} alt={title} width={22} height={22} />
            </div>
            <h3 className={'text-green text-xl font-semibold'}>{title}</h3>

            <p className={'text-white/80'}>
                {description}
            </p>
        </div>
    );
};

export default ServiceItem;