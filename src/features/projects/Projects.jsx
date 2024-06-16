import SectionTitle from "../../ui/SectionTitle";
import ProjectContainer from "./ProjectContainer";
import docugen from "./docugen.svg";

function Projects() {
  return (
    <div>
      <SectionTitle mainTitle="Projects" emptySubTitle={true} />
      <ProjectContainer
        projectName="Docu-Gen"
        src={docugen}
        shortDescription="A web app for programmatically creating PDF documents."
      ></ProjectContainer>
    </div>
  );
}

export default Projects;
