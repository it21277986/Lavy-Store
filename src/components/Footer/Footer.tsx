"use client";

import React from "react";
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <div id="Footer" className="mt-10 p-5">
      <div className="mx-auto text-center bg-[#303030] text-white rounded-[10px] p-5 sm:p-10">
        {/* Contact Us Heading */}
        <h1 className="font-bold text-lg tracking-[5px] sm:tracking-[7px] pb-5">
          CONTACT US
        </h1>

        {/* Main Content */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Section (Logo & Social Media) */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/static/headerlogo.svg" alt="Logo" className="w-20 sm:w-28" />
            <h1 className="text-lg font-semibold mt-2">Lavy Store</h1>

            {/* Social Media Icons */}
            <div className="flex gap-4 text-[#858585] text-2xl pt-3">
              <a href="http://wa.me/94728636129" className="hover:text-white"><FaWhatsapp /></a>
              <a href="https://web.facebook.com/profile.php?id=61561436008945&sk=about" className="hover:text-white"><FaFacebook /></a>
              <a href="https://www.instagram.com/_lavystore_0?igsh=d2Y1NjVkdTlqcjRi" className="hover:text-white"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@_lavystore_?is_from_webapp=1&sender_device=pc" className="hover:text-white"><FaTiktok /></a>
            </div>
          </div>

          {/* Right Section (Contact Info) */}
          <div className="flex flex-col items-center md:items-start text-[#858585] text-lg">
            <a href="tel:+94728636129" className="flex items-center gap-2 text-white hover:text-[#858585] transition">
              <FaPhone className="text-[#858585]" />
              (+94) 72 863 6129
            </a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-[#858585] transition">
              <MdEmail className="text-[#858585]" />
              lavystore@gmail.com
            </a>
            <a className="flex items-center gap-2 text-white hover:text-[#858585] transition">
              <FaLocationDot className="text-[#858585]" />
              Kurunegala, Sri Lanka
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#858585] my-5" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#858585]">
          <h1 className="text-center md:text-left">
            © {new Date().getFullYear()} Lavy Store - All rights reserved. | Designed by <a href="https://lakmal-thathsara-portfolio.netlify.app/"><u>Lakmal Thathsara</u></a>
          </h1>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
