// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonSlice";
import tileReducer from "./tileSlice";

export const store = configureStore({
  reducer: {
    button: buttonReducer,
    tile: tileReducer,
  },
});
