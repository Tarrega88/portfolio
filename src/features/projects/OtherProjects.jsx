import ProjectContainer from "./ProjectContainer";
import ShowMoreSection from "./ShowMoreSection";
import townStar from "./images/town_star.png";
//TODO 6/18/2024: Include ToolJet Test Creator- here's the YT link:
//https://www.youtube.com/watch?v=1fTYJwWKmIo

function OtherProjects() {
  return (
    <div className="">
      <ProjectContainer
        projectName="Town Star"
        src={townStar}
        shortDescription="A Web3 farming game about resource management."
        url2="https://youtu.be/VQjMD6-833k"
      >
        <ShowMoreSection
          writtenIn="JavaScript"
          lists={[
            {
              type: "Features",
              data: ["Quick Buy Button", "Resource Proximity Display"],
            },
          ]}
          text="I designed and implemented two features for Town Star outside of work hours as a sort of challenge to myself. One was a Quick Buy button to make constructing buildings less repetitive, and another was the Resource Proximity Display, which allowed users to see things like how much shade or water a tile was receiving from its surrounding tiles."
        />
      </ProjectContainer>
    </div>
  );
}

export default OtherProjects;
