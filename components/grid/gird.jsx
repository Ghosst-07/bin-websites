import React from "react";
import "../grid/grid.css";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "https://picsum.photos/id/1018/800/600",
    alt: "Image 1",
    title: "Cotton Weaves",
    subtitle: "Rugs for Every Space",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1015/800/600",
    alt: "Image 2",
    title: "Wool Wonders",
    subtitle: "Warmth Unveiled",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/1019/800/600",
    alt: "Image 3",
    title: "Sustainable Comfort",
    subtitle: "Rugs That Care for the Planet",
  },
  {
    id: 4,
    src: "https://picsum.photos/id/1020/800/600",
    alt: "Image 4",
    title: "Bath Bliss",
    subtitle: "Soft and Absorbent",
  },
  {
    id: 5,
    src: "https://picsum.photos/id/1020/800/600",
    alt: "Image 4",
    title: "Cushion & Beyond",
    subtitle: " Redefine Home Decor",
  },
];

const Grid = () => {
  return (
    <>
      <div className="pt-10">
        <h1 className="text-3xl text-center font-medium font-sans">
          Explore What&apos;s New
        </h1>{" "}
      </div>
      <div className="parallax-grid px-8 py-8">
        {images.map((image) => (
          <Link key={image.id} href={"/collection"}>
            {" "}
            <div key={image.id} className="parallax-grid-item">
              <div
                className="parallax-grid-image"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="parallax-grid-content">
                <h2 className="text-2xl text-">{image.title}</h2>
                <p className="text-sm text-white">{image.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Grid;
