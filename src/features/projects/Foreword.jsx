import { useState } from "react";
import useDynamicColor from "../../hooks/useDynamicColor";

function Foreword() {
  const dynamicColor = useDynamicColor();
  const [showForeword, setShowforeword] = useState(false);

  return (
    <div>
      <div
        className={`flex cursor-pointer justify-start pb-4 pl-2 underline underline-offset-4`}
        onClick={() => setShowforeword((show) => !show)}
      >
        {showForeword ? "Hide Foreword" : "Show Foreword"}
      </div>
      <div
        className={`${dynamicColor.codeBg} text-sm leading-6  ${showForeword ? "h-48" : "h-0"} overflow-hidden transition-all duration-300`}
      >
        <p className="p-4">
          Below, you will see solo projects and other projects I have worked on,
          either in classes or from previous employers. I also want to thank my
          friend, Egga, for making the logo you see on this site and on my
          Docu-Gen site.
        </p>
      </div>
    </div>
  );
}

export default Foreword;
