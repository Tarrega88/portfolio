import { navLinks } from "../../helpers/navLinks";

function TopRightNav() {
  return (
    <div className="absolute -right-2 -top-2">
      <div className="grid size-32 grid-cols-2 rounded-lg border border-zinc-200 bg-zinc-500 pr-2 pt-1 text-xs">
        {navLinks.map((e) => (
          <div
            className="flex items-center justify-center text-[1.5rem]"
            key={e.text}
          >
            {<e.icon />}
          </div>
        ))}
        {/* <div className="flex items-center justify-center border-b border-r border-zinc-200">
          Home
        </div>
        <div className="flex items-center justify-center border-b border-zinc-200">
          Skills
        </div>
        <div className="flex items-center justify-center border-r border-zinc-200">
          About
        </div>
        <div className="flex items-center justify-center border-zinc-200">
          Projects
        </div> */}
      </div>
    </div>
  );
}

export default TopRightNav;
