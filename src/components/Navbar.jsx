import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-11/12 md:w-4/5 m-auto py-5 flex justify-between item-center">
      <h1 className="text-4xl font-bold text-green-600">8kra</h1>
      <ul className="flex items-center space-x-2 text-sm md:text-base md:space-x-8 text-cyan-800 md:text-cyan-100 hidden md:flex">
        <li>Home</li>
        <li>Our Work</li>
        <li>Services</li>
        <li>About</li>
        <li className="px-5 py-2 rounded-full bg-green-600">Contact</li>
      </ul>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" flex md:hidden text-white-500"
      >
        <HiBars3BottomRight size={"2rem"} />
      </button>
      {isOpen && (
        <div className=" md:hidden modal absolute top-0 right-0 w-[200px] p-5 bg-green-400 border">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" flex md:hidden  text-white"
          >
            <AiOutlineClose size={"2rem"} />
          </button>
          <ul className="flex flex-col space-y-5">
            <a href="/" onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:bg-green-100 rounded-md">Home</li>
            </a>
            <a href="/residential" onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:bg-green-100 rounded-md">
                Residential Care
              </li>
            </a>
            <a href="/" onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:bg-green-100 rounded-md">
                Service Packages
              </li>
            </a>
            <a href="/comercial" onClick={() => setIsOpen(false)}>
              <li className="p-2 hover:bg-green-100 rounded-md">
                Commercial care
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
