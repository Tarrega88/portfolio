function CodeBlock({ heading, text, intro, icon, current }) {
  const space = "\xa0";
  const actualText = text.replaceAll(" ", space);
  const textArr = actualText.split("\n");
  return (
    <code className={`relative ${current ? "" : "text-transparent"}`}>
      <div className="pb-6">
        <div className="absolute -top-2 right-0 text-lg">{icon}</div>
        <h2 className="absolute -top-2 left-0">{heading}</h2>
      </div>
      <div className="pb-2">{intro}</div>
      {textArr.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
      <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-[12rem] opacity-5">
        {icon}
      </div>
    </code>
  );
}

export default CodeBlock;
