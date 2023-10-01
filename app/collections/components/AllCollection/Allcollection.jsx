"use client";
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

    {
      id: 5,
      name: "Product 5",
      imageSrc: "/slider(4).jpg",
      cardImageSrc: "/product-card-bg2.jpg", // Background image for the card
      description: "Description for Product 4",
      subcategories: ["Subcategory G", "Subcategory H"],
    },
  ];
  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <>
      <div className="h-20 w-screen bg-black"></div>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 h-72 bg-slate-950 shadow-sm rounded-xl my-5 mx-1 transform transition-transform duration-300 flip-card ${
              hoveredProductId === product.id ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="flip-card-inner w-full h-72">
              <div
                className={`flip-card-front w-full h-72 ${
                  hoveredProductId === product.id ? "flipped" : ""
                }`}
              >
                <Image
                  width={400}
                  height={400}
                  className="rounded-xl w-full h-72 shadow-xl"
                  inputMode="true"
                  objectFit="fill"
                  alt="image"
                  src={product.imageSrc}
                />
                <div className="absolute inset-0 flex flex-grow-0 justify-center items-center">
                  <h1 className="text-white font-bold text-6xl">
                    {product.name}
                  </h1>
                </div>
              </div>
              <div
                className={`flip-card-back w-full h-72 bg-white text-black ${
                  hoveredProductId === product.id ? "flipped" : ""
                }`}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-red-400 rounded-lg ">
                  <h2 className="text-2xl font-semibold mb-4">
                    Subcategories:
                  </h2>
                  {product.subcategories.map((subcategory, index) => (
                    <div
                      onClick={() => {
                        console.log("sd");
                      }}
                      key={index}
                      className="cursor-pointer mb-2 rounded-lg w-2/3 hover:bg-black/10 px-2 py-1"
                    >
                      <p className=" text-red-50">{subcategory}</p>
                    </div>
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
