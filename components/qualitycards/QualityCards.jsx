import React from "react";
import "./QualityCards.css";
import {
  FaStar,
  FaLeaf,
  FaHandHoldingHeart,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa"; // Import icons from react-icons (you can choose other icon libraries)

const QualityCards = () => {
  // Data for quality cards
  const qualityData = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Handcrafted",
      description: "Each item is carefully handcrafted by skilled artisans.",
    },
    {
      icon: <FaStar />,
      title: "Quality",
      description: "We are committed to providing top-quality products.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainable",
      description: "Our products are made with sustainability in mind.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description:
        "We ensure your orders are delivered on time and are always the best you can get.",
    },
    {
      icon: <FaThumbsUp />,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority and will always be.",
    },
  ];

  return (
    <div className="flex flex-wrap">
      {qualityData.map((card, index) => (
        <div
          className="w-full pt-4 sm:w-1/2 lg:w-1/5 px-4 mb-4"
          key={index}
          // Use lg:w-1/5 for large screens, sm:w-1/2 for small screens
        >
          <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl h-full flex flex-col">
            <div className="icon text-4xl mb-3">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 flex-grow">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QualityCards;
