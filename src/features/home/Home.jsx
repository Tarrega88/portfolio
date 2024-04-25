import SectionTitle from "../../ui/SectionTitle";
import Toggle from "../../ui/Toggle";
import Icon from "../../ui/icons/Icon";
import Transitions from "./Transitions";

function Home() {
  return (
    <div>
      {/* <div className="flex flex-col items-end pt-10 pr-2"> */}
      {/* <div className="flex flex-col items-end py-10 pr-2">
        <div>
          <h1 className="flex justify-end text-3xl uppercase">Michael See</h1>
          <h2 className="flex justify-end text-lg">Software Developer</h2>
        </div>
      </div> */}
      <SectionTitle mainTitle="Michael See" subTitle="Software Developer" />
      {/* <div className="pt-10"> */}
      <div>
        <Transitions />
      </div>
    </div>
  );
}

export default Home;
