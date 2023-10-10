import React from "react";
import Title from "./components/title/title";
import Images from "./components/4images/images";
import Content from "./components/content/content";
import Footer from "@/components/footer/footer";

const LegacyHome = () => {
  return (
    <>
      <video
        src="/video/legacy.mp4"
        muted
        loop
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
