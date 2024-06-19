import LogoTop from "./LogoTop";
import SectionTitle from "./SectionTitle";
import TopNav from "./TopNav";

function TopRowContainer({ mainTitle, subTitle }) {
  return (
    <div className="flex items-center justify-between pb-8 pl-2 md:px-8 md:pt-8">
      <div className="flex items-center">
        <LogoTop />
        <TopNav />
      </div>
      <SectionTitle mainTitle={mainTitle} subTitle={subTitle} />
    </div>
  );
}

export default TopRowContainer;
