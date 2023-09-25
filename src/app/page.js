import React from "react";
import { Benefits, BigDeals, FeaturedProducts, Hero, LandingSidebar } from "./containers";

const page = () => {
  return (
    <>
      <LandingSidebar />
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <BigDeals />
    </>
  );
};

export default page;
