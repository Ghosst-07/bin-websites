import React from "react";
import Title from "./components/title/title";
import Images from "./components/4images/images";
import Content from "./components/content/content";

const LegacyHome = () => {
  return (
    <>
      <video
        src="https://cdn.shopify.com/videos/c/o/v/19eba4fe7cbe48b18031178b2e663363.mp4"
        muted
        autoPlay // Add the autoPlay attribute to auto-play the video
      ></video>

      <Title />
      <div className="bg-black  mx-40 mb-2" style={{ height: "1px" }} />
      <Images />

      <Content />
    </>
  );
};

export default LegacyHome;
