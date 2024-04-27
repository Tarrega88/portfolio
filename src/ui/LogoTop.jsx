import Icon from "./icons/Icon";
import useDynamicColor from "../hooks/useDynamicColor";

function LogoTop() {
  const dynamicColor = useDynamicColor();

  return (
    <div
      className={`${dynamicColor.svg} absolute size-36 text-4xl transition-all duration-1000`}
    >
      <Icon iconChoice="logo2" />
    </div>
  );
}

export default LogoTop;
