import { Outlet } from "react-router-dom";
import DynamicNav from "./DynamicNav";
import SunAndMoon from "./SunAndMoon";
import useDynamicColor from "../hooks/useDynamicColor";

export default function AppLayout() {
  const dynamicColor = useDynamicColor();

  return (
    <div
      className={`flex h-dvh flex-col ${dynamicColor.text} ${dynamicColor.bg} relative overflow-x-clip transition-all duration-300`}
    >
      <SunAndMoon />
      <div
        className={`h-full px-4 ${dynamicColor.bg} overflow-auto transition-all duration-300`}
      >
        <Outlet />
      </div>
      <DynamicNav />
    </div>
  );
}
