import TopRowContainer from "../../ui/TopRowContainer";
import OtherProjects from "./OtherProjects";
import SoloProjects from "./SoloProjects";

function Projects() {
  return (
    <div className="relative h-full w-full overflow-auto">
      <TopRowContainer mainTitle="Projects" />
      <div className="pb-2 pl-2 text-2xl">Solo Projects</div>
      <SoloProjects />
      <div className="pb-2 pl-2 pt-6 text-2xl">Other Projects</div>
      <OtherProjects />
    </div>
  );
}

export default Projects;
