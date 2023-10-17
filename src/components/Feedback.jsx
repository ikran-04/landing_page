import React from "react";

import { AiFillStar } from "react-icons/ai";
const Feedback = () => {
  return (
    <div className="bg-[url('/fedback.jpg')] bg-cover py-20">
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-xl">TESTIMONIAL</h1>
        <h1 className="font-bold text-2xl text-green-500">
          OUR CLIENT FEEDBACK
        </h1>
        <div className="w-11/12 md:w-1/2  p-2 md:p-10 my-10 bg-white rounded-tr-xl rounded-tl-[60px] rounded-br-[60px] rounded-bl-xl text-center drop-shadow-2xl flex flex-col items-center drop">
          <p className="p-4 text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            eligendi quidem ab saepe ipsa rerum at earum quae odit minus
            blanditiis explicabo vitae nesciunt deserunt, sed minima aliquid
            inventore distinctio dignissimos facere voluptatibus. Quidem
            suscipit in
          </p>

          <div className="flex items-center space-x-1 text-yellow-500 md:py-5">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div>
            <h1 className="font-bold text-base md:text-xl">Ikran Hashi</h1>
            <p className="text-xs md:text-sm text-gray-500">
              Web Developer|UI/UX Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
