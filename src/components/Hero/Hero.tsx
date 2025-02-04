"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[60rem] sm:h-[40rem] md:h-[50rem] lg:h-[60rem]">
      {/* Background Image */}
      <img
        src="/static/hero.jpeg"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>

      {/* Hero Content */}
      <div className="absolute top-1/2 right-6 sm:right-10 md:right-16 transform -translate-y-1/2 text-white text-right">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          WELCOME TO THE LAVY STORE
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mt-2">
          EMBRACE LUXURY, ILLUMINATE BEAUTY
        </h2>

        {/* Shop Now Button */}
        <div className="mt-10">
          <button className="border border-white text-white py-2 px-6 rounded-full text-lg hover:bg-white hover:text-black transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
