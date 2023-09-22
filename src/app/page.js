import React from "react";
import { Benefits, FeaturedProducts, Hero, Newsletter } from "./containers";

const page = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
};

export default page;
