import TopRowContainer from "../../ui/TopRowContainer";
import Palette from "./Palette";
import Transitions from "./Transitions";

function Home() {
  return (
    <div className="h-max w-full">
      <TopRowContainer mainTitle="Michael See" subTitle="Software Developer" />
      <Transitions />
      <Palette />
    </div>
  );
}

export default Home;
