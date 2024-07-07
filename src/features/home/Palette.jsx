import { useDispatch, useSelector } from "react-redux";
import { setColorMode } from "../../ui/uiSlice";
import useDynamicColor from "../../hooks/useDynamicColor";
import { useState } from "react";
import { IoMdColorPalette } from "react-icons/io";

const paletteColors = ["zinc", "gray", "slate", "stone"];
const bgColors = {
  zinc: "bg-zinc-500",
  gray: "bg-gray-500",
  slate: "bg-slate-500",
  stone: "bg-stone-500",
};

function Palette() {
  const dispatch = useDispatch();
  const dynamicColor = useDynamicColor();
  const colorMode = useSelector((state) => state.ui.colorMode);
  const [showPalette, setShowPalette] = useState(false);
  return (
    <div className="absolute bottom-24 flex w-full items-center justify-center md:justify-normal">
      <div
        className={`cursor-pointer text-[3.5rem] ${dynamicColor.icon} ${dynamicColor.iconHover} absolute bottom-0 left-0 block transition-all duration-300 md:hidden`}
        onClick={() => setShowPalette((show) => !show)}
      >
        <IoMdColorPalette />
      </div>
      <div
        className={`flex flex-row gap-2 md:bottom-8 ${dynamicColor.bg} bg-opacity-65 pr-4 pt-4 transition-all duration-300 md:flex-col md:pl-4`}
      >
        {paletteColors.map((color, i) => (
          <div
            className={`${showPalette ? "h-[56px] w-[56px] pl-1 pt-1 md:h-20 md:w-20" : "h-0 w-0 text-[0px] md:h-0 md:w-0"} ${bgColors[color]} cursor-pointer select-none text-white transition-all duration-300 hover:scale-105 ${color === colorMode && showPalette ? "border" : ""}`}
            key={i}
            onClick={() => dispatch(setColorMode(color))}
          >
            {color}
          </div>
        ))}
        {/* } */}
        <div
          className={`cursor-pointer text-[3.5rem] ${dynamicColor.icon} ${dynamicColor.iconHover} hidden transition-all duration-300 md:block`}
          onClick={() => setShowPalette((show) => !show)}
        >
          <IoMdColorPalette />
        </div>
      </div>
    </div>
  );
}

export default Palette;
