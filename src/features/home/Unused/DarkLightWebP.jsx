import { useEffect, useRef, useState } from "react";
import { media } from "../../../helpers/imageData";

function DarkLightWebP() {
  const [currentMode, setCurrentMode] = useState("night");

  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(media.IMG.night);

  // const [transitionImage, setTransitionImage] = useState(
  //   media.WEBP.night + "?v=" + Date.now(),
  // );

  const [transitionNight, setTransitionNight] = useState(
    media.WEBP.night + "?v=" + Date.now(),
  );
  const [transitionDay, setTransitionDay] = useState(
    media.WEBP.day + "?v=" + Date.now(),
  );

  // function handleSetTransitionImage() {
  //   setVisible((vis) => !vis);
  //   transitionImage.includes("nightToDay")
  //     ? setTransitionImage(media.WEBP.day + "?v=" + Date.now())
  //     : setTransitionImage(media.WEBP.night + "?v=" + Date.now());
  // }

  function handleUnderClick() {
    setTransitionNight(media.WEBP.night + "?v=" + Date.now());
    setVisible(true);
    setTransitionDay(media.WEBP.day + "?v=" + Date.now());
  }

  function handleOverClick() {
    setTransitionDay(media.WEBP.day + "?v=" + Date.now());
    setVisible(false);
    setTransitionNight(media.WEBP.night + "?v=" + Date.now());
  }

  return (
    <div className="relative">
      {/* <div className="absolute">
        <img src={media.IMG.night} />
      </div> */}
      <div className="absolute">
        <img src={transitionNight} onClick={handleUnderClick} />
      </div>
      <div className={`${visible ? "" : "hidden"} absolute`}>
        <img src={transitionDay} onClick={handleOverClick} />
      </div>
    </div>
  );
}

export default DarkLightWebP;
