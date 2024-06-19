import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorMode: "zinc",
  lightMode: localStorage.getItem("lightMode") || "night",
  activePage: "Home",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActivePage(state, action) {
      state.activePage = action.payload;
    },

    setLightMode(state, action) {
      state.lightMode = action.payload;
      localStorage.setItem("lightMode", action.payload);
    },
  },
});

export const { setActivePage, setLightMode } = uiSlice.actions;
export default uiSlice.reducer;
