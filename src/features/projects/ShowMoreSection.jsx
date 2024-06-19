//lists={[{ type: "Libraries", data: ["Redux", "Router"] }]}

function ShowMoreSection({
  text,
  writtenIn,
  lists = [],
  // images = [],
}) {
  return (
    <div className="p-4">
      <div>Written in {writtenIn}</div>
      {/* <div className="pl-2 pt-2">Libraries used:</div> */}
      <div>
        {lists.map((e, i) => (
          <div key={i}>
            <div className="py-2 pl-2">{e.type}:</div>
            <ul className="flex flex-col">
              {e.data.map((item, j) => (
                <li className="pb-1 pl-4" key={j}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-4 text-sm leading-5">
        {text.map((e, i) => (
          <div key={i} className="pb-4">
            {e}
          </div>
        ))}
      </div>
      {/* {images.map((src, i) => (
        <img key={i} src={src} className="w-full" />
      ))} */}
    </div>
  );
}

export default ShowMoreSection;
