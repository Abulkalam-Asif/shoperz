import Image from "next/image";
import React from "react";
import cartIcon from "../assets/cart.svg";

const HomeProduct = ({ companyName, productName, image, price }) => {
  return (
    <>
      <div>
        <span>{companyName}</span>
        <a href="#">{productName}</a>
        <Image src={image} alt={productName} />
        <div>
          <span>{price}</span>
          <button>
            <Image src={cartIcon} alt="cart" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeProduct;
