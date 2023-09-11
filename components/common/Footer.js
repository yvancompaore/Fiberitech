import React from 'react';
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png"
import {BiMailSend, BiSend} from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
    return (

        <footer className="bg-green_dark">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <Image src={Logo} alt={"logo"} width={150} height={150}/>
                        </a>
                        <p className={'text-white/70 max-w-lg  md:p-5'}>is a leading provider of high-quality fiber
                            equipment solutions for businesses and individuals. With a commitment to excellence, we
                            deliver reliable products and exceptional customer service to meet your networking
                            needs.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-2xl font-semibold text-green">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline text-white">Home</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#about" className="hover:underline text-white">About</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#services" className="hover:underline text-white">Services</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/search" className="hover:underline text-white">Products</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#faq" className="hover:underline text-white">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-2xl font-semibold text-green">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline text-white">Address</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#about" className="hover:underline text-white">About</Link>

                                </li>
                                <li className="mb-4">
                                    <Link href="/#services" className="hover:underline text-white">Services</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/search" className="hover:underline text-white">Products</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/#faq" className="hover:underline text-white">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-3 lg:col-auto">
                            <h2 className="mb-6 text-2xl font-semibold text-green">Join Our Newsletter</h2>
                            <h2 className="text-white text-2xl">Send Email To Join</h2>
                            <div className="p-1 bg-white flex mt-2 rounded">
                                <input type="email" className="border-none w-full" placeholder="Send Email" />
                                <button className="bg-green_dark p-2 rounded text-white"><BiSend size={22} /></button>
                            </div>
                        </div>


                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright 2023.All Right Reserved
          </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <h3 className={'text-white'}>
                            Privacy Policy / Terms & Condition
                        </h3>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;