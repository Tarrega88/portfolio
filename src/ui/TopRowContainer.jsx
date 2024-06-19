import LogoTop from "./LogoTop";
import SectionTitle from "./SectionTitle";
import TopNav from "./TopNav";

function TopRowContainer({ mainTitle, subTitle }) {
  return (
    <div className="flex items-center justify-between pl-2">
      <div className="flex">
        <LogoTop />
        <TopNav />
      </div>
      <SectionTitle mainTitle={mainTitle} subTitle={subTitle} />
    </div>
  );
}

export default TopRowContainer;