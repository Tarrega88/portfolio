import SunAndMoon from "./SunAndMoon";

function SectionTitle({ mainTitle, subTitle, emptySubTitle }) {
  return (
    <div
      className={`pr-2 ${emptySubTitle ? "pb-[52px] pt-14" : "pb-10 pt-10"}`}
    >
      <div className="flex flex-col">
        <h1 className="flex justify-end text-3xl uppercase">
          {/* <span className="flex items-center pr-2 text-xl">
            {<SunAndMoon />}
          </span> */}
          {mainTitle}
        </h1>
        <h2
          className={`flex justify-end text-lg ${emptySubTitle ? "opacity-0" : ""}`}
        >
          {subTitle}
        </h2>
      </div>
    </div>
  );
}

export default SectionTitle;
