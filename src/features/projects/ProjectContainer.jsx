//TODO 6/16/2024: going to put in youtube link to this

function ProjectContainer({
  projectName,
  url,
  src,
  children,
  shortDescription,
}) {
  return (
    <div className="pl-2">
      <div className="flex items-center gap-4 pb-4">
        <img src={src} className="w-12" />
        <div className="text-xl">{projectName}</div>
      </div>
      <div className="pl-4">{shortDescription}</div>
      {children}
    </div>
  );
}

export default ProjectContainer;
