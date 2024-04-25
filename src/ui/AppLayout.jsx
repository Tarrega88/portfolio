import { Outlet } from "react-router-dom";
import DynamicNav from "./DynamicNav";
import { useSelector } from "react-redux";
import { colors } from "../helpers/colorClasses";
import TopRight from "./TopRight";
import LogoTop from "./LogoTop";
import SunAndMoon from "./SunAndMoon";

export default function AppLayout() {
  const { colorMode, lightMode } = useSelector((state) => state.ui);

  return (
    <div
      className={`flex min-h-dvh flex-col ${colors[colorMode][lightMode].text} ${colors[colorMode][lightMode].bg} transition-all duration-1000`}
    >
      <SunAndMoon />
      <LogoTop />
      {/* <div className="flex-grow px-4 pt-6"> */}
      <div className="flex-grow px-4">
        <Outlet />
      </div>
      <div className="pb-3">
        <DynamicNav />
      </div>
    </div>
  );
}
