import React from "react";

const OurTeam = () => {
  return (
    <div className="bg-[url('/ourteam.jpg')] object-cover flex flex-col items-center py-10">
      <div className="w-11/12 md:w-1/2 m-auto text-center space-y-2">
        <h1 className="text-xl">Our Members</h1>
        <h1 className="text-5xl font-bold">Meet Our Team</h1>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquam
          at eaque enim nulla. Nemo ducimus ab ipsa facere asperiores,
          voluptatem repellendus reiciendis quidem voluptas.
        </p>
      </div>

      <div className="w-11/12 md:w-4/5 m-auto p-5 flex flex-col md:flex-row justify-center md:space-x-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src="profile1.jpg"
            alt=""
            className="rounded-xl w-full md:w-56 md:h-56 my-2 object-cover"
          />
          <h1 className="text-xl text-gray-800 font-bold">John Doe</h1>
          <p className="text-sm text-gray-400">Fullstack Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="profile2.jpg"
            alt=""
            className="rounded-xl w-full md:w-56 md:h-56 my-2 object-cover"
          />
          <h1 className="text-xl text-gray-800 font-bold">John Doe</h1>
          <p className="text-sm text-gray-400">Fullstack Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="profile3.jpg"
            alt=""
            className="rounded-xl w-full md:w-56 md:h-56 my-2 object-cover"
          />
          <h1 className="text-xl text-gray-800 font-bold">John Doe</h1>
          <p className="text-sm text-gray-400">Fullstack Developer</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="profile4.jpg"
            alt=""
            className="rounded-xl w-full md:w-56 md:h-56 my-2 object-cover"
          />
          <h1 className="text-xl text-gray-800 font-bold">John Doe</h1>
          <p className="text-sm text-gray-400">Fullstack Developer</p>
        </div>
      </div>

      <button className="px-8 py-2 my-5 rounded-full bg-green-500 text-white font-bold border-4 border-green-300">
        Join Now!
      </button>
    </div>
  );
};

export default OurTeam;
