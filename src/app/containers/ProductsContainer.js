import React from "react";
import { ProductGridView, ProductListView } from "../components";

const ProductsContainer = ({ productsView, products }) => {
  return (
    <>
      {productsView === "gridView" ? (
        <div className="grid grid-cols-4 gap-5 py-5 xl:grid-cols-3 md:grid-cols-2 md:text-xs sm:gap-x-3">
          {products.map(({ productName, image, price }, index) => (
            <ProductGridView
              key={index}
              productName={productName}
              image={image}
              price={price}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-5 py-5">
          {products.map(({ productName, image, price }, index) => (
            <ProductListView
              key={index}
              productName={productName}
              image={image}
              price={price}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsContainer;
