"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 shadow-md transition-colors duration-300 
      ${isScrolled ? "bg-[#303030] text-white" : "bg-white text-black"}`}>
      
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/static/headerlogo.svg" alt="Logo" className="w-24 sm:w-32" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-10 text-lg">
            <li className="cursor-pointer hover:font-bold transition" onClick={() => document.getElementById("Hero")?.scrollIntoView({ behavior: "smooth" })}>Home</li>
            <li className="cursor-pointer hover:font-bold transition">About Us</li>
            <li className="cursor-pointer hover:font-bold transition">Contact Us</li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button  
          className="lg:hidden text-3xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white py-4 shadow-md">
          <ul className="flex flex-col items-center gap-4 text-lg">
            <li className="cursor-pointer hover:font-bold transition">Home</li>
            <li className="cursor-pointer hover:font-bold transition">About Us</li>
            <li className="cursor-pointer hover:font-bold transition">Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
