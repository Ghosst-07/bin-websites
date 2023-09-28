"use client";
import Grid from "@/components/grid/gird";
import QualityCards from "@/components/qualitycards/QualityCards";
import Slider from "@/components/slider/slider";
import Story from "@/components/story/story";
import Sustainable from "@/components/sustainable/sustainable";
import Welcome from "@/components/welcome/welcome";
import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: mousePosition.y - 10,
          left: mousePosition.x - 10,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "2px solid #fff",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      <Slider />
      <Grid />
      <Welcome />
      <Story />
      <QualityCards />
      <Sustainable />
    </>
  );
}

export default Home;
