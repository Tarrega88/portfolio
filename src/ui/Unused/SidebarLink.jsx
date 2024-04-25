import { NavLink } from "react-router-dom";

function SidebarLink({ to, text, icon, altText }) {
  return (
    <li>
      <NavLink to={to}>
        <div className="flex items-center gap-2">
          {icon}
          <span className="hidden md:block">{text}</span>
          <span className="block md:hidden">{altText}</span>
        </div>
      </NavLink>
    </li>
  );
}

export default SidebarLink;
