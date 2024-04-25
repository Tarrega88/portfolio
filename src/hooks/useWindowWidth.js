import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWindowWidth } from "../ui/uiSlice";

function useWindowWidth() {
  // const { windowWidth } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]); // Empty dependency array ensures the effect runs only once
}

export default useWindowWidth;
