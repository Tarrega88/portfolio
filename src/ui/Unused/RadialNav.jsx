import SidebarLink from "./SidebarLink";
import {
  RiHome2Fill,
  RiHome2Line,
  RiFilePaper2Fill,
  RiToolsFill,
  RiAccountPinCircleFill,
  RiOctagonFill,
  RiCompass2Fill,
} from "react-icons/ri";
import { MdHexagon } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import { FaGripLinesVertical } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { toggleRadialNav } from "../uiSlice";

const centerBottom = "";

const links = [
  { to: "/", text: "Home", altText: "Home", icon: RiHome2Fill },
  {
    to: "/skills",
    text: "Skills",
    altText: "Skills",
    icon: RiFilePaper2Fill,
  },
  {
    to: "/projects",
    text: "Projects",
    altText: "Projects",
    icon: RiToolsFill,
  },
  {
    to: "/about",
    text: "About",
    altText: "About",
    icon: RiAccountPinCircleFill,
  },
];

function RadialNav() {
  // const showSidebar = useSelector();
  const dispatch = useDispatch();
  const { showRadialNav } = useSelector((state) => state.ui);

  console.log(showRadialNav);

  /*Should split this into two components:*/
  return (
    <>
      {showRadialNav ? (
        <div
          onClick={() => dispatch(toggleRadialNav())}
          // className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[3rem] text-zinc-500"
        >
          <GiHamburgerMenu />
        </div>
      ) : (
        <div className="absolute" onClick={() => dispatch(toggleRadialNav())}>
          Test
        </div>
      )}
    </>
  );
  return (
    // <nav className="absolute bottom-0 right-0">
    <nav className="bottom-50 absolute right-0">
      {/* <div
        // onClick={() => dispatch(toggleSidebar())}
        className="bg-zinc-500 px-2 pt-6"
      >
        <ul className="flex flex-col gap-y-4">
          {links.map((e) => (
            <SidebarLink
              to={e.to}
              text={e.text}
              icon={<e.icon />}
              key={e.text}
              altText={e.altText}
            />
          ))}
        </ul>
      </div> */}
      <div className="">
        {/* <div className="relative"> */}
        <div className="absolute bottom-0 top-5 text-[3rem] text-zinc-600">
          {/* <FaGripLinesVertical /> */}
          <MdHexagon />
        </div>
        <div className="absolute bottom-6 right-6 font-bold text-zinc-700">
          Nav
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default RadialNav;
