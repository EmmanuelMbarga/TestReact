import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { pannierCartActions } from "../../../store/pannier-cart";
import { useState } from "react";
import ProductCategoryPage from "./categoryProduct";

export const ComponentArticle = () => {
  const dispacth = useDispatch();
  const lienCategori = useSelector((state) => state.btnAllCategorie.items);
  const UrlCategories = `https://dummyjson.com/products/category/${lienCategori}`;
  const [categoryProduct, setCategoryProduct] = useState(false);
  // console.log(categoryProduct);

  const {
    data: Articles,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["articles", lienCategori],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return axios.get(UrlCategories);
    },
    enabled: !!lienCategori,
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
      <p className="text-center my-10 text-red-500 font-inter text-xl">
        {error.message}
      </p>
    );
  }

  const handlerPageCategoryCliked = () => {
    setCategoryProduct(!categoryProduct);
  };

  return (
    <>
      <div className="w-full ">
        <div className="grid grid-cols-4 Laptop:grid-cols-3 Tablette:grid-cols-2 mobil:grid-cols-1 MiniPortable:grid-cols-1">
          {Articles?.data.products.map((article) => (
            <>
              <div className="containerCardsPhone">
                <div className="max-w-[300px] my-4 p-4" key={article.id}>
                  <div className="flex justify-center bg-white">
                    <img
                      src={article.thumbnail}
                      alt=""
                      className="w-[200px] h-[200px] object-cover"
                    />
                  </div>
                  <div>
                    <p>{article.title}</p>
                    <p className="text-xs my-4 font-inter">
                      {article.description}
                    </p>
                    <div className="flex justify-between mobil:flex-col">
                      <span className="mr-2 mobil:mb-3">
                        price:
                        <small className="font-bold font-inter">
                          {article.price}
                        </small>
                      </span>
                      <div className="grid grid-cols-2 gap-2 Laptop:grid-cols-1 Laptop:gap-1 Tablette:grid-cols-1">
                        <button
                          className=" text-xs p-1 rounded bg-black transition-colors hover:bg-yellow-600 text-white shadow-sm font-inter Tablette:p-[2px] Tablette:text-[8px]"
                          onClick={handlerPageCategoryCliked}
                        >
                          consuter
                        </button>
                        <button
                          className=" text-xs p-1 rounded bg-black transition-colors hover:bg-yellow-600 text-white shadow-sm font-inter Tablette:p-[2px] Tablette:text-[8px]"
                          onClick={() => {
                            dispacth(pannierCartActions.addItemToCart(article));
                          }}
                        >
                          Ajouters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      {categoryProduct && (
        <>
          <ProductCategoryPage
            cardCategory={Articles?.data.products}
            btnClicked={handlerPageCategoryCliked}
          />{" "}
        </>
      )}
      {categoryProduct && (
        <div className="fixed z-20 bg-black backdrop-blur-sm bg-opacity-40  max-w-[1700px] left-0 right-0 top-0  m-auto   h-full"></div>
      )}
    </>
  );
};
