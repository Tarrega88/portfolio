import { useState } from "react";
import useDynamicColor from "../../hooks/useDynamicColor";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function ProjectContainer({
  projectName,
  url = "",
  youtubeUrl = "",
  githubUrl = "",
  src,
  children,
  shortDescription,
}) {
  const [showMore, setShowMore] = useState(false);
  const dynamicColor = useDynamicColor();
  return (
    <div className="border-b py-6 pl-2">
      <div className="flex items-center gap-4 pb-4">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <img src={src} className="w-12" />
        </a>
        <a
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          className={`text-xl ${url ? "underline underline-offset-4" : ""} ${dynamicColor.textHover} transition-all duration-300`}
        >
          {projectName}
        </a>
      </div>
      <div className="pb-4 pl-4">{shortDescription}</div>
      <div className="flex gap-4">
        {githubUrl.length > 0 && (
          <a
            href={githubUrl}
            rel="noopener noreferrer"
            target="_blank"
            className={`flex items-center gap-2 pb-2 pl-3 text-4xl ${dynamicColor.textHover} transition-all duration-300`}
          >
            <IoLogoGithub />
            <div className="text-base">Github</div>
          </a>
        )}
        {youtubeUrl.length > 0 && (
          <a
            href={youtubeUrl}
            rel="noopener noreferrer"
            target="_blank"
            className={`flex items-center gap-2 pb-2 pl-3 text-4xl ${dynamicColor.textHover} transition-all duration-300`}
          >
            <FaYoutube />
            <div className="text-base">YouTube</div>
          </a>
        )}
      </div>
      <div
        className={`flex cursor-pointer py-2 pl-4 underline underline-offset-4 ${dynamicColor.textHover} transition-all duration-300`}
        onClick={() => setShowMore((show) => !show)}
      >
        {showMore ? "Less Info" : "More Info"}
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
