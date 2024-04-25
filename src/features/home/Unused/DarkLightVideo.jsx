import { useEffect, useRef, useState } from "react";
import { media } from "../../../helpers/imageData";

function DarkLightVideo() {
  const videoRef = useRef(null);
  const togglePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  };

  const loadLastFrame = (e) => {
    if (videoRef.current)
      videoRef.current.currentTime = e.target.duration - 0.1;
  };

  const [type, setType] = useState("IMG");
  const [mediaSrc, setMediaSrc] = useState(media[type].night);

  function handleSetType() {
    setType("VIDEO");
    setMediaSrc(media.VIDEO.day);
  }

  useEffect(
    function () {
      togglePlay();
    },
    [type],
  );

  return (
    <div style={{ cursor: "pointer" }}>
      {type === "VIDEO" ? (
        <video
          ref={videoRef}
          key={mediaSrc}
          muted
          playsInline
          onClick={togglePlay}
          // onLoadedMetadata={loadLastFrame}
          // onEnded={() =>
          //   mediaSrc === media.VIDEO.night
          //     ? setMediaSrc(media.VIDEO.day)
          //     : setMediaSrc(media.VIDEO.night)
          // }
        >
          <source src={mediaSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={mediaSrc} onClick={handleSetType} />
      )}
    </div>
  );
}

export default DarkLightVideo;
