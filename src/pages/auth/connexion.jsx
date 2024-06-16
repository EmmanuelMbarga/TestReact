import { Link } from "react-router-dom";
import ComponentLogo from "../../components/accueil/Header/componentLogo";
import FormValidateConn from "./validator/formValidateConn";
import UserCondition from "./userCondition";

export default function Connexion() {
  return (
    <div className="max-w-[400px] m-auto Tablette:max-w-[300px] mobil:max-w-[300px]">
      <div className="flex justify-center mt-4">
        <ComponentLogo />
      </div>
      <div className="flex flex-col justify-center my-10 px-4">
        <div className="border p-10 Tablette:p-5 mobil:p-3 MiniPortable:p-2">
          <h1 className="text-center text-3xl MiniPortable:text-xl">connexion a votre compte</h1>
          <div className="my-8 MiniPortable:text-sm MiniPortable:my-3">
            <div className="flex flex-col justify-center">
              {/* ici mettre le composant de connexion */}
              <FormValidateConn/>
              <UserCondition/>
            </div>
          </div>
        </div>
        <div className=" my-10">
          <div className="flex items-center justify-evenly">
            <div className="border-t-4 border-yellow-300 w-full"></div>
            <p className="text-center text-sm font-inter mobil:text-xs mobil:px-3 MiniPortable:text-xs">
              Nouveau chez SHOPLINE?
            </p>
            <div className="border-t-4 border-yellow-300 w-full"></div>
          </div>
        </div>
        <div className="text-center">
          <Link to={"/store.shopiline.cm/inscription"}><button className="bg-neutral-100 border shadow-md p-3 rounded font-inter text-sm MiniPortable:text-xs">Inscription sur SHOPILINE </button></Link> 
        </div>
      </div>
    </div>
  );
}
