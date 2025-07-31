function SectionTitle({ mainTitle, subTitle }) {
  const emptySubTitle = !subTitle || !subTitle.length;

  return (
    <header
      className={`pr-2 ${emptySubTitle ? "pb-[52px] pt-14" : "pb-10 pt-10"} select-none`}
    >
      <div className="flex flex-col">
        <h1 className="uppercas flex justify-end text-nowrap text-3xl">
          {mainTitle}
        </h1>
        <h2
          className={`flex justify-end text-lg ${emptySubTitle ? "opacity-0" : ""}`}
        >
          {subTitle}
        </h2>
      </div>
    </header>
  );
}

export default SectionTitle;
