import HeaderComponent1 from "./headerComponent1";
import HeaderNav from "./headerNav";
import HeaderPromote from "./sectionpromote";

export default function Hearder() {
  return (
    <>
      <header className="max-w-[1700px] m-auto">
        <HeaderPromote />
        <HeaderComponent1 />
        <HeaderNav />
      </header>
    </>
  );
}
