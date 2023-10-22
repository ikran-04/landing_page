import React from "react";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-20">
      <div className="w-11/12 md:w-4/5 m-auto grid grid-cols-2 md:flex justify-between items-start">
        <div className="md:w-1/3"> 
      <h1 className="text-4xl font-bold text-green-600"><img src="/logo.png" alt="" className="w-16 h-16" /></h1>
          <p className="text-gray-500 py-2 text-xs md:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            eum sed nulla cum dignissimos. Debitis?
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Services</h1>
          <div className="flex flex-col space-y-2 text-gray-500 text-sm	py-2">
            <a href="">Web Design</a>
            <a href="">Web Development</a>
            <a href="">full stack</a>
            <a href="">Web Design</a>
            <a href="">Web Design</a>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Services</h1>
          <div className="flex flex-col space-y-2 text-gray-500 text-sm	py-2">
            <a href="">Web Design</a>
            <a href="">Web Development</a>
            <a href="">full stack</a>
            <a href="">Web Design</a>
            <a href="">Web Design</a>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Our Addres</h1>
          <div>
            <p>Doe@gmail.com</p>
            <p>www.john.com</p>
          </div>
          <div className="flex space-x-8 items-center text-gray-500">
            <AiFillInstagram size={28} />
            <BsFacebook size={28} />
            <BsPinterest size={28} />
            <AiFillLinkedin size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
