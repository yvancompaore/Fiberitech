import React from 'react';
import {IconBase} from "react-icons";
import {BiSolidTrash} from "react-icons/bi";
import {services} from "@/utils/constants";
import ServiceItem from "@/components/home/ServiceItem";

const OurServices = () => {
    return (
        <div id={"services"} className={'lg:px-40'}>
            <h3 className={`khula-family font-semibold text-xl text-green text-center`}>Our Services</h3>
            <h3 className={`khula-family font-bold text-4xl  text-center mt-3`}>What We Do!</h3>


            <div className="services flex mt-3 w-full  flex-wrap md:flex-nowrap gap-y-2">
                {services.map((service)=>{
                    return <ServiceItem {...service} key={service.title}/>
                })}

            </div>
        </div>
    );
};

export default OurServices;