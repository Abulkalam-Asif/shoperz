import React from "react";
import { ProductsHeader, ProductsSidebar } from "../containers";

const page = () => {
  return (
    <>
      <section className="max-w-8xl mx-auto px-4 flex gap-x-5">
        <ProductsSidebar />
        <div className="w-full">
          <ProductsHeader />
        </div>
      </section>
    </>
  );
};

export default page;
