import { useSelector } from "react-redux";
import { colors } from "../helpers/colorClasses";

function CodeBlock({ text }) {
    const {lightMode, colorMode} = useSelector(state => state.ui);
  return <code className={`p-4 ${colors[colorMode][lightMode].codeBg}`}>{text}</code>;
}

export default CodeBlock;
