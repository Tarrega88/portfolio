import { FaReact } from "react-icons/fa";
import { RiJavascriptLine, RiCss3Line, RiHtml5Line } from "react-icons/ri";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
} from "react-icons/si";
import SectionTitle from "../../ui/SectionTitle";
import CodeBlock from "../../ui/CodeBlock";
import { useEffect, useState } from "react";
import useDynamicColor from "../../hooks/useDynamicColor";
import TopRowContainer from "../../ui/TopRowContainer";

const mySkills = [
  {
    main: "React",
    icon: FaReact,
    subsets: [
      { name: "React", hasExample: true },
      {
        name: "Redux",
        hasExample: true,
      },
      {
        name: "Redux Toolkit",
        hasExample: true,
      },
      {
        name: "React Router",
        hasExample: true,
      },
    ],
  },
  {
    main: "JavaScript",
    icon: RiJavascriptLine,
    subsets: [
      {
        name: "JavaScript",
        hasExample: true,
      },
      {
        name: "TypeScript",
        hasExample: true,
      },
    ],
  },
  {
    main: "HTML/CSS",
    icon: RiCss3Line,
    subsets: [
      { name: "HTML", hasExample: true },
      { name: "CSS", hasExample: true },
      { name: "Tailwind", hasExample: true },
    ],
  },
];

const examples = {
  React: {
    intro:
      "I am using useState here to determine whether a video element is seen in the homagepage:",
    example: `
  const [visible, setVisible] = 
  useState(lightMode === "day");

    <video
    key={media.VIDEO.day}
    onClick={handlePlayNight}
    onEnded={handleNightEnd}
    onPlaying={() => setVisible(true)}
    ref={videoRefDay}>
...
  `,
    icon: <FaReact />,
  },
  "Redux Toolkit": {
    intro: "...because who doesn't like reducing boilerplate code?",
    example: `
  const store = configureStore({
    reducer: {
      ui: uiReducer,
    },
  });`,
    icon: <SiRedux />,
  },
  "React Router": {
    intro:
      "In the interest of keeping the example short, this is only a small portion of the App file:",
    example: `const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);`,
    icon: <SiReactrouter />,
  },
  TypeScript: {
    intro:
      "I used JavaScript on this site, but TypeScript's ability to catch type errors before they become a problem is great, especially on anything larger than a solo project.",
    example: `
    interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
  }`,
    icon: <SiTypescript />,
  },
  Redux: {
    intro:
      "I used Redux's useSelector and useDispatch here to control the display mode and animation on the home page:",
    example: `
  const dispatch = useDispatch();
  const { lightMode } = 
  useSelector((state) => state.ui);

  function hideImage() {
    if (lightMode === "night") {
      dispatch(setLightMode("day"));
      videoRefNight.current.play();
    } else if (lightMode === "day") {
      dispatch(setLightMode("night"));
      videoRefDay.current.play();
    }
    setImgVisible(false);
  }
`,
    icon: <SiRedux />,
  },
  JavaScript: {
    intro:
      "This example isn't in the site, but it filters evens and odds in one reducer as opposed to using two filter functions:",
    example: `
  const evensAndOdds = (arr) =>
  arr.reduce(
    (a, b) => {
      b % 2 === 0 ? a.evens.push(b) :
      a.odds.push(b);
      return a;
    },
    {
      evens: [],
      odds: [],
    },
  );
`,
    icon: <SiJavascript />,
  },
  HTML: {
    intro:
      "This is JSX with classNames removed for legibility, not pure HTML, but this is similar to how I have my main titles set up:",
    example: `
function SectionTitle(
{ mainTitle, subTitle, emptySubTitle }) {
  return (
    <header>
      <h1>{mainTitle}</h1>
      <h2>{subTitle}</h2>
    </header>
  )
}`,
    icon: <RiHtml5Line />,
  },
  Tailwind: {
    intro:
      "This example pulls from the same area as the HTML example, showing the positioning of the main titles in mobile mode:",
    example: `<h1 className="flex justify-end text-3xl uppercase">{mainTitle}</h1>`,
    icon: <SiTailwindcss />,
  },
  CSS: {
    intro:
      "This example is not part of the site but I wanted to show some pure CSS:",
    example: `
    .button {
      width: 92px;
      height: 36px;
      background-color: #212121;
      cursor: pointer;
      color: #ddd;
      font-size: 1.5rem;
      transition: all 0.25s;
    }
    
    .button:hover {
      color: #ccc;
      background-color: #555;
    }`,
    icon: <RiCss3Line />,
  },
};

function Skills() {
  const dynamicColor = useDynamicColor();

  const [codeSection, setCodeSection] = useState("React");
  const [currentSkill, setCurrentSkill] = useState("");

  useEffect(() => setCurrentSkill("React"), []);

  function handleClick(mainSkill, subSkill) {
    if (currentSkill === subSkill) {
      setCurrentSkill(null);
    } else {
      setCodeSection(mainSkill);
      setCurrentSkill(subSkill);
    }
  }
  /*justify-between in the ul might not be doing anything so I removed it- will check later*/
  return (
    <div>
      {/* <SectionTitle mainTitle="Skills" subTitle="" emptySubTitle={true} /> */}
      <TopRowContainer mainTitle="Skills" subTitle="" emptySubTitle={true} />
      <div className="mt-6 pl-2">
        <ul className="flex flex-col gap-y-12">
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
                  <div className={`pl-9 text-sm ${dynamicColor.subText}`}>
                    {skill.subsets.map((e, i) => (
                      <span
                        key={e.name}
                        onClick={() =>
                          handleClick(skill.main, e.name, e.example)
                        }
                        className={`${dynamicColor.subTextHover} cursor-pointer ${currentSkill === e.name ? dynamicColor.subTextSelected : ""}`}
                      >
                        {e.name}
                        {skill.subsets.length - i > 1 ? ", " : ""}
                      </span>
                    ))}
                    <div
                      className={`justify-center overflow-y-auto text-xs transition-all duration-300 ${dynamicColor.codeBg} ${currentSkill && codeSection === skill.main ? "h-32 p-3 pt-6" : "h-0 pt-0"}`}
                    >
                      {currentSkill && (
                        <CodeBlock
                          heading={currentSkill}
                          intro={examples[currentSkill].intro}
                          text={examples[currentSkill].example}
                          icon={examples[currentSkill].icon}
                          current={currentSkill && codeSection === skill.main}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
