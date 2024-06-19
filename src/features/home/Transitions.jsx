import { useRef, useState } from "react";
import { media } from "../../helpers/imageData";
import { useDispatch, useSelector } from "react-redux";
import { setLightMode } from "../../ui/uiSlice";

function Transitions() {
  const { lightMode } = useSelector((state) => state.ui);
  const [imgVisible, setImgVisible] = useState(true);
  const [visible, setVisible] = useState(lightMode === "day");
  const dispatch = useDispatch();

  const videoRefNight = useRef(null);
  const videoRefDay = useRef(null);

  //These handlePlay functions are completely confusing because of the naming conventions being all over the place. need to fix naming conventions

  // function handlePlayNight(e) {
  //   if (!videoRefNight.current || !e.target.paused) return;
  //   dispatch(setLightMode("day"));
  //   videoRefNight.current.play();
  // }

  // function handlePlayDay(e) {
  //   if (!videoRefDay.current || !e.target.paused) return;
  //   dispatch(setLightMode("night"));
  //   videoRefDay.current.play();
  // }

  //might consider moving some of these lines in handlePlayNight and day around so that it succeeds in changing the mode even if there's some video load error
  function handlePlayNight(e) {
    if (!videoRefNight.current) return;
    dispatch(setLightMode("day"));
    if (!e.target.paused) {
      videoRefNight.current.pause();
      setImgVisible(true);
      videoRefDay.current.currentTime = 0;
      videoRefNight.current.currentTime = 0;
    } else {
      videoRefNight.current.play();
    }
  }

  function handlePlayDay(e) {
    if (!videoRefDay.current) return;
    dispatch(setLightMode("night"));
    if (!e.target.paused) {
      videoRefDay.current.pause();
      setImgVisible(true);
      videoRefNight.current.currentTime = 0;
      videoRefDay.current.currentTime = 0;
    } else {
      videoRefDay.current.play();
    }
  }

  function hideImage() {
    if (lightMode === "night") {
      dispatch(setLightMode("day"));
      videoRefNight.current.play();
    } else if (lightMode === "day") {
      dispatch(setLightMode("night"));
      videoRefDay.current.play();
    }
    setImgVisible(false);
  }

  function handleDayEnd() {
    videoRefDay.current.currentTime = 0;
  }

  function handleNightEnd() {
    videoRefNight.current.currentTime = 0;
  }

  return (
    <div className="cursor-pointer select-none">
      <div className="relative h-[100vw]">
        <div className="absolute">
          <video
            key={media.VIDEO.night}
            onClick={handlePlayDay}
            onEnded={handleDayEnd}
            onPlaying={() => setVisible(false)}
            ref={videoRefNight}
          >
            <source src={media.VIDEO.night} type="video/mp4" />
          </video>
        </div>
        <div
          className={`absolute ${visible ? "" : "pointer-events-none opacity-0"}`}
        >
          <video
            key={media.VIDEO.day}
            onClick={handlePlayNight}
            onEnded={handleNightEnd}
            onPlaying={() => setVisible(true)}
            ref={videoRefDay}
          >
            <source src={media.VIDEO.day} type="video/mp4" />
          </video>
        </div>
        <div>
          <img
            className={`absolute ${imgVisible ? "" : "hidden"}`}
            src={media.IMG[lightMode]}
            onClick={hideImage}
          />
        </div>
      </div>
      {/* <Toggle defaultStatus={true} /> */}
    </div>
  );
}

export default Transitions;
