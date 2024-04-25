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

const navLinks = [
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
  // {
  //   to: "/tools",
  //   text: "Tools",
  //   altText: "Tools",
  //   icon: RiToolsFill,
  // },
  // {
  //   to: "/about",
  //   text: "About",
  //   altText: "About",
  //   icon: RiAccountPinCircleFill,
  // },
  {
    to: "/contact",
    text: "Contact",
    altText: "Contact",
    icon: RiAccountPinCircleFill,
  },
];

export { navLinks };
