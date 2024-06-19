import { Outlet } from "react-router-dom";
import DynamicNav from "./DynamicNav";
import LogoTop from "./LogoTop";
import SunAndMoon from "./SunAndMoon";
import useDynamicColor from "../hooks/useDynamicColor";

export default function AppLayout() {
  const dynamicColor = useDynamicColor();

  return (
    <div
      className={`flex h-dvh flex-col ${dynamicColor.text} ${dynamicColor.bg} relative overflow-x-clip transition-all duration-300`}
    >
      <SunAndMoon />
      <LogoTop />
      <div
        className={`flex-grow px-4 ${dynamicColor.bg} transition-all duration-300`}
      >
        <Outlet />
      </div>
      {/* <div className="sticky bottom-0 w-full"> */}
      <DynamicNav />
      {/* </div> */}
    </div>
  );
}
