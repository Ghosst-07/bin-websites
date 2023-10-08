import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./grid.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Removed Navigation

const images = [
  {
    id: 1,
    src: "/DP/Cotton.jpg",
    alt: "Image 1",
    title: "Cotton Weaves",
    subtitle: "Rugs for Every Space",
  },
  {
    id: 2,
    src: "/DP/Wool.jpg",
    alt: "Image 2",
    title: "Wool Wonders",
    subtitle: "Warmth Unveiled",
  },
  {
    id: 3,
    src: "/DP/Sus.jpg",
    alt: "Image 3",
    title: "Sustainable Comfort",
    subtitle: "Rugs That Care for the Planet",
  },
  {
    id: 4,
    src: "/DP/BathBliss.jpg",
    alt: "Image 4",
    title: "Bath Bliss",
    subtitle: "Soft and Absorbent",
  },
  {
    id: 5,
    src: "/DP/Cushion.jpg",
    alt: "Image 5",
    title: "Cushion & Beyond",
    subtitle: "Redefine Home Decor",
  },
  {
    id: 5,
    src: "/DP/Jute.jpg",
    alt: "Image 6",
    title: "Nature's Medley",
    subtitle: "Nature's Embrace Underfoot",
  },
];

const SliderCarousel = () => {
  return (
    <>
      <div className="py-5">
        <h1 className="text-3xl text-center font-medium font-sans">
          Explore Whats New
        </h1>
      </div>
      <div className="sample-slider rounded-lg">
        <div className="w-full swiper-wrapper">
          <Swiper
            slidesOffsetAfter={"0"}
            speed={3500} // Lowered speed for quicker transition
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView="auto"
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true, // added
              disableOnInteraction: false, // added
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 2,
              },
            }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="w-full h-72 relative group rounded-md hover:scale-150">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40">
                    <h2 className="text-2xl text-white">{image.title}</h2>
                    <p className="text-sm text-white">{image.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderCarousel;
