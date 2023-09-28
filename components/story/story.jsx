import React from "react";
import { Parallax } from "react-parallax";
const imageDemo = "/story-slider.jpg";
const Story = () => {
  return (
    <div className=" fex justify-center items-center ">
      <Parallax bgImage={imageDemo} strength={1000}>
        <div className="h-96 flex flex-col justify-center items-center">
          <div className="text-1xl text-center md: text-5xl drop-shadow-md ">
            Unveiling Untold Narratives:<br></br>
            The Lives behind Handcrafted Rugs
          </div>
          <button className="bg-black text-white px-3 py-2 text-2xl mt-8 hover:bg-black/80 ">
            View Stories
          </button>
        </div>
      </Parallax>
    </div>
  );
};

export default Story;
