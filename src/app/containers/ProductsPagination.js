import React from "react";

const ProductsPagination = ({ productsCount }) => {
  return (
    <>
      <div className="w-full border p-4 rounded-md border-Grey-100">
        <p className="text-sm text-Grey-900">
          Showing <span className="font-medium">1-12</span> of{" "}
          <span className="font-medium">1090</span>
        </p>
      </div>
    </>
  );
};

export default ProductsPagination;
