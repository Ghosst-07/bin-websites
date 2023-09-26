import React from "react";
import "./sustainable.css";
import { FaLeaf, FaRecycle, FaTree } from "react-icons/fa";
import { Parallax } from "react-parallax";
const Sustainable = () => {
  return (
    <div className="">
      <Parallax bgImage="/earth.jpg" strength={500} blur={5}>
        <div
          className="flex flex-col justify-center items-center p-10 
         "
        >
          <h2
            className="text-white text-5xl font-bold
       text-center"
          >
            Our Commitment to Sustainability
          </h2>
          <p className="text-white pt-5 text-center text-2xl">
            At Binarah, sustainability is at the heart of everything we do.{" "}
            <br /> We are dedicated to reducing our environmental footprint and
            creating a positive impact on the world.
          </p>

          <div className="flex justify-around w-screen px-52 py-10">
            <div className="icon" style={{ color: "white" }}>
              <FaRecycle />
            </div>
            <div className="icon" style={{ color: "white" }}>
              <FaTree />
            </div>
            <div className="icon" style={{ color: "white" }}>
              <FaLeaf />
            </div>
          </div>

          {/*  <div className="sustainable-images flex justify-center">
          <Image width={700} height={200} alt="sustain" src="/earth.jpg" />
        </div> */}

          <p className="text-white text-2xl text-center">
            We use eco-friendly materials, reduce waste in our production
            process, and support fair labor practices.
            <br /> Our commitment to sustainability is not just a promise; it is
            a way of doing business.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Sustainable;
