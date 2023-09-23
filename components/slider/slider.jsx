"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 25000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src="/slider(1).jpg"
          width={1920}
          height={1080}
          alt="sliderImage"
        />
        <div
          className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center
          backdrop-brightness-75"
        >
          <h1 className="animated-text text-white text-8xl font-bold drop-shadow-md testFont md:text-9xl">
            BINARAH
          </h1>
          <div className="mt-4">
            <h2 className="text-white text-3xl drop-shadow-md">
              Unveiling the Beauty of Handcrafted Rugs
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slider(3).jpg"
          width={1920}
          height={1080}
          alt="sliderImage"
        />
        <div className="backdrop-brightness-75 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white text-9xl font-bold drop-shadow-md testFont">
            BINARAH
          </h1>
          <div className="mt-4">
            <h2 className="text-white text-3xl drop-shadow-md">
              Unveiling the Beauty of Handcrafted Rugs
            </h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
