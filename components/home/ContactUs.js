import React from 'react';
import Button from "@/components/common/Button";

const ContactUs = () => {
    return (
        <div id={"contact"} className={'px-2 xl:px-40 py-24'}>
            <h1 className={'text-center font-semibold text-5xl khula-family'}>Contact Us</h1>


            <div className="flex flex-wrap   justify-between gap-y-3 mt-5">
                <div className={'flex flex-col w-1/2 px-2'}>
                    <label htmlFor="">First Name</label>
                    <input type="text" className={'rounded  bg-light_gray py-3 border-none focus:border'}
                           placeholder={"Type Here"}/>
                </div>
                <div className={'flex flex-col w-1/2 px-2'}>

                    <label htmlFor="">Last Name</label>
                    <input type="text" className={'rounded  bg-light_gray py-3 border-none focus:border'}
                           placeholder={"Type Here"}/>
                </div>
                <div className={'flex flex-col w-1/2 px-2'}>

                <label htmlFor="">Email</label>
                    <input type="text" className={'rounded  bg-light_gray py-3 border-none focus:border'}
                           placeholder={"Type Here"}/>
                </div>
                <div className={'flex flex-col w-1/2 px-2'}>

                <label htmlFor="">Phone</label>
                    <input type="text" className={'rounded  bg-light_gray py-3 border-none focus:border'}
                           placeholder={"Type Here"}/>
                </div>
                <div className={'flex flex-col w-full px-2'}>
                    <label htmlFor="">Message</label>
                    <textarea className={'rounded  bg-light_gray py-3 border-none focus:border h-32'}
                              placeholder={"Type Here"}></textarea>
                </div>

                <Button>Submit</Button>
            </div>

        </div>
    );
};

export default ContactUs;