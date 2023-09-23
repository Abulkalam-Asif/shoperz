import React from "react";
import shoperzLogo from "../assets/shoperz.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import SidebarCategoriesBox from "./SidebarCategoriesBox";

const Sidebar = ({ isSidebarExpanded, toggleSidebar }) => {
  const brands = [
    {
      idHtmlFor: "appleCheckbox",
      label: "Apple",
      itemsCount: 32,
    },
    {
      idHtmlFor: "hpCheckbox",
      label: "HP",
      itemsCount: 64,
    },
    {
      idHtmlFor: "dellCheckbox",
      label: "Dell",
      itemsCount: 21,
    },
    {
      idHtmlFor: "lenovoCheckbox",
      label: "Lenovo",
      itemsCount: 21,
    },
    {
      idHtmlFor: "sonyCheckbox",
      label: "Sony",
      itemsCount: 13,
    },
    {
      idHtmlFor: "toshibaCheckbox",
      label: "Toshiba",
      itemsCount: 37,
    },
  ];
  const priceRanges = [
    {
      idHtmlFor: "priceRange1",
      label: "<50",
      itemsCount: 32,
    },
    {
      idHtmlFor: "priceRange2",
      label: "100-200",
      itemsCount: 53,
    },
    {
      idHtmlFor: "priceRange3",
      label: "200-300",
      itemsCount: 85,
    },
    {
      idHtmlFor: "priceRange4",
      label: "300-400",
      itemsCount: 58,
    },
    {
      idHtmlFor: "priceRange5",
      label: ">500",
      itemsCount: 68,
    },
  ];

  return (
    <>
      {isSidebarExpanded && (
        <div
          className={`hidden lg:block fixed top-0 right-0 left-0 bottom-0 bg-black z-40 opacity-40`}></div>
      )}
      <aside
        className={`hidden fixed min-w-[20rem] top-0 ${
          isSidebarExpanded ? "left-0" : "-left-full"
        } bottom-0 h-screen transition-all duration-300 flex-col items-center gap-y-5 z-50 bg-white px-8 py-12 rounded-tr-4xl overflow-y-auto lg:flex`}>
        <button className="absolute top-7 right-7" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faX} className="min-w-[1.25rem] h-auto" />
        </button>
        <a href="/">
          <Image
            src={shoperzLogo}
            alt="Shoperz logo"
            className="min-w-[7rem] w-32 max-w-[8rem]"
          />
        </a>
        <hr className="w-full h-1 mt-4 mb-0" />
        <SidebarCategoriesBox title={"Brands"} data={brands} />
        <SidebarCategoriesBox title={"Price"} data={priceRanges} />
      </aside>
    </>
  );
};

export default Sidebar;
