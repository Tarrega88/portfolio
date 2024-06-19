import { navLinks } from "../helpers/navLinks";
import { useDispatch } from "react-redux";
import { setActivePage } from "./uiSlice";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useDynamicColor from "../hooks/useDynamicColor";

function DynamicNav() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const handleSetActivePage = (to) => dispatch(setActivePage(to));

  const dynamicColor = useDynamicColor();

  return (
    // <nav
    //   className={`flex justify-around ${dynamicColor.bg} sticky bottom-0 h-max w-full py-2 transition-all duration-300 sm:justify-start sm:gap-24 sm:pl-12`}
    // >
    <nav
      className={`flex justify-around ${dynamicColor.bg} sticky bottom-0 h-max w-full py-2 transition-all duration-300 md:hidden`}
    >
      {navLinks.map((e) => (
        <div key={e.text} onClick={() => handleSetActivePage(e.text)}>
          <Link to={e.to}>
            <div
              className={`flex flex-col justify-center text-[2rem] ${dynamicColor.iconHover} ${pathname === e.to ? dynamicColor.iconSelected : dynamicColor.icon} transition-all duration-300`}
            >
              <div className="flex justify-center"> {<e.icon />}</div>
              <div className="flex select-none justify-center pt-1 text-base">
                {e.text}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default DynamicNav;
