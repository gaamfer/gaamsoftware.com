"use client"
import {BigSection} from "./components/sections"
import { Card_Proj } from "./components/Proj_comp";
import React from "react";
import { Link } from "react-scroll";
import { Card_Post } from "./components/Post_comp";


export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
        
        <h1 className="font-title text-gray-600 text-6xl md:text-9xl motion-blur-in-3xl motion-duration-500 text-center">
          Welcome
        </h1>

        <p className="font-title text-white text-4xl md:text-5xl motion-blur-in-3xl motion-duration-1000 text-center mt-10">to, <a className="font-title text-white text-4xl md:text-7xl motion-blur-in-3xl motion-duration-1500 text-center mt-10 underline hover:text-red-700" href="https://github.com/gaamfer">gaamfer</a></p>
        
        <div className="self-center mt-20 md:mt-40 motion-blur-in motion-delay-2000 ">
          <Link  to='most-recent' spy={true} smooth={true} offset={50} duration={500} containerId="scroll-container">
          <button className="bg-gray-600 text-white border border-white border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
        <span className="bg-neutral-400 shadow-neutral 400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        See more...
          </button>
          </Link>
        </div>
      </div>  
      <div id='most-recent'>
      <BigSection>
          <Card_Proj/>
          <Card_Post/>
      </BigSection>
      </div>
    </>
  );
}


