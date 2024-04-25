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
import { useState } from "react";

function CircularNav() {
  const [icon, setIcon] = useState(<RiHome2Fill />);
  const [shown, setShown] = useState("hidden");
  const [text, setText] = useState("Home");

  function handleMouseUp(section, sectionIcon) {
    setText(section);
    setIcon(sectionIcon);
    setShown("hidden");
  }

  return (
    <div className="absolute bottom-2 w-full">
      <div className="flex justify-center">
        <div
          className="relative size-24 rounded-full bg-zinc-300"
          // onTouchStart={() => setShown("block")}
          // onTouchEnd={() => setShown("hidden")}
          onMouseDown={() => setShown("block")}
          onTouchStart={() => setShown("block")}
        >
          <div className="absolute left-1/2 top-3 -translate-x-1/2 text-[3rem] text-zinc-400">
            {icon}
          </div>
          <div className="absolute left-1/2 top-14 -translate-x-1/2 text-zinc-600">
            {text}
          </div>

          {/* <div className="absolute left-1/2 -translate-x-1/2 text-[8rem]">
            <MdHexagon />
          </div> */}
          <div
            className={`absolute -left-10 bottom-16 ${shown} text-[2rem]`}
            value="Home"
            onMouseUp={() => handleMouseUp("Home", <RiHome2Fill />)}
            onTouchEnd={() => handleMouseUp("Home", <RiHome2Fill />)}
          >
            <RiHome2Fill />
          </div>
          <div
            value="Skills"
            className={`absolute -top-12 left-0 ${shown} text-[2rem]`}
            onMouseUp={() => handleMouseUp("Skills", <RiFilePaper2Fill />)}
            onTouchEnd={() => handleMouseUp("Skills", <RiFilePaper2Fill />)}
            // onTouchEnd={() => setText("Skills")}
            // onMouseUp={() => setText("Skills")}
          >
            <RiFilePaper2Fill />
          </div>
          <div
            className={`absolute -top-12 right-0 ${shown} text-[2rem]`}
            value="Projects"
            onMouseUp={() => handleMouseUp("Projects", <RiToolsFill />)}
            onTouchEnd={() => handleMouseUp("Projects", <RiToolsFill />)}
          >
            <RiToolsFill />
          </div>
          <div
            className={`absolute -right-10 bottom-16 ${shown} text-[2rem]`}
            value="About"
            onMouseUp={() => handleMouseUp("About", <RiAccountPinCircleFill />)}
            onTouchEnd={() =>
              handleMouseUp("About", <RiAccountPinCircleFill />)
            }
          >
            <RiAccountPinCircleFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircularNav;
