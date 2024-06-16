import { useSelector } from "react-redux";
import CardView from "../body/cardView";
import HeaderComponent1 from "./headerComponent1";
import HeaderNav from "./headerNav";
import HeaderPromote from "./sectionpromote";


export default function Hearder() {
  const interfaceItems=useSelector((state)=>state.pannierAchat.isCartVisible)


  return (
    <>
      <header className="max-w-[1700px] relative m-auto">
        <HeaderPromote />
        <div className="absolute mt-22 z-50 w-full MiniPortable:mt-36 mobil:mt-10 Tablette:mt-16">
        {interfaceItems && <CardView/>}
        </div>
        <HeaderComponent1 />
        <HeaderNav />
      </header>
    </>
  );
}
