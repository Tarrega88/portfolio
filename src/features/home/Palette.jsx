import { useDispatch } from "react-redux";
import { setColorMode } from "../../ui/uiSlice";
import useDynamicColor from "../../hooks/useDynamicColor";

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

  return (
    <div
      className={`absolute bottom-24 flex w-full gap-2 md:bottom-4 ${dynamicColor.bg} justify-center bg-opacity-65 pr-4 pt-4`}
    >
      {paletteColors.map((color, i) => (
        <div
          className={`md:size-20 ${bgColors[color]} size-16 cursor-pointer pl-1 pt-1`}
          key={i}
          onClick={() => dispatch(setColorMode(color))}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

export default Palette;
