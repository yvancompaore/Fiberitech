import React from 'react';
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";

const Header = () => {
    return (
            <div className={'header  w-full  bg-no-repeat bg-cover   '}
                 style={{backgroundImage: "url('/assets/images/hero-bg.png')"}}>
                <Navbar/>
                <Hero/>


            </div>
    );
};

export default Header;