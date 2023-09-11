import React from 'react';
import Image from "next/image";
import Testimonial from "@/public/assets/images/testimonial1.png";
import Quote from "@/public/assets/images/quote.svg";
import Button from "@/components/common/Button";

const Testimonials = () => {
    return (
        <div className={'px-2 xl:px-40  items-center py-24 '}>
            <h1 className={'text-center font-bold text-5xl khula-family text-green'}>Testimonials</h1>
            <h4 className={'text-center  text-xl khula-family'}>Testimonials</h4>
            <div className={'flex w-full bg-white mt-10 '}>

                <div className="flex w-full flex-col md:flex-row-reverse">
                    <div className="left  flex-1">
                        <Image src={Testimonial} alt={"Testimonial"} width={550} height={550}/>
                    </div>
                    <div className="right  flex-1 p-5 flex flex-col gap-4 items-start">
                        <Image src={Quote} alt={"About us image"} width={50} height={50}/>


                        <p className={'leading-7'}>
                            Fiber iTech has been an invaluable partner in our networking journey. Their commitment to quality and customer service is exceptional. We purchased fiber optic cables and connectors from them, and the performance has exceeded our expectations. The technical support they provided was prompt and knowledgeable, helping us with a seamless installation process. We highly recommend Fiber iTech to anyone seeking top-notch fiber equipment solutions.                        </p>
                       <div>
                           <h3 className={`khula-family font-bold text-2xl`}>Daniel Martin</h3>
                           <h5 className={`khula-family text-green text-sm`}>Company Manager</h5>
                       </div>

                    </div>

                </div>


            </div>

        </div>
    );
};

export default Testimonials;