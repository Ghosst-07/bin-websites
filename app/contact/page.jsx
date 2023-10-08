"use client";
import React, { useState } from "react";

const Contact = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-bold">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl mb-6 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div
            className={`mb-8 ${
              currentPage === 1 ? "block" : "hidden"
            } transition-opacity duration-500`}
          >
            <h2 className="text-2xl mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>123 Main St, City,
              Country
            </p>
            <p className="text-gray-300 mb-2">
              <i className="fas fa-phone-alt mr-2"></i>+1 (123) 456-7890
            </p>
            <p className="text-gray-300 mb-2">
              <i className="fas fa-envelope mr-2"></i>contact@example.com
            </p>
          </div>
          {/* Right Column - Contact Form */}
          <div
            className={`bg-gray-800 p-6 rounded-lg shadow-md ${
              currentPage === 2 ? "block" : "hidden"
            } transition-opacity duration-500`}
          >
            <h2 className="text-2xl mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full py-2 px-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full py-2 px-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows="4"
                  className="w-full py-2 px-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Navigation Buttons */}
          <div className="col-span-2 text-center mt-6">
            <button
              onClick={prevPage}
              className={`${
                currentPage === 1 ? "hidden" : "block"
              } bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600 transition duration-300`}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              className={`${
                currentPage === 2 ? "hidden" : "block"
              } bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
