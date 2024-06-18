import SectionTitle from "../../ui/SectionTitle";
import OtherProjects from "./OtherProjects";
import SoloProjects from "./SoloProjects";
import Foreword from "./Foreword";

function Projects() {
  return (
    <div className="overflow-auto">
      <SectionTitle mainTitle="Projects" emptySubTitle={true} />
      <div className="pb-2 pl-2 text-xl">Solo Projects</div>
      <Foreword />
      <SoloProjects />
      <div className="pb-2 pl-2 text-xl">Other Projects</div>
      {/* <OtherProjects /> */}
    </div>
  );
}

export default Projects;
