import React from "react";

import { AiOutlineRight } from "react-icons/ai";

const About = () => {
  return (
    <div className="bg-[url('/about2.jpg')] bg-cover">
      <div className="py-28 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="md:w-1/3 space-y-5">
          <p className="text-green-500 font-semibold">About Us</p>
          <h1 className="text-3xl md:text-5xl font-bold">
            Boots Your Bussiness With 8kra
          </h1>
          <p className="text-sm md:text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            pariatur atque reprehenderit enim fugit totam sit! Facilis
            asperiores dolorum magni illo eveniet sed nam repellat.
          </p>
          <button className="px-5 py-2 bg-green-400 text-white flex space-x-2 items-center">
            <span>More Details</span>{" "}
            <AiOutlineRight
              size={22}
              className="p-1 rounded-full bg-white text-green-500"
            />
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="about 1.jpg"
            alt=""
            className="rounded-b-[50px] rounded-tl-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
