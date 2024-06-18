import SectionTitle from "../../ui/SectionTitle";
import ProjectContainer from "./ProjectContainer";
import ShowMoreSection from "./ShowMoreSection";
import docugen from "./docugen.svg";

function Projects() {
  return (
    <div className="overflow-auto">
      <SectionTitle mainTitle="Projects" emptySubTitle={true} />
      <div className="pb-2 pl-2 text-xl">Solo Projects</div>
      <ProjectContainer
        projectName="Docu-Gen"
        src={docugen}
        shortDescription="A web app for programmatically creating PDF documents."
        url="https://docu-gen.com"
      >
        <ShowMoreSection
          writtenIn="JavaScript with React"
          libraries={["Redux", "Router"]}
          text="Docu-Gen allows users the ability to programmatically create styled documents with CSS. After I built it, I used it to make my resume, and I'm working on creating more templates for it."
        />
      </ProjectContainer>
    </div>
  );
}

export default Projects;
