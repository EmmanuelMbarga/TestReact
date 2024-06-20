import { useDispatch } from "react-redux";
import { pannierCartActions } from "../../../store/pannier-cart";
import { useState } from "react";
import ProductCategoryPage from "./categoryProduct";

export const ComponentArticle = (prop) => {
  const dispatch = useDispatch();
  const [categoryProduct, setCategoryProduct] = useState(false);
  const handlerPageCategoryCliked = () => {
    setCategoryProduct(!categoryProduct);
  };
  return (
    <>
      <div className="containerCardsPhone">
        <div className="max-w-[300px] my-4 p-4">
          <div className="flex justify-center bg-white">
            <img
              src={prop.thumbnail}
              alt=""
              className="w-[200px] h-[200px] object-cover"
            />
          </div>
          <div>
            <h3>{prop.title}</h3>
            <p className="text-xs my-4 font-inter">{prop.description}</p>
            <div className="flex justify-between mobil:flex-col">
              <span className="mr-2 mobil:mb-3">
                price:
                <small className="font-bold font-inter">{prop.price}</small>
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
                    dispatch(
                      pannierCartActions.addItemToCart(prop.DispatchCategori)
                    );
                  }}
                >
                  Ajouters
                </button>
                {categoryProduct && (
                  <div key={prop.Key}>
                    <ProductCategoryPage
                      btnClicked={handlerPageCategoryCliked}
                      Description={prop.description}
                      title={prop.title}
                      thumbnail={prop.thumbnail}
                      price={prop.price}
                      Dispatch={prop.DispatchCategori}
                      stockStatus={prop.stockStatus}
                      stockquantity={prop.stockQuantity}
                      sliderImage={prop.secondImg}
                      typewarranty={prop.typeElement}
                      productcode={prop.productcode}
                    />{" "}
                  </div>
                )}
                {categoryProduct && (
                  <div className="fixed z-20 bg-black backdrop-blur-sm bg-opacity-40  max-w-[1700px] left-0 right-0 top-0  m-auto   h-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
