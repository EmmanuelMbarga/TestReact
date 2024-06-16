import FooterNavigation from "./footerNavigation";
import Footertitle from "./footertitle";

export default function FooterApp() {
  return (
    <>
      <footer className="max-w-[1700px] m-auto bg-black py-10 Tablette:max-w-[1000px]">
        <Footertitle/>
        <FooterNavigation />
      </footer>
    </>
  );
}
