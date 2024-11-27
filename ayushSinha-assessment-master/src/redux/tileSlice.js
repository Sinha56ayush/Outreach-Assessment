    // src/redux/tileSlice.js
    import { createSlice } from "@reduxjs/toolkit";

    export const tileSlice = createSlice({
    name: "tile",
    initialState: { selectedTile: "" },
    reducers: {
        selectTile: (state, action) => {
        state.selectedTile = action.payload;
        },
    },
    });

    export const { selectTile } = tileSlice.actions;
    export default tileSlice.reducer;
