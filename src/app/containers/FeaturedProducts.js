"use client";
import React from "react";
import { H3, HomeProduct } from "../components";
import item1Img from "../assets/item1.png";
import item2Img from "../assets/item2.png";
import item3Img from "../assets/item3.png";
import item4Img from "../assets/item4.png";
import item5Img from "../assets/item5.png";
import leftarrow from "../assets/leftarrow.png";
import nextarrow from "../assets/rightarrow.png";


import Carousel from "react-bootstrap/Carousel";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { useRef } from "react";

import Head from 'next/head';


const FeaturedProducts = () => {
  const featuredProducts = [
    {
      companyName: "Lenovo",
      productName: "Laptop Gaming computer Personal computer AMD FX",
      image: item1Img,
      price: 1200,
    },
    {
      companyName: "Apple",
      productName:
        "dialog box displaying on MacBook Pro, MacBook Pro Macintosh MacBook",
      image: item2Img,
      price: 60,
    },
    {
      companyName: "Sony",
      productName: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
      image: item3Img,
      price: 1200,
    },
    {
      companyName: "Sony",
      productName: "Headphones, Noise cancelling, Bluetooth 5.0",
      image: item4Img,
      price: 920,
    },
    {
      companyName: "HP",
      productName: 'Hp elietebook  2021, 14" Waterproof, 8GB, 12000mAh battery',
      image: item5Img,
      price: 1100,
    },
  ];

  const sliderRef = useRef(null);


  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const CustomPrevArrow = (props) => (
    <button
      className="custom-arrows prev-arrow"
      onClick={props.onClick}
      style={{ display: "none" }}
    />
  );

  const CustomNextArrow = (props) => (
    <button
      className="custom-arrows next-arrow"
      onClick={props.onClick}
      style={{ display: "none" }}
    />
  );



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Set this to the number of products you want to show in a row
    slidesToScroll: 1, // Set this to 1 to scroll one product at a time
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          slidesToShow: 4, // Adjust for tablet view
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // mobile breakpoint
        settings: {
          slidesToShow: 2, // Adjust for mobile view
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <>

      <Head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>


      <section className="py-16 px-8">
        <div className="max-w-8xl mx-auto space-y-9">


          <div className="flex justify-between">

            <H3 text={"Featured Products"} />

    <div>

            <button

              onClick={previousSlide}
            >
              <img src={leftarrow} alt="leftarrow" />
            </button>
            <button onClick={nextSlide}>
              <img src={nextarrow} alt="nextarrow" />
            </button>
            </div>


          </div>

          <div>
            <Slider {...settings} ref={sliderRef}>
              {featuredProducts.map(
                ({ companyName, productName, image, price }, index) => (
                  <HomeProduct
                    key={index}
                    companyName={companyName}
                    productName={productName}
                    image={image}
                    price={price}
                  />
                ),
              )}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
