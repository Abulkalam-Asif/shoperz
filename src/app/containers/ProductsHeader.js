"use client";
import Image from "next/image";
import React, { useState } from "react";
import gridIcon from "../assets/productsIcons/grid.svg";
import listIcon from "../assets/productsIcons/list.svg";

const ProductsHeader = () => {
  const [checkedItem, setCheckedItem] = useState("gridDisplay");
  const toggleProductsDisplay = e => {
    setCheckedItem(e.target.id);
  };

  return (
    <>
      <div className="w-full border-1 px-5 pt-5 pb-3 rounded-md border-Grey-100">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-Grey-900">Products List</h1>
          <p className="text-sm text-Grey-900">
            Showing <span className="font-medium">1-12</span> of{" "}
            <span className="font-medium">1090</span>
          </p>
        </div>
        <hr />
        <div>
          <div className="flex items-center gap-x-3">
            <input
              className="hidden"
              type="radio"
              name="productsDisplayType"
              id="gridDisplay"
              checked={checkedItem === "gridDisplay"}
              onChange={toggleProductsDisplay}
            />
            <label
              htmlFor="gridDisplay"
              className={`cursor-pointer p-2 rounded-md ${
                checkedItem === "gridDisplay" && "bg-Grey-100"
              }`}>
              <Image src={gridIcon} alt="grid icon" width={16} height={16} />
            </label>
            <input
              className="hidden"
              type="radio"
              name="productsDisplayType"
              id="listDisplay"
              checked={checkedItem === "listDisplay"}
              onChange={toggleProductsDisplay}
            />
            <label
              htmlFor="listDisplay"
              className={`cursor-pointer p-2 rounded-md ${
                checkedItem === "listDisplay" && "bg-Grey-100"
              }`}>
              <Image src={listIcon} alt="list icon" width={16} height={16} />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsHeader;
