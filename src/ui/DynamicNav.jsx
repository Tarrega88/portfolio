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
  //${dynamicColor.bg}
  return (
    <nav
      className={`sticky bottom-0 flex h-max w-full justify-around ${dynamicColor.bg} bg-opacity-[95%] py-2 transition-all duration-300 md:hidden`}
    >
      {navLinks.map((e) => (
        <div key={e.text} onClick={() => handleSetActivePage(e.text)}>
          <Link to={e.to}>
            <div
              className={`flex flex-col justify-center text-[2.1rem] ${dynamicColor.iconHover} ${pathname === e.to ? dynamicColor.iconSelected : dynamicColor.icon} transition-all duration-300`}
            >
              <div className="relative flex justify-center pb-12">
                {<e.icon />}
                <div className="absolute top-10 select-none pt-1 text-base">
                  {e.text}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default DynamicNav;
