import { FaReact } from "react-icons/fa";
import {
  RiJavascriptLine,
  RiReactjsFill,
  RiCss3Line,
  RiHtml5Line,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import SectionTitle from "../../ui/SectionTitle";

const mySkills = [
  {
    main: "React",
    icon: FaReact,
    subsets: [
      "Redux",
      "Redux Toolkit",
      "React Router",
      "React Query",
      "Redux Thunks",
    ],
  },
  {
    main: "JavaScript",
    icon: RiJavascriptLine,
    subsets: ["and TypeScript"],
  },
  {
    main: "HTML/CSS",
    icon: RiCss3Line,
    subsets: ["Tailwind", "React styled components"],
  },
];

function Skills() {
  return (
    // <div className="mt-6 pl-2 pt-32">
    <div>
      <SectionTitle mainTitle="Skills" subTitle="" emptySubTitle={true} />
      <div className="mt-6 pl-2">
        <ul className="flex flex-col justify-between gap-y-12">
          {mySkills.map((skill) => (
            <li key={skill.main}>
              <div>
                <div className="flex gap-x-2">
                  <div className="flex items-center pr-1 text-[1.5rem]">
                    {<skill.icon />}
                  </div>
                  <div>{skill.main}</div>
                </div>
                <div>
                  <div className="pl-9 text-sm text-zinc-400">
                    {skill.subsets.join(", ")}
                  </div>
                </div>
                {/* <div className="flex">
                {skill.subsets.map((subskill, j) => (
                  <div key={j}>{subskill}</div>
                ))}
              </div> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
