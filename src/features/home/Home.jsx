import TopRowContainer from "../../ui/TopRowContainer";
import Transitions from "./Transitions";

function Home() {
  return (
    <div className="w-full">
      <TopRowContainer mainTitle="Michael See" subTitle="Software Developer" />
      <Transitions />
    </div>
  );
}

export default Home;
