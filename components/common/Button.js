import React from 'react';

const Button = ({children}) => {
    return (
        <button className={'bg-green px-4 py-3 text-white rounded-full tracking-widest'}>{children}</button>

    );
};

export default Button;