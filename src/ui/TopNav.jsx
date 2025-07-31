import { navLinks } from "../helpers/navLinks";
import { useDispatch } from "react-redux";
import { setActivePage } from "./uiSlice";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useDynamicColor from "../hooks/useDynamicColor";

function TopNav() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const handleSetActivePage = (to) => dispatch(setActivePage(to));

  const dynamicColor = useDynamicColor();

  return (
    <nav
      className={`flex justify-around ${dynamicColor.bg} hidden h-max w-full py-2 pr-8 transition-all duration-300 sm:justify-start md:flex md:gap-20 md:pl-16 lg:gap-24 lg:pl-24 xl:gap-32`}
    >
      {navLinks.map((e) => (
        <div key={e.text} onClick={() => handleSetActivePage(e.text)}>
          <Link to={e.to}>
            <div
              className={`pb-[50%] text-[2rem] ${dynamicColor.iconHover} ${pathname === e.to ? dynamicColor.iconSelected : dynamicColor.icon} transition-all duration-300`}
            >
              <div className="relative flex justify-center md:text-[2.5rem] lg:text-[3rem]">
                <e.icon />
                <div className="absolute bottom-[-2rem] select-none text-base">
                  {e.text}
                </div>
              </div>
              {/* <div className="flex justify-center md:text-[2.5rem] lg:text-[2.8rem]">
                {<e.icon />}
              </div>
              <div className="flex select-none justify-center pt-1 text-base">
                {e.text}
              </div> */}
            </div>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default TopNav;
