import ComponentLogo from "./componentLogo";
import ComponentSearch from "./componentSearch";

export default function HeaderComponent1() {
  return (
    <>
      <div className="flex justify-start p-8 items-center">
        <ComponentLogo/>
        <ComponentSearch/>
      </div>
    </>
  );
}
