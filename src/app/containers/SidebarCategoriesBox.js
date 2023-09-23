import React from "react";
import { SidebarCategoryItem } from "../components";

const SidebarCategoriesBox = ({ title, data }) => {
  return (
    <div className="w-full flex flex-col items-start gap-y-4 p-4 border border-Grey-100 rounded-md">
      <h4 className="text-base font-medium text-Grey-900">{title}</h4>
      <ul className="flex flex-col gap-y-2 p-0">
        {data.map((dataItem, index) => (
          <li key={index} className="flex items-center gap-x-2 text-sm">
            <SidebarCategoryItem data={dataItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategoriesBox;
