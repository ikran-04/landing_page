import React from "react";

const ContactUs = () => {
  return (
    <div className="w-11/12 md:w-4/5 m-auto py-10 flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center">
      <div className="md:w-1/3 space-y-5">
        <p className=" font-semibold">Contact Us</p>
        <h1 className="text-6xl font-bold text-green-800">Get In Touch!</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          pariatur atque reprehenderit enim fugit totam sit! Facilis asperiores
          dolorum magni illo eveniet sed nam repellat.
        </p>
      </div>
      <div className="md:w-1/3">
        <h1 className="text-2xl font-bold">Send Message</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint,
          provident labore maiores molestiae ad ullam obcaecati voluptate?
        </p>
        <div>
          <form className="py-5">
            <div className="space-y-2">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="border-b border-gray-800 outline-0 text-gray-400"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="border-b border-gray-800 outline-0 text-gray-400"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="font-semibold">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  className="border-b border-gray-800 outline-0 text-gray-400"
                ></textarea>
              </div>
            </div>
            <div className="my-4">
              <button className="px-8 py-2 rounded bg-green-500 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
