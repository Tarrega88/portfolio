import { setWindowSize } from "../uiSlice";

function ViewableWindow() {
  return <div onClick={(e) => console.log(e)} className="bg-zinc-100"></div>;
}

export default ViewableWindow;
