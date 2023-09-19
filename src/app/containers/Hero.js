"use client";
import Image from "next/image";
import React from "react";
import heroImage from "../assets/item1.png";
import { Inter } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={true}>
      <div
        className={`max-w-8xl mx-auto flex items-stretch bg-heroBg bg-cover bg-no-repeat ${inter.className}`}>
        <div className="flex flex-col gap-8 items-start py-28 pl-16 w-3/5">
          <h2 className="text-white opacity-80 text-3xl">
            Best Deal Online on Computers
          </h2>
          <h1 className="text-white text-6xl font-bold text-start">
            Save Big with Exclusive Deals!
          </h1>
          <h3 className="text-2xl font-bold px-1 py-0.5 text-[#0F121E] bg-[#E4B200] mt-4">
            UP to 40% OFF
          </h3>
        </div>
        <div className="w-2/5 h-full">
          <Image src={heroImage} alt="carousel Image" priority={true} />
        </div>
      </div>
      <div
        className={`max-w-8xl mx-auto flex items-stretch bg-heroBg bg-cover bg-no-repeat ${inter.className}`}>
        <div className="flex flex-col gap-8 items-start py-28 pl-16 w-3/5">
          <h2 className="text-white opacity-80 text-3xl">
            Best Deal Online on Computers
          </h2>
          <h1 className="text-white text-6xl font-bold text-start">
            Save Big with Exclusive Deals!
          </h1>
          <h3 className="text-2xl font-bold px-1 py-0.5 text-[#0F121E] bg-[#E4B200] mt-4">
            UP to 40% OFF
          </h3>
        </div>
        <div className="w-2/5 h-full">
          <Image src={heroImage} alt="carousel Image" priority={true} />
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
