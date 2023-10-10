import React from "react";
import Image from "next/image";
const Register = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.75)] backdrop-blur-md"></div>
      <div className="w-full max-w-md p-4 rounded-lg z-10 absolute bg-white dark:bg-black shadow-2xl">
        <button
          className="close-btn absolute top-2 right-2 text-black dark:text-white text-2xl"
          onClick={() => {
            onClose();
          }}
        >
          &times;
        </button>

        <div className="flex flex-col justify-center items-center space-y-4">
          <Image
            className="pt-5"
            alt="logo"
            width={300}
            height={200}
            src="/logo-light.png"
          />
          <h1 className="text-black dark:text-white text-2xl py-5">Register</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="text-white bg-transparent bg-opacity-20 rounded-md w-full pl-10 pr-4 py-2 border-b border-black dark:border-white focus:outline-none focus:border-gray-400"
            />
            <i className="fa  fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white"></i>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className="text-white bg-transparent bg-opacity-20 rounded-md w-full pl-10 pr-4 py-2 border-b border-black dark:border-white focus:outline-none focus:border-gray-400"
            />
            <i className="fa fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white"></i>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Category"
              className="text-white bg-transparent bg-opacity-20 rounded-md w-full pl-10 pr-4 py-2 border-b border-black dark:border-white focus:outline-none focus:border-gray-400"
            />
            <i className="fa fa-list-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white"></i>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Message"
              className="mb-5 text-white bg-transparent bg-opacity-20 rounded-md w-full pl-10 pr-4 py-2 border-b border-black dark:border-white focus:outline-none focus:border-gray-400"
            />
            <i className="pb-5 fa  fa-comment absolute left-3 top-1/2 transform -translate-y-1/2 text-black dark:text-white"></i>
          </div>
          <h1 className="text-white text-center px-11">
            You will receive an eamil containing your password to login
          </h1>
          <button className=" my-5 bg-white  hover:bg-gradient-to-r hover:opacity-50 px-10 py-2 rounded-lg transition duration-300 ease-in-out">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
