import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorMode: "zinc",
  lightMode: localStorage.getItem("lightMode") || "night",
  showSidebar: true,
  showRadialNav: false,
  showNav: false,
  activePage: "Home",
  windowSize: 0,
  windowWidth: window.innerWidth,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleNav(state) {
      state.showNav = !state.showNav;
    },
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
    toggleRadialNav(state) {
      state.showRadialNav = !state.showRadialNav;
    },
    setActivePage(state, action) {
      state.activePage = action.payload;
    },
    setWindowSize(state, action) {
      state.windowSize = action.payload;
    },
    setLightMode(state, action) {
      state.lightMode = action.payload;
      localStorage.setItem("lightMode", action.payload);
    },
    setWindowWidth(state, action) {
      state.windowWidth = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  toggleRadialNav,
  toggleNav,
  setActivePage,
  setWindowSize,
  setLightMode,
  setWindowWidth,
} = uiSlice.actions;
export default uiSlice.reducer;
