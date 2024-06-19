import LogoTop from "./LogoTop";
import SectionTitle from "./SectionTitle";

function TopRowContainer({ mainTitle, subTitle }) {
  return (
    <div className="flex items-center justify-between pl-2 sm:mt-24">
      <LogoTop />
      <SectionTitle mainTitle={mainTitle} subTitle={subTitle} />
    </div>
  );
}

export default TopRowContainer;
