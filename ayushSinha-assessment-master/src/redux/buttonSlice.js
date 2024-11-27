// src/redux/buttonSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "button",
  initialState: { clicked: false },
  reducers: {
    toggleClicked: (state) => {
      state.clicked = !state.clicked;
    },
  },
});

export const { toggleClicked } = buttonSlice.actions;
export default buttonSlice.reducer;
