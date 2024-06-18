import SectionTitle from "../../ui/SectionTitle";
import OtherProjects from "./OtherProjects";
import SoloProjects from "./SoloProjects";

function Projects() {
  return (
    <div className="overflow-auto">
      <SectionTitle mainTitle="Projects" emptySubTitle={true} />
      <div className="pb-2 pl-2 text-xl">Solo Projects</div>
      <SoloProjects />
      <div className="pb-2 pl-2 pt-6 text-xl">Group Projects</div>
      <OtherProjects />
    </div>
  );
}

export default Projects;
