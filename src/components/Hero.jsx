import React from "react";
import Navbar from "./Navbar";

import { AiOutlineRight, AiFillYoutube } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
const Hero = () => {
  return (
    <>
      <div className="w-full h-full bg-[url('/home_background.jpg')] bg-center relative">
        <Navbar />

        <div className="w-11/12 md:w-4/5 h-full m-auto flex flex-col md:flex-row justify-between items-center pt-10 ">
          <div className="md:w-1/3 space-y-2 ">
            <p className="text-sm md:text-2xl text-semibold">
              Best Agency in the <span className="text-green-600">World</span>
            </p>
            <h1 className="text-5xl md:text-6xl font-bold">Digtal Agency</h1>
            <h1 className="text-3xl md:text-4xl">& Solution</h1>
            <p className="text-sm md:text-lg text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex eaque
              dolorem, quidem eum earum repudiandae.
            </p>
            <div className="flex space-x-5 py-5">
              <button className="flex items-center space-x-2 px-5 py-2 bg-green-600  text-green-500 rounded font-semibold">
                <span className="text-white">Get Started</span>
                <div className="p-1 bg-white rounded-full">
                  <AiOutlineRight />
                </div>
              </button>
              <button className="flex items-center space-x-2  px-5 py-2 bg-white rounded  drop-shadow-xl">
                <span>See Live Demo </span>
                <FaPlay className="text-green-500" />
              </button>
            </div>
          </div>
          <div className="  self-end  overflow-hidden">
            <img src="pro.svg" alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full absolute -bottom-10">
          <div className="w-11/12 md:w-4/5 m-auto bg-white rounded drop-shadow-xl grid grid-cols-2 md:grid-cols-3 space-y-5 md:space-y-0 lg:flex justify-between items-center p-8">
            <div className="flex space-x-2 items-center font-bold">
              <SiNextdotjs size={28} />
              <span>Next Js</span>
            </div>
            <div className="flex space-x-2 items-center font-bold">
              <img src="./react_icon.png" alt="" className="w-12 h-12 " />
              <span>React Js</span>
            </div>
            <div className="flex space-x-2 items-center font-bold">
              <img src="./pinterest_icon.png" alt="" className="w-12 h-12 " />
              <span>Pinterest</span>
            </div>
            <div className="flex space-x-2 items-center font-bold">
              <img src="./facebook_icon.png" alt="" className="w-12 h-12 " />
              <span>Facebook</span>
            </div>
            <div className="flex space-x-2 items-center font-bold">
              <img src="./linkedin_icon.png" alt="" className="w-12 h-12 " />
              <span>Linked In</span>
            </div>
            <div className="flex space-x-2 items-center font-bold">
              <img src="./pinterest_icon.png" alt="" className="w-12 h-12 " />
              <span>Pinterest</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
