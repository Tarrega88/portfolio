import { useEffect, useRef, useState } from "react";
import { media } from "../../../helpers/imageData";
import { useSelector } from "react-redux";

function DoubleVideo3() {
  const videoRefNight = useRef(null);
  const videoRefDay = useRef(null);

  const { mode } = useSelector((state) => state.ui);

  const [imageVisible, setImageVisible] = useState(true);
  const [overVideoVisible, setOverVideoVisible] = useState(false);

  const videoData = {
    night: {
      src: media.VIDEO.night,
    },
    day: {
      src: media.VIDEO.day,
    },
  };

  function handleImageClick() {
    setImageVisible(false);

    if (!videoRefNight.current && !videoRefDay.current) return;
    mode === "night"
      ? videoRefNight.current.play()
      : videoRefDay.current.play();
  }

  function handleUnderVideoClick() {
    setOverVideoVisible(true);
    videoRefDay.current.play();
  }

  function handleOverVideoClick() {
    videoRefNight.current.currentTime = 0;
    videoRefNight.current.play();
    setOverVideoVisible(false);
  }

  return (
    <div className="relative">
      <div className="absolute">
        <video
          key={videoData.night.src}
          ref={videoRefNight}
          onClick={handleUnderVideoClick}
        >
          <source src={videoData.night.src} type="video/mp4" />
        </video>
      </div>
      {/* <div className={`absolute ${imageVisible ? "" : "hidden"}`}>
        <img src={media.IMG.night} onClick={handleImageClick} />
      </div> */}
      <div className={`absolute ${overVideoVisible ? "" : "hidden"}`}>
        <video
          key={videoData.day.src}
          ref={videoRefDay}
          onClick={handleOverVideoClick}
        >
          <source src={videoData.day.src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default DoubleVideo3;

/*
Goals:

Start on image
when image is clicked, hide image. It will not come back.
transitions will end and stay on their last frame

order:

under Video - (by default, nightToDay) always visible but covered by image
Image - visible at beginning - src starts as night (will later switch this to a global version)
over Video - (by default, dayToNight) not visible at beginning

*/
