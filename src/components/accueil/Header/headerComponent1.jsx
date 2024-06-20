import PannierElm from "../../../containers/pannier/pannier";
import ComponentLogo from "./componentLogo";
import ComponentSearch from "./componentSearch";

export default function HeaderComponent1() {
  return (
    <>
      <div className="flex justify-start py-8 items-center px-8 Tablette:py-2 Tablette:px-2 mobil:px-1 mobil:py-2 mobil:justify-around MiniPortable:flex-col MiniPortable:py-2 MiniPortable:px-1">
        <ComponentLogo />
        <ComponentSearch />
        <div className="mobil:hidden MiniPortable:hidden Laptop:hidden screenLarge:hidden">
        <PannierElm/>
        </div>
      </div>
    </>
  );
}
