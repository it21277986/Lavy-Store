"use client";
import React from "react";

function About() {
  return (
    <div id="About" className="container mx-auto text-center px-5 mt-10 mb-10">
      {/* ABOUT US Heading */}
      <h1 className="font-bold text-lg tracking-[5px] sm:tracking-[7px]">ABOUT US</h1>

      {/* First Section: About Text + Image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-10 gap-8">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 text-left">
          <p className="text-gray-700 leading-relaxed">
            At Lavy Store, we specialize in crafting elegant and handcrafted ribbon rose bouquets that capture the essence of beauty and love. Each bouquet is
            carefully designed to bring joy to special moments, making them perfect for gifts, décor, and celebrations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As we continue to grow, we are excited to expand our collection with exquisite gift item boxes and floral bouquets, thoughtfully curated to
            create meaningful and unforgettable experiences. Whether you’re celebrating a birthday, anniversary, or any special occasion, Lavy Store is
            here to add a touch of charm and elegance to your gifts.
          </p>
          {/* SHOP NOW Button */}
          <div className="pt-5">
            <button
              className="border border-black bg-black text-white py-2 px-6 rounded-full text-lg hover:bg-white hover:text-black transition"
              onClick={() => document.getElementById("Shop")?.scrollIntoView({ behavior: "smooth" })}
            >
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src="/static/aboutus.jpg" alt="About us" className="w-[90%] sm:w-[400px] h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Second Section: Founder Info */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-10 gap-8">
        {/* Left Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src="/static/hansi.jpg" alt="Hansini Abekoon" className="w-[60%] sm:w-[300px] h-auto rounded-full shadow-md" />
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/2 text-right">
          <h1 className="font-bold text-lg pb-2">Hansini Abekoon</h1>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m Hansini Abekoon, the owner of Lavy Store! I’ve always had a passion for creativity and making beautiful things, which led me to start this journey of crafting elegant ribbon rose bouquets. Each piece I create is made with love and care, perfect for bringing joy to special moments.
            As I grow Lavy Store, I’m excited to expand into gift item boxes and bouquets, offering more unique and heartfelt gifts for you and your loved ones. My goal is to make every gift feel special and meaningful. Thank you for supporting my small business—I can’t wait to share more beautiful creations with you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
