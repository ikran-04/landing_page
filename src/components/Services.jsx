import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { HiCode } from "react-icons/hi";
import { BsCheck2Circle } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
const Services = () => {
  return (
    <div className="w-full bg-[url('/serv.jpg')] bg-cover my-10">
      <div className="w-11/12 md:w-4/5 m-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-52 py-10">
        <div className="md:w-1/2 2xl:w-1/3 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 ">
          <div className="space-y-10 mt-52">
            <div className=" p-8 bg-white rounded-lg drop-shadow-xl space-y-4">
              <PiBracketsCurlyBold size={28} className="text-green-500" />
              <h1 className="font-bold">Web Development</h1>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illum iusto reprehenderit!
              </p>
              <button className="px-5 py-2 bg-green-400 text-white flex space-x-2 items-center rounded-full">
                <span>More Details</span>{" "}
                <AiOutlineRight
                  size={22}
                  className="p-1 rounded-full bg-white text-green-500"
                />
              </button>
            </div>
            <div className=" p-8 bg-white rounded-lg drop-shadow-xl space-y-4">
              <HiCode size={28} className="text-green-500" />
              <h1 className="font-bold">Web Development</h1>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illum iusto reprehenderit!
              </p>
              <button className="px-5 py-2 bg-green-400 text-white flex space-x-2 items-center rounded-full">
                <span>More Details</span>{" "}
                <AiOutlineRight
                  size={22}
                  className="p-1 rounded-full bg-white text-green-500"
                />
              </button>
            </div>
          </div>
          <div className="space-y-10">
            <div className=" p-8 bg-green-600 text-white rounded-lg drop-shadow-xl space-y-4">
              <BsCheck2Circle size={28} />
              <h1 className="font-bold">Web Development</h1>
              <p className="text-gray-200 00 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illum iusto reprehenderit!
              </p>
              <button className="px-5 py-2 bg-green-400 text-white flex space-x-2 items-center rounded-full">
                <span>More Details</span>{" "}
                <AiOutlineRight
                  size={22}
                  className="p-1 rounded-full bg-white text-green-500"
                />
              </button>
            </div>
            <div className=" p-8 bg-white rounded-lg drop-shadow-xl space-y-4">
              <FaLaptopCode size={28} className="text-green-500" />
              <h1 className="font-bold">Web Development</h1>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                illum iusto reprehenderit!
              </p>
              <button className="px-5 py-2 bg-green-400 text-white flex space-x-2 items-center rounded-full">
                <span>More Details</span>{" "}
                <AiOutlineRight
                  size={22}
                  className="p-1 rounded-full bg-white text-green-500"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 space-y-5">
          <p className="text-xl text-green-500 font-bold">About Us</p>
          <h1>
            <span className="text-5xl font-bold"> Our Service</span> <br />{" "}
            <span className="text-4xl">Include</span>
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            pariatur atque reprehenderit enim fugit totam sit! Facilis
            asperiores dolorum magni illo eveniet sed nam repellat.
          </p>
          <button className="px-5 py-2 bg-green-200 text-green-800 flex space-x-2 items-center rounded-full ">
            <span>All Services</span>{" "}
            <AiOutlineRight
              size={22}
              className="p-1 rounded-full bg-white text-green-500"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
