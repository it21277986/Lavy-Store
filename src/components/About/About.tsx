"use client";
import React from "react";

function About() {
  return (
    <div id='About' className='container mx-auto text-center mt-10 mb-10'>
      <div>
        <h1 className='font-bold text-lg' style={{ letterSpacing: '7px' }}>ABOUT US</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-10">
        <div className="md:w-1/2">
          <p className='text-left'>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
            as a placeholder before the final copy is available Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Lorem ipsum may be used as a placeholder before the final
            copy is available Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            Lorem ipsum may be used as a placeholder before the final copy is available
          </p>
          <div className="text-left pt-5">
            <button
              className="border border-black bg-black text-white py-2 px-6 rounded-full text-lg hover:bg-white hover:text-black transition"
              onClick={() => document.getElementById("Shop")?.scrollIntoView({ behavior: "smooth" })}
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end pt-5">
          <img src="/static/aboutus.jpg" alt="About us" style={{ width: '400px', height: '500px' }} className="rounded-[10px]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between pt-10">
        <div className="md:w-1/2 flex justify-center">
          <img src="/static/hansi.jpg" alt="About us" style={{ width: '300px', height: 'auto' }} className="rounded-full" />
        </div>
        <div className="md:w-1/2">
          <h1 className='text-right font-bold text-lg pb-2'>Hansini Abekoon</h1>
          <p className='text-right'>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
            as a placeholder before the final copy is available Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Lorem ipsum may be used as a placeholder before the final
            copy is available Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            Lorem ipsum may be used as a placeholder before the final copy is available
          </p>
        </div>
      </div>
    </div>
  )
}

export default About