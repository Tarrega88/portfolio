import ProjectContainer from "./ProjectContainer";
import ShowMoreSection from "./ShowMoreSection";
import docugen from "./docugen.svg";

function SoloProjects() {
  return (
    <div>
      <ProjectContainer
        projectName="Docu-Gen"
        src={docugen}
        shortDescription="A web app for programmatically creating PDF documents."
        url="https://docu-gen.com"
        url2="https://www.youtube.com/channel/UCd2svLFQHZZWH8BdK3upEHw"
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

export default SoloProjects;
