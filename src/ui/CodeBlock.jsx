import { useSelector } from "react-redux";
import { colors } from "../helpers/colorClasses";

function CodeBlock({ heading, text }) {
  console.log(text);
  const space = "\xa0";
  const actualText = text.replaceAll(" ", space);
  const textArr = actualText.split("\n");
  // const interpretedText = textArr.map((line) => line);

  // console.log(interpretedText);
  const { lightMode, colorMode } = useSelector((state) => state.ui);
  return (
    <code className={`p-3 text-xs ${colors[colorMode][lightMode].codeBg}`}>
      <h2>{heading}:</h2>
      {textArr.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      {/* {text} */}
    </code>
  );
}

export default CodeBlock;
