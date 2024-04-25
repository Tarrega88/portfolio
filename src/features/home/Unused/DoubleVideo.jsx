import { useEffect, useRef, useState } from "react";
import { media } from "../../../helpers/imageData";

const isPlaying = (vid) => !vid.target.ended && vid.target.currentTime > 0;

function DoubleVideo() {
  const [visible, setVisible] = useState(true);
  const videoRefNight = useRef(null);
  const videoRefDay = useRef(null);

  const togglePlayNight = (e) => {
    videoRefDay.current.currentTime = 0;
    if (!videoRefNight.current || isPlaying(e)) return;
    videoRefNight.current.play();
  };

  const togglePlayDay = (e) => {
    videoRefNight.current.currentTime = 0;
    if (!videoRefDay.current || isPlaying(e)) return;
    videoRefDay.current.play();
  };

  function handleEndNight() {
    if (videoRefNight.current) {
      // videoRefNight.current.currentTime = 0;
      // videoRefDay.current.currentTime = 0;
    }
    setVisible((vis) => !vis);
  }

  function handleEndDay() {
    if (videoRefDay.current) {
      // videoRefDay.current.currentTime = 0;
      // videoRefNight.current.currentTime = 0;
    }
    setVisible((vis) => !vis);
  }

  return (
    <div>
      <div className={visible ? "hidden" : "block"}>
        <video
          key={media.VIDEO.night}
          onEnded={handleEndDay}
          ref={videoRefNight}
          onClick={togglePlayNight}
        >
          <source src={media.VIDEO.night} type="video/mp4" />
        </video>
      </div>
      <div className={visible ? "block" : "hidden"}>
        <video
          key={media.VIDEO.day}
          onEnded={handleEndNight}
          ref={videoRefDay}
          onClick={togglePlayDay}
        >
          <source src={media.VIDEO.day} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default DoubleVideo;
