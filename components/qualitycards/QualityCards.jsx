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
      description: "We ensure your orders are delivered on time.",
    },
    {
      icon: <FaThumbsUp />,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority. and will always be",
    },
  ];

  return (
    <div className="w-30">
      <div className="flex p-10 gap-2 justify-center items-center">
        {qualityData.map((card, index) => (
          <div
            className="bg-white  mt-5 pt-3 mb-5 h-40 flex flex-col justify-center items-center hover:shadow-lg"
            key={index}
          >
            <div className="icon pt-5">{card.icon}</div>
            <h3 className="text-center">{card.title}</h3>
            <p className="text-center p-1 mb-5">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityCards;
