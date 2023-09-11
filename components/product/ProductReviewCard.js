import React from 'react';
import Image from "next/image";
import {BsStar, BsStarFill} from "react-icons/bs";

import QuoteImage from "@/public/assets/images/quote.svg"

const ProductReviewCard = ({review}) => {
    return (
        <div className="service-item p-5 bg-green_dark rounded-2xl w-full lg:w-1/3 flex flex-col gap-4 mx-2 ">

            <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center">
                <Image src={QuoteImage} alt={review.description} width={22} height={22} />
            </div>

            <p className={'text-white/80'}>
                {review.description}
            </p>


            <div className={'flex flex-row gap-2'}>
                <Image className={'rounded-full object-cover w-10 h-10'} src={review.user.avatar} alt={"review"} height={30} width={30}/>
                <div className={'flex flex-col'}>
                    <h3 className={'text-green text-lg font-semibold'}>{review.user.name}</h3>
                    <div className="flex gap-1">
                        {Array.from(Array(review.rating).keys()).map((i)=>{
                            return <BsStarFill className={'text-yellow-500'} key={i} size={15} color={'yellow/70'}/>
                        })}
                        {Array.from(Array(5-review.rating).keys()).map((i)=>{
                            return <BsStar size={15} color={'yellow/70'} key={i}/>
                        })}
                        ({review.rating})
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewCard;