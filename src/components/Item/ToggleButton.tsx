"use client";

import React, { useState } from "react";
import Flora from "./Flora";

const Option1 = () => (
  <Flora/>
);

const Option2 = () => (
  <div className="p-6 text-center text-lg text-green-800">This is Option 2</div>
);

function ToggleButton() {
  const [isOption1, setIsOption1] = useState(true);

  return (
    <div className="container mx-auto text-center mt-10">
        <div className="pb-10">
            <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful 
            content. Lorem ipsum may be used as a placeholder before the final copy is available and is commonly used in graphic design. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful 
            content. Lorem ipsum may be used as a placeholder before the final copy is available and is commonly used in graphic design.
            </p>
        </div>
      {/* Toggle Buttons Container */}
      <div className="relative flex justify-center items-center w-[350px] mx-auto bg-white border-2 border-black rounded-full p-1">
        {/* Moving Indicator (Active Background) */}
        <div
          className={`absolute left-1 top-1 bottom-1 w-[49%] bg-black rounded-full transition-all duration-300 ${
            isOption1 ? "left-1" : "left-[50%]"
          }`}
        ></div>

        {/* Option 1 Button */}
        <button
          className={`relative w-1/2 text-center py-2 text-lg font-bold transition-all duration-300 ${
            isOption1 ? "text-white" : "text-black"
          }`}
          onClick={() => setIsOption1(true)}
        >
          FLORA
        </button>

        {/* Option 2 Button */}
        <button
          className={`relative w-1/2 text-center py-2 text-lg font-bold transition-all duration-300 ${
            !isOption1 ? "text-white" : "text-black"
          }`}
          onClick={() => setIsOption1(false)}
        >
          OPTION
        </button>
      </div>

      {/* Render Components Based on Toggle State */}
      <div className="mt-10">{isOption1 ? <Option1 /> : <Option2 />}</div>
    </div>
  );
}

export default ToggleButton;
