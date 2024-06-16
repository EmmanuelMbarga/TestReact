import { Link } from "react-router-dom";

import PannierElm from "../../../containers/pannier/pannier";

export default function HeaderPromote() {
  return (
    <>
      <div className="bg-black p-2 text-white flex justify-between px-4 Tablette:hidden mobil:hidden MiniPortable:hidden">
        <button>
          <Link to={"/store.shopiline.cm/inscription"}>
            Inscrivez-vous et economisez 10%
          </Link>
        </button>
        <ul className="flex gap-4 items-center">
          <Link to={"/store.shopiline.cm/account"}>
            <li className="font-inter">Mon compte</li>
          </Link>
          <PannierElm />
        </ul>
      </div>
    </>
  );
}
