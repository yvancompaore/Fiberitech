"use client"
import React, {useState} from 'react';
import {faqs} from "@/utils/constants";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const Faq = () => {
     const[selectedFaq,setSelectedFaq]=useState(0)

    return (
        <div id={"faq"} className={'px-2 xl:px-40 pt-24'}>

            <h1 className={'text-center font-semibold text-5xl khula-family'}>FAQ</h1>

            {faqs.map((faq)=>{

                return <div className={'rounded p-6 mt-2 transition-all'} style={{backgroundColor:faq.id===selectedFaq?"#042E3A":"#F2F2F2"}} key={faq.id}>
                    <h2 >
                        <button onClick={()=>{
                            if(selectedFaq===faq.id){
                                setSelectedFaq(0)
                            }else{
                                setSelectedFaq(faq.id)}

                        }} type="button" className="flex items-center justify-between w-full  font-medium text-left   rounded-t-xl      " >
                            <span className={'font-bold text-green '}>{faq.question}</span>
                            {faq.id===selectedFaq?<AiOutlineMinus/>:<AiOutlinePlus/>}
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" className={`${faq.id===selectedFaq?'':'hidden'} transition-all duration-200`} aria-labelledby="accordion-collapse-heading-1">
                        <div className={'w-full m-auto h-0.5 bg-gray-50/10 mt-3'}></div>

                        <div className="mt-2">
                            <p className="mb-2 text-white/80">{faq.answer}</p>
                        </div>
                    </div>
                </div>
            })}




        </div>
    );
};

export default Faq;