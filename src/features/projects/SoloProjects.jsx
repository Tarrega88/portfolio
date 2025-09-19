import ProjectContainer from "./ProjectContainer";
import ShowMoreSection from "./ShowMoreSection";
import docugen from "./docugen.svg";
import hobaIcon from "./images/hoba_icon.png";
import oblivIcon from "./images/oblivTransparent.png";
import electronIcon from "./images/electronTransparent.png";
import squareLogo from "./images/squareLogo.svg";
import modularResumeLogo from "./images/logoFilled768.png";

function SoloProjects() {
  return (
    <div>
      <ProjectContainer
        projectName="Modular Resume"
        url="https://modularresume.com/"
        src={modularResumeLogo}
        shortDescription="A web application built in React that enables the user to create resumes"
        githubUrl="https://github.com/Tarrega88/modular-resume-2"
      >
        <ShowMoreSection
          writtenIn="TypeScript with React"
          lists={[
            { type: "Libraries", data: ["Redux", "Router", "Sonner", "Dexie"] },
          ]}
          text={[
            "Modular Resume allows the user to create resumes, and it automatically saves each section into the browser's indexed db.",
            "This allows the user to edit multiple resumes at once, or bring sections of one resume to another very quickly.",
            "Some of the choices I made were based on making sure the resume output would be legible to ATS (applicant tracking systems), such as the absolutely positioned elements being positioned not in what would appear to be well-suited relative containers. Relative positioning messes with how PDFs are read, so some odd choice had to be made occasionally.",
            "That said, I met my goal of building the most user-friendly application I possibly could at this point in time, while also providing a legitimately powerful tool.",
          ]}
        />
      </ProjectContainer>
      <ProjectContainer
        projectName="Quote Creator"
        src={electronIcon}
        shortDescription="An Electron app I created for a labor contractor that wanted a quick, simple way to generate quotes for his customers"
        githubUrl="https://github.com/Tarrega88/quote-creator"
        youtubeUrl="https://youtu.be/OZHxZq4Yamw"
      >
        <ShowMoreSection
          writtenIn="JavaScript with React, with the Electron framework"
          lists={[{ type: "Libraries", data: ["Redux", "Router"] }]}
          text={[
            "This allows the user to create and generate quotes. It does this by allowing the creation of custom expenses, materials, and services.",
            "Since it's an Electron application, there's no website but the YouTube video shows how it works, and I will likely make a web version of this to showcase it.",
          ]}
        />
      </ProjectContainer>
      <ProjectContainer
        projectName="Oblivion Remastered Difficulty Calculator"
        src={oblivIcon}
        shortDescription="A web app for helping players tweak their difficulty in Oblivion Remastered"
        url="https://oblivion-difficulty-calculator.com/"
        githubUrl="https://github.com/Tarrega88/oblivion-remaster-difficulty-calculator"
      >
        <ShowMoreSection
          writtenIn="JavaScript with React"
          lists={[{ type: "Libraries", data: ["Redux", "Recharts"] }]}
          text={[
            "The Oblivion Difficulty Calculator is a tool I designed because I noticed a lot of people wanting to tweak the difficulty on their game. I created this soon after the game's release as a way to help players and modders, and also practice my skillset.",
          ]}
        />
      </ProjectContainer>
      <ProjectContainer
        projectName="Docu-Gen"
        src={docugen}
        shortDescription="A web app for programmatically creating PDF documents."
        url="https://docu-gen.com"
        youtubeUrl="https://www.youtube.com/channel/UCd2svLFQHZZWH8BdK3upEHw"
        githubUrl="https://github.com/Tarrega88/resume-maker"
      >
        <ShowMoreSection
          writtenIn="JavaScript with React"
          lists={[{ type: "Libraries", data: ["Redux", "React Router"] }]}
          text={[
            "A powerful (and, admittedly, cumbersome) web application, Docu-Gen allows users the ability to programmatically create styled documents with CSS.",
          ]}
        />
      </ProjectContainer>
      <ProjectContainer
        projectName="This Site"
        src={squareLogo}
        shortDescription="The actual site you're on right now - just leaving this here in case you want to check out the Github link!"
        url="https://michaelthedev.com/"
        githubUrl="https://github.com/Tarrega88/portfolio"
      >
        <ShowMoreSection
          writtenIn="JavaScript with React"
          lists={[{ type: "Libraries", data: ["Redux", "React Router"] }]}
          text={[
            "I designed this portfolio site to be as modular as possible, which makes updating it easy. I hope you like the day and night mode transition animation on the front page - I made every frame of it in a pixel art program.",
          ]}
        />
      </ProjectContainer>
      <ProjectContainer
        projectName="Art Browser"
        src={hobaIcon}
        shortDescription="A web app for browsing and filtering through art."
        youtubeUrl="https://www.youtube.com/watch?v=xL2RGii2LtA"
      >
        <ShowMoreSection
          writtenIn="JavaScript with React"
          lists={[{ type: "Libraries", data: ["React Router"] }]}
          text={[
            "This art browser was designed for a team that wanted the ability to browse, filter, and error-check their programmatically generated art before releasing to the public.",
          ]}
        />
      </ProjectContainer>
    </div>
  );
}

export default SoloProjects;
