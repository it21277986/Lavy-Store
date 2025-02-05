"use client";

import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <div id='Footer'>
            <div className='mx-auto text-center mt-10 mb-5 ml-5 mr-5 bg-[#303030] text-white rounded-[10px]'>
                <div className='container'>
                    <div className='p-10'>
                        <h1 className='font-bold text-lg' style={{ letterSpacing: '7px' }}>CONTACT US</h1>
                    </div>
                    <div className='mx-auto pb-10 flex justify-between items-center'>
                        <div>
                            <div className="flex items-center">
                                <img src="/static/headerlogo.svg" alt="Logo" className="w-24 sm:w-32" />
                            </div>
                            <h1>Lavy Store</h1>
                            <div className='pt-5 flex gap-5 text-[#858585] text-xl'>
                                <h1 className='cursor-pointer'><FaWhatsapp/></h1>
                                <h1 className='cursor-pointer'><FaFacebook/></h1>
                                <h1 className='cursor-pointer'><FaInstagram/></h1>
                                <h1 className='cursor-pointer'><FaTiktok/></h1>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-col items-start gap-2 text-[#858585] text-lg">
                            <a href='tel:+94728636129'><h1 className="cursor-pointer flex items-center gap-2"><FaPhone />(+94) 72 863 6129</h1></a>
                            <a href='#'><h1 className="cursor-pointer flex items-center gap-2"><MdEmail />lavystore@gmail.com</h1></a>
                            <h1 className="cursor-pointer flex items-center gap-2"><FaLocationDot />Kurunegala, Sri Lanka</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer