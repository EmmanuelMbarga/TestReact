import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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

export default function Navigate() {
  const [openCategories, setOpenCategories] = useState(false);

  const handlerCliked = () => {
    setOpenCategories(!openCategories);
  };

  return (
    <>
      <nav>
        <ul className="flex items-center justify-evenly bg-black text-white mobil:text-xs MiniPortable:text-xs ">
          <li className="MiniPortable:text-[5px]">zara</li>
          <li className="MiniPortable:text-[5px]">Tenues de Sortie</li>
          <li>
            <ul onClick={handlerCliked} className="cursor-pointer">
              <li className="flex items-center MiniPortable:text-[5px]">
                categories<span onClick={handlerCliked}>{chevronR}</span>
              </li>
            </ul>
          </li>
          <li className="MiniPortable:text-[5px]">autres</li>
          <button className=" absolute invisible Laptop:hidden Tablette:hidden ml-2 mobil:visible mobil:relative MiniPortable:visible MiniPortable:relative">
            {iconSearch}
          </button>
        </ul>
        <div className="absolute border-t text-center bg-black text-white invisible Laptop:hidden Tablette:hidden mobil:visible mobil:relative MiniPortable:visible MiniPortable:relative MiniPortable:text-sm">
          <button>Inscrivez-vous et economisez 10%</button>
        </div>
      </nav>

      {/* ------------------------------------------------------------------Section Categorie------------------------------------------------------------------ */}
      {openCategories && (
        <div className="-mt-8 relative flex justify-center p-4 ">
          <div className="fixed z-50 w-[50%]">
            {" "}
            <div className="w-[90%] absolute bg-white shadow-xl z-50 p-4 rounded-lg">
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
const Categories = () => {
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
        <div key={categories}>
          <div className=" relative z-50 cursor-pointer border-t transition rounded-md hover:text-white hover:bg-black flex items-center justify-between mobil:hover:bg-white mobil:border-t-2 mobil:text-xs MiniPortable:text-xs MiniPortable:hover:bg-white mobil:hover:text-black MiniPortable:hover:text-black">
            <button key={categories} className="p-4 text-left ">
              {categories}
            </button>
            <span>{chevronR}</span>
          </div>
        </div>
      ))}
    </>
  );
};
