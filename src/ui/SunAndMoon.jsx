import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

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

  return (
    <div
      onClick={() => dispatch(setLightMode(oppositeMode))}
      className={`absolute top-6 cursor-pointer text-lg transition-all ${pathname === "/" ? "pointer-events-none -right-full duration-1000" : "right-3 duration-300 sm:right-8 md:right-12"} ${dynamicColor.lightModeHover} z-50 hover:scale-110`}
    >
      {data[lightMode]}
    </div>
  );
}

export default SunAndMoon;
