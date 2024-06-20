import { Link } from "react-router-dom";
import PannierElm from "../../../containers/pannier/pannier";
import { useEffect, useState } from "react";
import { Categories } from "./navigate";

const BurgerMenu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-9 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const LogoUser = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="text-white size-9"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

const chevronR = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-5 mobil:size-6 MiniPortable:size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);
export default function ComponentSearch() {
  return (
    <>
      <div className="mobil:hidden MiniPortable:hidden">
        <input
          id="searchBar"
          name="searchBar"
          className="border w-[600px] p-2 screenLarge:max-w-[450px] Laptop:max-w-[350px] Tablette:max-w-[250px]  "
          placeholder="rechercher..."
        />
      </div>
      <Buttons />
    </>
  );
}

const Buttons = () => {
  const [btnclicked, setBtnclicked] = useState(false);
  const [checkedWidth, setCheckedWidth] = useState(window.innerWidth);
  const CheckwidthFun = () => {
    setCheckedWidth(window.innerWidth);
  };

  const handlerBtnclicked = () => {
    // console.log(checkedWidth);
    setBtnclicked(!btnclicked);
  };
  useEffect(() => {
    window.addEventListener("resize", CheckwidthFun);
    handlerBtnclicked();
    return () => {
      window.removeEventListener("resize", CheckwidthFun);
    };
  }, []);

  return (
    <>
      {checkedWidth <= 481 && (
        <div className="invisible Laptop:hidden Tablette:hidden mobil:visible mobil:flex mobil:gap-1 MiniPortable:visible MiniPortable:flex MiniPortable:gap-2">
          <button className="size-9  bg-black" onClick={handlerBtnclicked}>
            {BurgerMenu}
          </button>
          <Link to={"/store.shopiline.cm/account"}>
            {" "}
            <button className="bg-black size-9">{LogoUser}</button>
          </Link>
          <PannierElm />
        </div>
      )}
      {btnclicked ||
        (checkedWidth <= 481 && (
          <div className="relative z-50 left-0 ">
            <NavSousMenu
              btnclicked={handlerBtnclicked}
              checkedWidth={checkedWidth}
            />
          </div>
        ))}
    </>
  );
};

const NavSousMenu = (prop) => {
  const [open, setOpen] = useState(true);

  const handlerBtn = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className={prop.btnclicked ? "openBurgerMenu" : "closeBurgerMenu"}>
        <button
          className="text-white border size-10 mt-4"
          onClick={prop.btnclicked}
        >
          x
        </button>
        <ul className="w-full mt-10  text-white">
          <Link to={"/"}>
            <li className="py-4 mobil:text-xl MiniPortable:text-xl">Accueil</li>
          </Link>
          <Link to={"/Articles/shopiline"}>
            <li className="py-4 mobil:text-xl MiniPortable:text-xl">
              Articles
            </li>
          </Link>
          <li>
            <ul className="cursor-pointer">
              <li className="py-4 flex  items-center mobil:text-xl MiniPortable:text-xl">
                Categories<span onClick={handlerBtn}>{chevronR}</span>
              </li>
              {open ? (
                <div className=" overflow-y-scroll h-[200px]">
                  <Categories />
                </div>
              ) : (
                ""
              )}
            </ul>
          </li>
          <li className="py-4 mobil:text-xl MiniPortable:text-xl">
            Mes Enregistrements
          </li>
        </ul>
        <Link to={"/store.shopiline.cm/inscription"}>
          <div className=""></div>
        </Link>
      </nav>
    </>
  );
};
