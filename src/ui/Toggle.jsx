import { useState } from "react";

function Toggle({ defaultStatus }) {
  const [toggleStatus, setToggleStatus] = useState(defaultStatus);

  const sliderBg = toggleStatus === true ? "bg-green-700" : "bg-red-700";

  return (
    <div className="flex items-center justify-end gap-x-4 pr-1">
      <div>Animations</div>
      <div
        className={`relative h-6 w-10 overflow-hidden ${sliderBg} text-center`}
      >
        <div
          className={`absolute w-full bg-green-700 transition-all duration-300 ${toggleStatus === true ? "right-1/2 translate-x-1/2" : "right-16"}`}
          onClick={() => setToggleStatus((status) => !status)}
        >
          On
        </div>
        <div
          className={`absolute w-full bg-red-700 transition-all duration-300 ${toggleStatus === false ? "left-1/2 -translate-x-1/2" : "left-16"}`}
          onClick={() => setToggleStatus((status) => !status)}
        >
          Off
        </div>
      </div>
    </div>
  );
}

export default Toggle;
