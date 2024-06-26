import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const iconSearch = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className=" mobil:size-6 MiniPortable:size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
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
    className="size-5 mobil:size-3 MiniPortable:size-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

function Navigate() {
  const [openCategories, setOpenCategories] = useState(false);

  const handlerCliked = () => {
    setOpenCategories(!openCategories);
  };

  return (
    <>
      <nav>
        <ul className="flex items-center justify-evenly bg-black text-white mobil:hidden MiniPortable:hidden ">
          <Link to={"/"}>
            <li className="MiniPortable:text-[5px]">Accueil</li>
          </Link>
          <Link to={"/Articles/shopiline"}>
            <li className="MiniPortable:text-[5px]">Articles</li>
          </Link>
          <li>
            <ul onClick={handlerCliked} className="cursor-pointer">
              <li className="flex items-center MiniPortable:text-[5px]">
                Categories<span onClick={handlerCliked}>{chevronR}</span>
              </li>
            </ul>
          </li>
          <li className="MiniPortable:text-[5px]">Mes Enregistrements</li>
          <button className=" absolute invisible Laptop:hidden Tablette:hidden ml-2 mobil:visible mobil:relative MiniPortable:visible MiniPortable:relative">
            {iconSearch}
          </button>
        </ul>
        <Link to={"/store.shopiline.cm/inscription"}>
          <div className="absolute border-t text-center bg-black text-white invisible Laptop:hidden Tablette:hidden mobil:visible mobil:relative MiniPortable:visible MiniPortable:relative MiniPortable:text-sm mobil:bg-yellow-700 ">
            <button>Inscrivez-vous et economisez 10%</button>
          </div>
        </Link>
      </nav>

      {/* ------------------------------------------------------------------Section Categorie------------------------------------------------------------------ */}
      {openCategories && (
        <div className="-mt-40 relative flex justify-center p-4 MiniPortable:-mt-10 mobil:-mt-8 Tablette:-mt-8 Laptop:-mt-20 ">
          <div className="fixed z-50 w-[50%] Tablette:w-[95%] mobil:w-[95%] MiniPortable:w-[95%] Laptop:w-[95%]">
            {" "}
            <div className="w-[90%] absolute bg-white shadow-xl z-50 p-4 rounded-lg Laptop:w-[100%] mobil:w-[100%] MiniPortable:w-[100%] Tablette:w-[100%]">
              <button
                onClick={handlerCliked}
                className="border w-8 h-8 flex justify-center items-center cursor-pointer bg-red-500 rounded-full"
              >
                x
              </button>
              <h2 className="text-center text-2xl pb-10 MiniPortable:text-xs MiniPortable:py-5 mobil:py-6  ">
                categories
              </h2>
              <div>
                <div className=" overflow-y-scroll h-[380px]">
                  <Categories />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {openCategories && (
        <div className="fixed z-20 bg-black backdrop-blur-sm bg-opacity-40  max-w-[1700px] left-0 right-0 top-0  m-auto   h-full"></div>
      )}
    </>
  );
}
export const Categories = () => {
  const {
    data: Categorie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categorie"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axios.get("https://dummyjson.com/products/category-list");
    },
    retry: 1,
  });
  if (isLoading) {
    return (
      <img
        src="https://i.gifer.com/ZKZg.gif"
        alt="loading"
        className="w-10 h-10 m-auto mt-40"
      />
    );
  }
  if (isError) {
    return (
      <div>
        <p className="text-center mt-40 text-2xl text-red-400 font-inter">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <>
      {Categorie?.data.map((categories) => (
        <>
          <Link to={"/Articles/shopiline"}>
            <div key={categories}>
              <div className=" relative z-50 cursor-pointer border-t transition rounded-md hover:text-white hover:bg-black flex items-center justify-between Tablette:rounded-none mobil:rounded-none MiniPortable:rounded-none mobil:hover:bg-white mobil:border-t-2 mobil:text-xs MiniPortable:text-xs MiniPortable:hover:bg-white mobil:hover:text-black MiniPortable:hover:text-black">
                <button key={categories} className="p-4 text-left ">
                  {categories}
                </button>
                <span>{chevronR}</span>
              </div>
            </div>
          </Link>
        </>
      ))}
    </>
  );
};

export default Navigate;