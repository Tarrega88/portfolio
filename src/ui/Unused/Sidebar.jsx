import SidebarLink from "./SidebarLink";
import {
  RiHome2Fill,
  RiHome2Line,
  RiFilePaper2Fill,
  RiToolsFill,
  RiAccountPinCircleFill,
} from "react-icons/ri";

import { useSelector, useDispatch } from "react-redux";

const links = [
  { to: "/", text: "Home", altText: "Home", icon: RiHome2Fill },
  { to: "/skills", text: "Skills", altText: "Skills", icon: RiFilePaper2Fill },
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

function Sidebar() {
  // const showSidebar = useSelector();
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.ui);

  console.log(showSidebar);

  return showSidebar ? (
    <nav
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
    </nav>
  ) : (
    <div>Test</div>
  );
}

export default Sidebar;
