import React from "react";

function Welcome() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div className="flex flex-col w-full md:w-1/2 justify-center items-start p-8">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Welcome to Binarah
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover the exquisite world of handcrafted elegance at Binarah. For
          generations, we&rsquo;ve been dedicated to the art of handwoven rugs,
          carpets, and accessories. Our creations are not just floor coverings;
          they are stories told through intricate patterns, vibrant colors, and
          a dedication to perfection.
        </p>
      </div>
      <div className="w-full md:w-1/2 py-6 text-center flex justify-center items-center  ">
        <video
          className="drop-shadow-md"
          src="/video/homevid.mp4"
          loop
          muted
          autoPlay // Add the autoPlay attribute to auto-play the video
        ></video>
      </div>
    </div>
  );
}

export default Welcome;
