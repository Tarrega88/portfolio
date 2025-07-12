function CodeBlock({ heading, text, intro, icon, current }) {
  const space = "\xa0";
  const actualText = text.replaceAll(" ", space);
  const textArr = actualText.split("\n");
  return (
    <code
      className={`relative ${current ? "" : "text-transparent"} text-base sm:text-xl`}
    >
      <div className="flex justify-between px-6 pt-6">
        <h2 className="">{heading}</h2>
        <div className="text-lg sm:text-3xl">{icon}</div>
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
