"use client";
import { configureStore } from "@reduxjs/toolkit";
import { featuredProductsReducer } from "./slices/featuredProductsSlice";
import { bigDealsReducer } from "./slices/bigDealsSlice";

const store = configureStore({
  reducer: {
    featuredProducts: featuredProductsReducer,
    bigDeals: bigDealsReducer,
  },
});

export { store };
