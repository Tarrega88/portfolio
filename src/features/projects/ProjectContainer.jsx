import { useState } from "react";
import useDynamicColor from "../../hooks/useDynamicColor";
import { FaYoutube } from "react-icons/fa";

function ProjectContainer({
  projectName,
  url,
  url2,
  src,
  children,
  shortDescription,
}) {
  const [showMore, setShowMore] = useState(false);
  const dynamicColor = useDynamicColor();

  return (
    <div className="border-b py-6 pl-2">
      <div className="flex items-center gap-4 pb-4">
        <a href={url}>
          <img src={src} className="w-12" />
        </a>
        <a
          href={url}
          className={`text-xl ${url ? "underline underline-offset-4" : ""}`}
        >
          {projectName}
        </a>
      </div>
      <div className="pl-4">{shortDescription}</div>
      <a
        href={url2}
        className="flex items-center gap-2 pb-2 pl-3 pt-4 text-4xl"
      >
        <FaYoutube />
        <div className="text-base">YouTube Link</div>
      </a>
      <div
        className="flex py-2 pl-4 underline underline-offset-4"
        onClick={() => setShowMore((show) => !show)}
      >
        {showMore ? "Show Less" : "Show More"}
      </div>
      <div
        className={`${showMore ? "h-72" : "h-0"} mx-3 overflow-auto rounded-sm transition-all ${dynamicColor.codeBg}`}
      >
        {children}
      </div>
    </div>
  );
}

export default ProjectContainer;
