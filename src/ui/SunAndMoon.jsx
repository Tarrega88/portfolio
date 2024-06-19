import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";

import { useDispatch, useSelector } from "react-redux";
import { setLightMode } from "./uiSlice";
import { useLocation } from "react-router-dom";
import useDynamicColor from "../hooks/useDynamicColor";

const data = {
  day: <IoSunnySharp />,
  night: <IoMoonSharp />,
};

function SunAndMoon() {
  const { lightMode } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const oppositeMode = lightMode === "night" ? "day" : "night";

  const { pathname } = useLocation();
  const dynamicColor = useDynamicColor();
  //Need to think of a way to make it so imgVisible is set to true and set video durations to 0 if on home page OR only have this component active when we're not on the home page
  // dispatch(setLightMode("night"));

  return (
    <div
      onClick={() => dispatch(setLightMode(oppositeMode))}
      className={`absolute top-6 cursor-pointer text-lg transition-all ${pathname === "/" ? "pointer-events-none -right-full duration-1000" : "right-5 duration-300"} ${dynamicColor.lightModeHover} z-50 hover:scale-110`}
    >
      {data[lightMode]}
    </div>
  );
}

export default SunAndMoon;
