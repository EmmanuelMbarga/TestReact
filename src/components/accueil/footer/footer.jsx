import FooterNavigation from "./footerNavigation";
import Footertitle from "./footertitle";

export default function FooterApp() {
  return (
    <>
      <footer className="max-w-[1700px] m-auto bg-black py-10 Tablette:max-w-[1000px]">
        <Footertitle/>
        <FooterNavigation />
        <p className="text-white text-center font-inter mt-4 text-base MiniPortable:text-xs mobil:text-xs Tablette:text-sm Laptop:text-sm">© 2024 | Copyright | Emmanuel Mbarga , Tous droits reservé</p>
      </footer>
    </>
  );
}
