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
          top: mousePosition.y - 20,
          left: mousePosition.x - 20,
          width: "40px",
          height: "40px",
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
      <Story
        imageUrl="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        title="Test"
      />
      <QualityCards />
      <Sustainable />
    </>
  );
}

export default Home;
