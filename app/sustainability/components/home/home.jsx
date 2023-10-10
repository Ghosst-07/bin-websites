import React from "react";
import { FaRecycle, FaLeaf, FaTree, FaCloud } from "react-icons/fa";
import "./style.css";
import Image from "next/image";

function SustainabilityPage() {
  const bgimage =
    "url('https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')";

  const cardsData = [
    {
      title: "Renewable Energy",
      description: "We use 100% renewable energy sources.",
      bgColor: "bg-green-400",
      hoverColor: "bg-green-500",
      icon: <FaLeaf />,
    },
    {
      title: "Zero Waste",
      description: "We are committed to producing zero waste.",
      bgColor: "bg-blue-400",
      hoverColor: "bg-blue-500",
      icon: <FaRecycle />,
    },
    {
      title: "Afforestation",
      description: "We plant a tree for every product sold.",
      bgColor: "bg-orange-400",
      hoverColor: "bg-orange-500",
      icon: <FaTree />,
    },
    {
      title: "Carbon Neutral",
      description: "We offset our carbon emissions to be carbon neutral.",
      bgColor: "bg-purple-400",
      hoverColor: "bg-purple-500",
      icon: <FaCloud />,
    },
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        {/* First Section */}
        <div
          className="bg-cover bg-center h-screen text-white relative overflow-hidden"
          style={{
            backgroundImage: bgimage,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-6xl sm:text-8xl font-bold mb-4">
                Welcome to Our{" "}
                <span className="text-green-500 morphing-text">
                  Sustainable
                </span>{" "}
                World
              </h1>
              <p className="text-lg sm:text-xl animate__animated animate__fadeInUp animate__delay-1s">
                Discover our eco-friendly initiatives and commitment to a
                greener future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl px-2 sm:text-4xl font-bold mb-8">
              Our Sustainable Practices
            </h2>
          </div>
          <div className="grid grid-cols-1 px-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-lg text-center ${card.bgColor} hover:${card.hoverColor} transition-colors duration-300 ease-in-out`}
              >
                <div className="text-4xl text-white mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-bold mb-8">
            Get in Touch With Us
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Have questions or want to collaborate on sustainability projects?
            Reach out to us!
          </p>

          {/* Contact Form */}
          <form className="w-2/3 mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="block w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-lg font-semibold rounded-lg focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Add more sections as needed */}
    </>
  );
}

export default SustainabilityPage;
