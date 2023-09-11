import React from 'react';
import {BiCart, BiSearch} from "react-icons/bi";

const SearchArea = () => {
    return (
        <div className={'mt-16 lg:mt-28 p-3 lg:h-24  bg-green_dark lg:px-40 px-2 flex flex-col lg:flex-row lg:items-center justify-between gap-5'
        }>
            <h1 className={'uppercase text-4xl font-bold text-white '}>FiberiTech</h1>

            <input type="text " className={'rounded-full px-3 py-2 flex-1'} placeholder={"Search in FiberiTech "}/>
            <div className={'flex gap-2 items-center float-right justify-end'}>
                <div className={'bg-green text-white p-3 rounded-full'}>
                    <BiSearch size={22}/>
                </div>
                <BiCart className={'text-white'} size={30}/>
            </div>


        </div>
    );
};

export default SearchArea;