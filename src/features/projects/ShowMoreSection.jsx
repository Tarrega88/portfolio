function ShowMoreSection({ text, list = [], writtenIn, libraries = [] }) {
  return (
    <div className="p-4">
      <div>Written in {writtenIn}</div>
      <div className="pl-2 pt-2">Libraries used:</div>
      <ul className="pl-4">
        {libraries.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <ul>
        {list.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <div className="pt-4 text-sm leading-5">{text}</div>
    </div>
  );
}

export default ShowMoreSection;
