import {
  RiHome2Fill,
  RiFilePaper2Fill,
  RiToolsFill,
  RiAccountPinCircleFill,
} from "react-icons/ri";

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
  {
    to: "/contact",
    text: "Contact",
    altText: "Contact",
    icon: RiAccountPinCircleFill,
  },
];

export { navLinks };
