import { useRef, useState } from "react";
import { media } from "../../../helpers/imageData";

function OpacityVideos() {
  const [visible, setVisible] = useState(false);

  const videoRefNight = useRef(null);
  const videoRefDay = useRef(null);
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

  function handlePlayNight(e) {
    console.log(e);
    console.log(videoRefNight.current.paused);
    if (!videoRefNight.current || !e.target.paused) return;
    videoRefNight.current.play();
    setVisible(false);
  }

  function handlePlayDay(e) {
    if (!videoRefDay.current || !e.target.paused) return;
    videoRefDay.current.play();
    setVisible(true);
  }

  return (
    <div className="relative">
      <div className="absolute">
        <video
          key={videoData.night.key}
          // onClick={handlePlayDay}
          // onPlay={() => (videoRefNight.current.timeStamp = 0)}
          onEnded={() => (videoRefNight.current.timeStamp = 0)}
          ref={videoData.night.ref}
        >
          <source src={videoData.night.key} type="video/mp4" />
        </video>
      </div>
      <div className={`absolute ${visible ? "opacity-100" : "opacity-0"}`}>
        <video
          key={videoData.day.key}
          onClick={visible ? handlePlayNight : handlePlayDay}
          onEnded={() => (videoRefDay.current.timeStamp = 0)}
          // onEnded={() => (videoRefNight.current.timeStamp = 0)}
          // onPlay={() => (videoRefDay.current.timeStamp = 0)}
          ref={videoData.day.ref}
        >
          <source src={videoData.day.key} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default OpacityVideos;
