import { navLinks } from "../helpers/navLinks";
import { useSelector, useDispatch } from "react-redux";
import { setActivePage, toggleNav } from "./uiSlice";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { colors } from "../helpers/colorClasses";
import SunAndMoon from "./SunAndMoon";
import useDynamicColor from "../hooks/useDynamicColor";

function DynamicNav() {
  const dispatch = useDispatch();
  const { showNav, activePage } = useSelector((state) => state.ui);
  const { pathname } = useLocation();
  const { colorMode, lightMode } = useSelector((state) => state.ui);

  const handleShowNav = () => dispatch(toggleNav());
  const handleSetActivePage = (to) => dispatch(setActivePage(to));

  const dynamicColor = useDynamicColor();

  /*Will need to make this map function dynamic to catch changes of orientation and width*/
  return (
    // <nav className="">
    <nav
      className={`flex justify-around ${dynamicColor.bg} py-2 transition-all duration-300`}
    >
      {navLinks.map((e) => (
        <div key={e.text} onClick={() => handleSetActivePage(e.text)}>
          <Link to={e.to}>
            <div
              className={`flex flex-col justify-center text-[2rem] ${dynamicColor.iconHover} ${pathname === e.to ? dynamicColor.iconSelected : dynamicColor.icon} transition-all duration-300`}
            >
              {/*looks like I may been getting this ready to be for the larger size screen? <div className="hidden">{e.text}</div> */}
              <div className="flex justify-center"> {<e.icon />}</div>
              <div className="flex select-none justify-center pt-1 text-base">
                {e.text}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </nav>
    // </nav>
  );
}

export default DynamicNav;

/*
    {links.map((e) => (
          <SidebarLink
            to={e.to}
            text={e.text}
            icon={<e.icon />}
            key={e.text}
            altText={e.altText}
          />
        ))}
*/
/* Hamburger test: */
// return (
//   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[3rem] text-zinc-400 sm:-right-3 sm:bottom-1/2 sm:left-auto sm:translate-y-1/2">
//     {!showNav ? (
//       <div onClick={handleShowNav}>
//         <GiHamburgerMenu />
//       </div>
//     ) : (
//       <div>
//         <div onClick={handleShowNav}>X</div>
//         <div className="flex gap-4">
//           {links.map((e) => (
//             <div key={e.text}>
//               <span className="text-xl">{e.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     )}
//   </div>
// );

/*
        playing with making a sideways orientation different than vertical
  return (
    <div className="absolute bottom-4 w-full sm:bottom-0 sm:right-0 sm:top-6 sm:w-20">
      <div className="flex justify-around sm:flex-col sm:gap-y-4 sm:pr-2">
        {links.map((e) => (
          <div key={e.text} className="justify-end sm:flex">
            <div className="flex justify-center text-[2rem] sm:gap-2">
              <div className="hidden sm:block sm:text-lg">{e.text}</div>
              <div> {<e.icon />}</div>
            </div>
            <div className="sm:hidden">{e.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
*/
