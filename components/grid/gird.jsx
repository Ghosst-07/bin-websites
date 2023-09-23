import React from "react";
import "../grid/grid.css";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "https://picsum.photos/id/1018/800/600",
    alt: "Image 1",
    title: "Title 1",
    subtitle: "Subtitle 1",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1015/800/600",
    alt: "Image 2",
    title: "Title 2",
    subtitle: "Subtitle 2",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/1019/800/600",
    alt: "Image 3",
    title: "Title 3",
    subtitle: "Subtitle 3",
  },
  {
    id: 4,
    src: "https://picsum.photos/id/1020/800/600",
    alt: "Image 4",
    title: "Title 4",
    subtitle: "Subtitle 4",
  },
];

const Grid = () => {
  return (
    <>
      <div className="pt-10">
        <h1 className="text-4xl text-center font-medium">Latest Collection</h1>{" "}
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
                <p className="text-sm">{image.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Grid;
