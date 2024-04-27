import { IoCopyOutline } from "react-icons/io5";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import useDynamicColor from "../../hooks/useDynamicColor";

function ContactItem({ icon, text, copy }) {
  const dynamicColor = useDynamicColor();

  return (
    <div className="flex items-center gap-x-3">
      <div className="text-2xl">{icon}</div>
      <div className="text-lg">{text}</div>
      {copy && (
        <div
          onClick={() => copyToClipboard(text)}
          className={`${dynamicColor.textHover} ${dynamicColor.textActive} cursor-pointer hover:scale-105`}
        >
          <IoCopyOutline />
        </div>
      )}
    </div>
  );
}

export default ContactItem;
