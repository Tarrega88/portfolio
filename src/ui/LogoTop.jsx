import Icon from "./icons/Icon";
import { colors } from "../helpers/colorClasses";
import { useSelector } from "react-redux";

function LogoTop() {
  const { colorMode, lightMode } = useSelector((state) => state.ui);
  return (
    <div
      className={`${colors[colorMode][lightMode].svg} absolute size-36 text-4xl transition-all duration-1000`}
    >
      <Icon iconChoice="logo2" />
    </div>
  );
}

export default LogoTop;
