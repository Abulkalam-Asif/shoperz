"use client";
import { configureStore } from "@reduxjs/toolkit";
import { featuredProductsReducer } from "./slices/featuredProductsSlice";
import { bigDealsReducer } from "./slices/bigDealsSlice";
import { isSidebarExpandedReducer } from "./slices/isSidebarExpandedSlice";

const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsReducer,
    bigDeals: bigDealsReducer,
    isSidebarExpanded: isSidebarExpandedReducer,
  },
});

export { store };
