// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import applyReducer from "./applySlice";

export const store = configureStore({
  reducer: {
    apply: applyReducer,
  },
});
