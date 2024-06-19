import TopRowContainer from "../../ui/TopRowContainer";
import OtherProjects from "./OtherProjects";
import SoloProjects from "./SoloProjects";

function Projects() {
  return (
    <div className="overflow-auto">
      <TopRowContainer mainTitle="Projects" />
      <div className="pb-2 pl-2 text-xl">Solo Projects</div>
      <SoloProjects />
      <div className="pb-2 pl-2 pt-6 text-xl">Other Projects</div>
      <OtherProjects />
    </div>
  );
}

export default Projects;
