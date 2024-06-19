import HeaderComponent1 from "./headerComponent1";
import HeaderNav from "./headerNav";
import { InterfacePanier } from "./interfacePanier";
import HeaderPromote from "./sectionpromote";

export default function Hearder() {
  return (
    <>
      <header className="max-w-[1700px] relative m-auto">
        <HeaderPromote />
        <InterfacePanier />
        <HeaderComponent1 />
        <HeaderNav />
      </header>
    </>
  );
}
