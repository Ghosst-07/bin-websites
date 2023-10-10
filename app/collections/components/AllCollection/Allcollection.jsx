"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./style.css"; // Import the CSS file
import "font-awesome/css/font-awesome.min.css";
import Login from "../login/login";
import Register from "../register/register";

const Allcollection = () => {
  const products = [
    {
      id: 1,
      name: "Cotton Weaves",
      imageSrc: "/DP/Cotton.jpg",
      description: "Description for Product 1",
      subcategories: [
        "Cotton Rug",
        "Cotton Stripe",
        "Cotton Reversible Rug",
        "Cotton Chenille Rug",
        "Cotton Chindi Rug",
      ],
    },
    {
      id: 2,
      name: "Wool Wonders",
      imageSrc: "/DP/Wool.jpg",
      description: "Description for Product 2",
      subcategories: ["Wool Rug", "Wool Stripe Rug", "Wool Felt Rug"],
    },
    {
      id: 3,
      name: "Sustainable Comfort",
      imageSrc: "/DP/Sus.jpg",
      description: "Description for Product 3",
      subcategories: ["PET Rug", "PET Stripe Rug"],
    },
    {
      id: 4,
      name: "Nature's Medley",
      imageSrc: "/DP/Jute.jpg",
      cardImageSrc: "/product-card-bg2.jpg", // Background image for the card
      description: "Description for Product 4",
      subcategories: ["Jute Rug", "Jute Braided Rug"],
    },
    {
      id: 5,
      name: "Cushion & Beyond",
      imageSrc: "/DP/Cushion.jpg",
      description: "Description for Product 4",
      subcategories: ["Cotton Cushion", "Wool Cushion", "PET Cushion"],
    },
    {
      id: 6,
      name: "Bath Bliss",
      imageSrc: "/DP/BathBliss.jpg",
      description: "Description for Product 4",
      subcategories: ["Bathmat"],
    },
  ];
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSubcategoryClick = () => {
    setSelectedSubcategory("login");
  };

  const closePopup = () => {
    console.log("close");
    setSelectedSubcategory(null);
  };

  return (
    <>
      <div className="h-20 w-screen bg-black"></div>
      <div className="text-center text-4xl mt-5">Our Collections</div>
      <div className="flex flex-wrap justify-center mt-5 mb-5">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 h-72 bg-slate-950 shadow-sm rounded-xl mt-2 mb-2 mx-1 transform transition-transform duration-300 flip-card ${
              hoveredProductId === product.id ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="flip-card-inner border-none w-full h-72">
              <div
                className={`flip-card-front w-full h-72 ${
                  hoveredProductId === product.id ? "flipped" : ""
                }`}
              >
                <Image
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-72 shadow-xl opacity-75"
                  inputMode="true"
                  objectFit="fill"
                  alt="image"
                  src={product.imageSrc}
                />
                <div className="absolute inset-0 flex flex-grow-0 justify-center items-center">
                  <h1 className="text-white font-bold text-3xl text-center">
                    {product.name}
                  </h1>
                </div>
              </div>
              <div
                className={`flip-card-back border-none w-full h-72 bg-white/5 text-black ${
                  hoveredProductId === product.id ? "flipped" : ""
                } card-back`} // Apply the card-back class
              >
                {/* Use the same image, flipped and slightly blurred */}
                <Image
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-72 shadow-xl opacity-75 -scale-x-100 blur-sm"
                  style={{}}
                  inputMode="true"
                  objectFit="fill"
                  alt="image"
                  src={product.imageSrc}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 backdrop-blur-m backdrop-filter rounded-lg">
                  {product.subcategories.map((subcategory, index) => (
                    <div
                      onClick={handleSubcategoryClick}
                      key={index}
                      className="cursor-pointer mb-2 rounded-lg bg-black/10 w-2/3 hover:bg-black/25 px-2 py-1"
                    >
                      <p className="text-red-50">- {subcategory}</p>
                    </div>
                  ))}
                </div>
                {/* Fullscreen Centered Popup */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedSubcategory === "login" ? (
        <Login
          onClose={closePopup}
          onRegister={() => {
            closePopup();
            setSelectedSubcategory("register");
          }}
        />
      ) : selectedSubcategory === "register" ? (
        <Register onClose={closePopup} />
      ) : null}
    </>
  );
};

export default Allcollection;
