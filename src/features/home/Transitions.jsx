import { useRef, useState } from "react";
import { media } from "../../helpers/imageData";
import { useDispatch, useSelector } from "react-redux";
import { setLightMode } from "../../ui/uiSlice";
import useDynamicColor from "../../hooks/useDynamicColor";

function Transitions() {
  const { lightMode } = useSelector((state) => state.ui);
  const [imgVisible, setImgVisible] = useState(true);
  const [visible, setVisible] = useState(lightMode === "day");
  const dispatch = useDispatch();

  const videoRefNight = useRef(null);
  const videoRefDay = useRef(null);

  const dynamicColor = useDynamicColor();

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

  // const transitionDimension =
  //   "absolute left-1/2 w-max -translate-x-1/2 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 cursor-pointer sm:top-16 rounded-xl sm:rounded-[50px] md:rounded-[100px] top-4";
  // const transitionDimension =
  //   "absolute left-1/2 -translate-x-1/2 cursor-pointer sm:top-16 rounded-xl sm:rounded-[50px] md:rounded-[100px] top-4 h-4/5 w-auto";

  const transitionDimension =
    "aspect-square absolute -translate-x-1/2 left-1/2 rounded-xl sm:rounded-[50px] md:rounded-[100px] cursor-pointer w-[90%] sm:w-[550px] md:w-[600px] lg:w-[650px] xl:w-[700px] md:top-12";

  return (
    <div
      className={`relative h-max w-full select-none ${dynamicColor.bg} flex flex-col`}
    >
      <video
        key={media.VIDEO.night}
        onClick={handlePlayDay}
        onEnded={handleDayEnd}
        onPlaying={() => setVisible(false)}
        ref={videoRefNight}
        className={transitionDimension}
      >
        <source src={media.VIDEO.night} type="video/mp4" />
      </video>
      <video
        key={media.VIDEO.day}
        onClick={handlePlayNight}
        onEnded={handleNightEnd}
        onPlaying={() => setVisible(true)}
        ref={videoRefDay}
        className={`${visible ? "" : "pointer-events-none opacity-0"} ${transitionDimension}`}
      >
        <source src={media.VIDEO.day} type="video/mp4" />
      </video>
      <img
        className={`${imgVisible ? "" : "hidden"} ${transitionDimension}`}
        src={media.IMG[lightMode]}
        onClick={hideImage}
      />
    </div>
  );
}

export default Transitions;
