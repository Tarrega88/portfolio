import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { colors } from "../../helpers/colorClasses";
import { useSelector } from "react-redux";
import { copyToClipboard } from "../../helpers/copyToClipboard";

function ContactItem({ icon, text, copy }) {
  const { colorMode, lightMode } = useSelector((state) => state.ui);
  // const [currentIcon, setCurrentIcon] = useState(icon);

  return (
    <div
      className="flex items-center gap-x-3"
      // onMouseEnter={() => setCurrentIcon(activeIcon)}
      // onMouseLeave={() => setCurrentIcon(icon)}
    >
      <div className="text-2xl">{icon}</div>
      <div className="text-lg">{text}</div>
      {copy && (
        <div
          onClick={() => copyToClipboard(text)}
          // className="hover:text-zinc-900"
          className={`${colors[colorMode][lightMode].textHover} ${colors[colorMode][lightMode].textActive}`}
        >
          <IoCopyOutline />
        </div>
      )}
    </div>
  );
}

export default ContactItem;
