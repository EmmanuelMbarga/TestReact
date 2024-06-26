import { Link } from "react-router-dom";
import logo1 from "/logos/Fichier 2.png";
import logo2 from "/logos/Fichier 22.png";
import logo3 from "/logos/gmail2.png";

export default function FooterNavigation() {
  return (
    <>
      <div className="text-white flex mt-20 items-center justify-around Tablette:items-end Tablette:mx-4 mobil:flex-col MiniPortable:flex-col">
        <div className="mr-4 mobil:flex mobil:mx-2 mobil:justify-evenly mobil:gap-4 mobil:w-fit">
          <div className="capitalize">
            <h3 className="text-xl uppercase cursor-pointer mobil:text-xs">
              service client
            </h3>
            <ul className="text-sm font-inter my-6 cursor-pointer mobil:text-xs">
              <li>Aidez-moi</li>
              <li className="my-4">suivre ma commande</li>
              <li>Guide des tailles</li>
            </ul>
          </div>
          <div className="capitalize">
            <h3 className="text-xl uppercase cursor-pointer mobil:text-xs">
              Nos engagements
            </h3>
            <ul className="text-sm font-inter my-6 cursor-pointer mobil:text-xs mobil:mt-2">
              <li>Achats sécurisés</li>
              <li className="my-4">livaison & expedition</li>
              <li>retours sous 90 jours</li>
            </ul>
          </div>
          <div className="capitalize">
            <h3 className="text-xl uppercase cursor-pointer mobil:text-xs">
              Informations
            </h3>
            <ul className="text-sm font-inter my-6 cursor-pointer mobil:text-xs">
              <li>mon compte</li>
              <li className="my-4">nous contatcter</li>
              <li>le programme {"d'affiliation"}</li>
            </ul>
          </div>
        </div>
        <FooterConnexion />
      </div>
    </>
  );
}

const FooterConnexion = () => {
  return (
    <>
      <div className="px-4 MiniPortable:px-1">
        <small className="mobil:text-center mobil:text-xs MiniPortable:text-xs">
          Restez à jour sur les promotions, les nouveaux articles et plus
        </small>
        <br />

        <Link to={"/store.shopiline.cm/inscription"}>
          <button className="my-8 border p-6 w-fit mobil:p-2 MiniPortable:p-0 MiniPortable:text-xs">
            inscrivez-vous et economisez 10%
          </button>
        </Link>

        <div className="w-52 MiniPortable:w-36 MiniPortable:gap-2">
          <h3>suivez-nous</h3>
          <div className="grid grid-cols-4 cursor-pointer MiniPortable:grid-cols-3">
            <Link to={"https://wa.me/+237698397075"} target="_blanck">
              <div>
                <img
                  src={logo1}
                  alt="whatsapp"
                  className=" h-10 w-10 rounded-full"
                />
              </div>
            </Link>
            <Link to={"https://t.me/Emmanuelmbarg"} target="_blanck">
              <div>
                <img
                  src={logo2}
                  alt="telegramme"
                  className=" h-10 w-10 rounded-full"
                />
              </div>
            </Link>
            <Link to={"mailto:emmanuelmbarg@gmail.com"} target="_blanck">
              <div>
                <img
                  src={logo3}
                  alt="gmail"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
