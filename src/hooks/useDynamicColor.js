import { useSelector } from "react-redux";
import { colors } from "../helpers/colorClasses";

function useDynamicColor() {
  const { colorMode, lightMode } = useSelector((state) => state.ui);
  return colors[colorMode][lightMode];
}

export default useDynamicColor;
