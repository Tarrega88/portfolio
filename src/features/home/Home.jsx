import TopRowContainer from "../../ui/TopRowContainer";
import Palette from "./Palette";
import Transitions from "./Transitions";

function Home() {
  //originally h-max
  return (
    <div className="relative h-screen w-full">
      <TopRowContainer mainTitle="Michael See" subTitle="Software Developer" />
      <Transitions />
      <Palette />
    </div>
  );
}

export default Home;
