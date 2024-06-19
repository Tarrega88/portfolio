import { createSlice } from "@reduxjs/toolkit";
//gray, stone, slate, zinc
const initialState = {
  colorMode: localStorage.getItem("colorMode") || "zinc",
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
    setColorMode(state, action) {
      state.colorMode = action.payload;
      localStorage.setItem("colorMode", action.payload);
    },
  },
});

export const { setActivePage, setLightMode, setColorMode } = uiSlice.actions;
export default uiSlice.reducer;
