"use client";
/* Allcollection.js */

import React, { useState } from "react";
import Image from "next/image";
import "./style.css"; // Import the CSS file

const Allcollection = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      imageSrc: "/slider-all.jpg",
      cardImageSrc: "/color-threds.jpg", // Background image for the card
      description: "Description for Product 1",
      subcategories: ["Subcategory A", "Subcategory B"],
    },
    {
      id: 2,
      name: "Product 2",
      imageSrc: "/slider(1).jpg",
      cardImageSrc: "/product-card-bg2.jpg", // Background image for the card
      description: "Description for Product 2",
      subcategories: ["Subcategory C", "Subcategory D"],
    },
    {
      id: 3,
      name: "Product 3",
      imageSrc: "/slider(3).jpg",
      cardImageSrc: "/product-card-bg2.jpg", // Background image for the card
      description: "Description for Product 3",
      subcategories: ["Subcategory E", "Subcategory F"],
    },
    {
      id: 4,
      name: "Product 4",
      imageSrc: "/slider(4).jpg",
      cardImageSrc: "/product-card-bg2.jpg", // Background image for the card
      description: "Description for Product 4",
      subcategories: ["Subcategory G", "Subcategory H"],
    },
    // Add more product entries here
  ];

  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <>
      <div className="h-20 w-screen bg-black"></div>
      <div className="flex flex-row">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative w-1/3 h-72 bg-slate-950 shadow-sm rounded-xl my-5 mx-7 transform transition-transform duration-300 hover:scale-105 flip-card ${
              hoveredProductId === product.id ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="flip-card-inner w-full h-72">
              <div className="flip-card-front w-full h-72">
                <Image
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-72 shadow-xl"
                  inputMode="true"
                  objectFit="fill"
                  alt="image"
                  src={product.imageSrc}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h1 className="text-white font-bold text-6xl">
                    {product.name}
                  </h1>
                </div>
              </div>
              <div className="flip-card-back w-full h-72 bg-white text-black">
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-semibold mb-4">
                    Subcategories:
                  </h2>
                  {product.subcategories.map((subcategory, index) => (
                    <p key={index} className="mb-2">
                      {subcategory}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Allcollection;
