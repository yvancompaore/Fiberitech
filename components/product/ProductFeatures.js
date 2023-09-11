"use client";
import React, { useState } from "react";
import { faqs } from "@/utils/constants";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Button from "@/components/common/Button";

const ProductFeatures = ({ product }) => {
  const [selectedFeature, setSelectedFeature] = useState(1);

  return (
    <div className={"px-2 lg:px-40 pt-24 py-16 bg-light_gray"}>
      <Button>Download Technical File</Button>
      {/* 
            <h1 className={' font-bold uppercase text-5xl khula-family'}>Features</h1>

            {product.features.map((feature)=>{

                return <div className={'rounded p-6 mt-2 transition-all'} style={{backgroundColor:feature.id===selectedFeature?"#042E3A":"#F2F2F2"}} key={feature.id}>
                    <h2 >
                        <button onClick={()=>{
                            if(selectedFeature===feature.id){
                                setSelectedFeature(0)
                            }else{
                                setSelectedFeature(feature.id)}

                        }} type="button" className="flex items-center justify-between w-full  font-medium text-left   rounded-t-xl      " >
                            <span className={'font-bold text-green '}>{feature.title}</span>
                            {feature.id===selectedFeature?<AiOutlineMinus/>:<AiOutlinePlus/>}
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className={`${feature.id===selectedFeature?'':'hidden'} transition-all duration-200`} aria-labelledby="accordion-collapse-heading-1">
                        <div className={'w-full m-auto h-0.5 bg-gray-50/10 mt-3'}></div>

                        <div className="mt-2">
                            <p className="mb-2 text-white/80">{feature.description}</p>
                        </div>
                    </div>

                    <div className={'w-full m-auto h-[1px] bg-black mt-3 my-3'}></div>

                   


                </div>
            })}

        */}
    </div>
  );
};

export default ProductFeatures;
