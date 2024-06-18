//TODO 6/16/2024: going to put in youtube link to this

import { useState } from "react";
import useDynamicColor from "../../hooks/useDynamicColor";

function ProjectContainer({
  projectName,
  url,
  src,
  children,
  shortDescription,
}) {
  const [showMore, setShowMore] = useState(true);
  const dynamicColor = useDynamicColor();

  return (
    <div className="pl-2 pt-6">
      <div className="flex items-center gap-4 pb-4">
        <a href={url}>
          <img src={src} className="w-12" />
        </a>
        <a href={url} className="text-xl">
          {projectName}
        </a>
      </div>
      <div className="pl-4">{shortDescription}</div>
      <div
        className="flex py-2 pl-4 underline underline-offset-4"
        onClick={() => setShowMore((show) => !show)}
      >
        {showMore ? "Show Less" : "Show More"}
      </div>
      <div
        className={`${showMore ? "h-72" : "h-0"} mx-3 overflow-hidden rounded-sm transition-all ${dynamicColor.codeBg}`}
      >
        {children}
      </div>
    </div>
  );
}

export default ProjectContainer;
