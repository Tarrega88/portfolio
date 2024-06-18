import ProjectContainer from "./ProjectContainer";
import ShowMoreSection from "./ShowMoreSection";
import docugen from "./docugen.svg";
import docugenpic1 from "./images/docu-gen-example.png";
import hobaIcon from "./images/hoba_icon.png";

function SoloProjects() {
  console.log(docugenpic1);
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
          lists={[{ type: "Libraries", data: ["Redux", "React Router"] }]}
          text="Docu-Gen allows users the ability to programmatically create styled documents with CSS. After I built it, I used it to make my resume, and I'm working on creating more templates for it."
        />
      </ProjectContainer>
      <ProjectContainer
        projectName="Art Browser"
        src={hobaIcon}
        shortDescription="A web app for browsing and filtering through blockchain art."
        url2="https://www.youtube.com/watch?v=xL2RGii2LtA"
      >
        <ShowMoreSection
          writtenIn="JavaScript with React"
          lists={[{ type: "Libraries", data: ["React Router"] }]}
          text="This art browser was designed for a team that wanted the ability to browse, filter, and error-check their NFTs before releasing to the public."
        />
      </ProjectContainer>
    </div>
  );
}

export default SoloProjects;
