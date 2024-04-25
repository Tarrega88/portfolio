import { useEffect, useRef, useState } from "react";
import { media } from "../../../helpers/imageData";

function DoubleVideoAbs() {
  const [currentMode, setCurrentMode] = useState("night");

  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(media.IMG.night);

  const videoRefNight = useRef(null);
  const videoRefDay = useRef(null);

  function handleOnEnded() {
    setVisible(false);
    setCurrentMode((mode) => (mode === "night" ? "day" : "night"));
  }

  const videoData = {
    night: {
      key: media.VIDEO.night,
      ref: videoRefNight,
    },
    day: {
      key: media.VIDEO.day,
      ref: videoRefDay,
    },
  };

  function handlePlayVideo(e) {
    setVisible(true);
    currentMode === "night"
      ? videoRefNight.current.play()
      : videoRefDay.current.play();
    setImgSrc(imgSrc === media.IMG.day ? media.IMG.night : media.IMG.day);
  }

  return (
    <div className="relative">
      <div className="absolute">
        <img src={imgSrc} onClick={handlePlayVideo} />
      </div>
      <div className={`absolute ${visible ? "" : "hidden"}`}>
        <video
          key={videoData[currentMode].key}
          onEnded={() => handleOnEnded()}
          ref={videoData[currentMode].ref}
        >
          <source src={videoData[currentMode].key} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default DoubleVideoAbs;

/*
The comment after this is what was done in DoubleVideoAbs.jsx

It solved the flickering in and out problem. However, the color difference between the video and images remains the same, and there is a brief moment on the right side of the video where the image underneath is visible.

The color problem can be addressed in one of two ways:

1. Try to match the image with the video (might require grabbing an earlier frame from the gif or something)

2. Use an image on load, but do not switch back to an image upon video completion. Instead, switch to showing the other video (this would be done in the same hidden/block way that the image is)
*/

/*
General idea:

previous problems are: things can blip in and out of visual existence due to inconsistencies in loading times and things like that.

solution idea: absolutely position a video above an image.

image will always be visible - maybe not absolutely positioned itself, but due to absolute positioning of video will be covered by video.

video will only be visible when it's being played. it will be trigged by clicking on the image.

*/
