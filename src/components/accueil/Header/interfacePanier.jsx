import { useSelector } from "react-redux";
import CardView from "../body/cardView";


export const InterfacePanier = () => {
    const interfaceItems = useSelector(
        (state) => state.pannierAchat.isCartVisible
      );
  return (
    
    <div className="absolute mt-22 z-50 w-full MiniPortable:mt-36 mobil:mt-10 Tablette:mt-16">
    {interfaceItems && <CardView/>}
  </div>
  )
}
