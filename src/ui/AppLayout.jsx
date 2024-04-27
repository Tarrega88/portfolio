import { Outlet } from "react-router-dom";
import DynamicNav from "./DynamicNav";
import LogoTop from "./LogoTop";
import SunAndMoon from "./SunAndMoon";
import useDynamicColor from "../hooks/useDynamicColor";

export default function AppLayout() {
  const dynamicColor = useDynamicColor();

  return (
    <div
      className={`flex min-h-dvh flex-col ${dynamicColor.text} ${dynamicColor.bg} relative overflow-x-clip transition-all duration-1000`}
    >
      <SunAndMoon />
      <LogoTop />
      <div className="flex-grow px-4">
        <Outlet />
      </div>
      <div className="pb-3">
        <DynamicNav />
      </div>
    </div>
  );
}
