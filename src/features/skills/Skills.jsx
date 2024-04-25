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
import { colors } from "../../helpers/colorClasses";
import { useSelector } from "react-redux";
import CodeBlock from "../../ui/CodeBlock";
import { useState } from "react";

const mySkills = [
  {
    main: "React",
    icon: FaReact,
    // subsets: [
    //   "Redux",
    //   "Redux Toolkit",
    //   "React Router",
    //   "React Query",
    //   "Redux Thunks",
    // ],

    subsets: [
      {
        name: "Redux",
        hasExample: true,
        example: `
        const store = configureStore({
          reducer: {
            ui: uiReducer,
          },
        });`,
      },
      {
        name: "Redux Toolkit",
        hasExample: false,
        example: "Here's the example",
      },
      {
        name: "React Router",
        hasExample: false,
        example: "Here's the example",
      },
      { name: "React Query", hasExample: false, example: "Here's the example" },
      {
        name: "Redux Thunks",
        hasExample: false,
        example: "Here's the example",
      },
    ],
  },
  {
    main: "JavaScript",
    icon: RiJavascriptLine,
    subsets: [
      {
        name: "TypeScript",
        hasExample: false,
        example: "Here's the example",
      },
    ],
  },
  {
    main: "HTML/CSS",
    icon: RiCss3Line,
    subsets: [
      { name: "Tailwind", hasExample: false, example: "" },
      { name: "React styled components", hasExample: false, example: "" },
    ],
  },
];

function Skills() {
  const { lightMode, colorMode } = useSelector((state) => state.ui);

  const [codeSection, setCodeSection] = useState(null);
  const [currentSkill, setCurrentSkill] = useState("");
  const [codeExample, setCodeExample] = useState("");
  console.log(codeSection);

  function handleClick(mainSkill, subSkill, example) {
    // if (!subSkill) return;
    setCodeSection(mainSkill);
    setCurrentSkill(subSkill);
    setCodeExample(example);
  }

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
                  <div
                    className={`pl-9 text-sm ${colors[colorMode][lightMode].subText}`}
                  >
                    {skill.subsets.map((e, i) => (
                      <span
                        key={e.name}
                        onClick={
                          () =>
                            e.hasExample &&
                            handleClick(skill.main, e.name, e.example)
                          // e.hasExample
                          //   ? setCodeSection(skill.main)
                          //   : console.log("No example")
                        }
                        className={`${colors[colorMode][lightMode].subTextHover} cursor-pointer`}
                      >
                        {e.name}
                        {skill.subsets.length - i > 1 ? ", " : ""}
                      </span>
                    ))}
                    {/* {<CodeBlock />} */}
                  </div>
                  {skill.main === codeSection && (
                    <div className="flex justify-center pt-2">
                      <CodeBlock heading={currentSkill} text={codeExample} />
                    </div>
                  )}
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
