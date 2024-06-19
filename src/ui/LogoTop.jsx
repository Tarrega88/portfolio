import Icon from "./icons/Icon";
import useDynamicColor from "../hooks/useDynamicColor";

function LogoTop() {
  const dynamicColor = useDynamicColor();

  return (
    <div className={`${dynamicColor.svg} transition-all duration-300`}>
      <Icon iconChoice="croppedInvert" styles="w-24" />
    </div>
  );
}

export default LogoTop;
