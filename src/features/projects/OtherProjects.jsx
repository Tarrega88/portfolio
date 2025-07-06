import ProjectContainer from "./ProjectContainer";
import ShowMoreSection from "./ShowMoreSection";
import townStar from "./images/town_star.png";
import tooljetIcon from "./images/tooljet_icon.jpg";
import musicIcon from "./images/music_icon.png";

function OtherProjects() {
  return (
    <div>
      <ProjectContainer
        projectName="Winter Theme Music"
        src={musicIcon}
        shortDescription="A piece of music I wrote for the winter themed update in the game Town Star in 2022."
        url2="https://www.youtube.com/watch?v=2nUxZY7yYcg"
      >
        <ShowMoreSection
          writtenIn="Reaper"
          text={[
            "I envisioned a snow hare tiptoeing across a quiet, snowy landscape while writing this.",
            "I wanted the music to loop in on itself because it was being used for a game, so I had to make sure it started and ended in a way that connected well.",
            "",
          ]}
        />
      </ProjectContainer>
      <ProjectContainer
        projectName="Town Star"
        src={townStar}
        shortDescription="A farming game about resource management."
        url2="https://youtu.be/VQjMD6-833k"
      >
        <ShowMoreSection
          writtenIn="JavaScript/PlayCanvas"
          lists={[
            {
              type: "Features",
              data: ["Quick Buy Button", "Resource Proximity Display"],
            },
          ]}
          text={[
            "I designed and implemented two features for Town Star outside of work hours as a sort of challenge to myself:",
            "Quick Buy Button - used to make constructing buildings less repetitive. It showed a build option of the last building purchased whenever a tile was clicked, allowing for faster construction.",
            "Resource Proximity Display - allowed users to see tile-data, like how much shade or water a tile was receiving from its surrounding tiles.",
          ]}
        />
      </ProjectContainer>
      <ProjectContainer
        projectName="QA Test Creator"
        src={tooljetIcon}
        shortDescription="A test creation tool created inside of ToolJet."
        url2="https://www.youtube.com/watch?v=1fTYJwWKmIo"
      >
        <ShowMoreSection
          writtenIn="JavaScript / Tooljet"
          lists={[
            {
              type: "Features",
              data: ["Customized Templating", "Test generation"],
            },
          ]}
          text={[
            "This tool was designed to allow the QA team to generate customized tests.",
            "It tapped into our database and allowed test creators to rereference key-words, which would then in turn grab all of the descendant data from that key-word.",
            "From there, the test creator could select all, or filter out unnecessary data.",
          ]}
        />
      </ProjectContainer>
    </div>
  );
}

export default OtherProjects;
