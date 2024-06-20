import { useDispatch } from "react-redux";
import { pannierCartActions } from "../../../store/pannier-cart";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const ProductCategoryPage = (prop) => {
  const dispatch = useDispatch();
  const vailde = prop.stockStatus;
  const [btnclicked, setBtnclicked] = useState(false);
  const imgSlider = prop.sliderImage;
  const tableauSlider = [];
  imgSlider.forEach((img) => {
    tableauSlider.push(<SliderElementImage lien={img} />);
  });
  const handlerBtnclicked = () => {
    setBtnclicked(!btnclicked);
  };

  return (
    <>
      <div className="top-8 absolute flex justify-center p-4 Laptop:top-20 Tablette:top-0 mobil:-top-2 MiniPortable:top-0">
        <div className="fixed z-50 w-[90%] right-0 mobil:h-[100%]">
          {" "}
          <div className="w-[90%] max-h-[1400px] absolute bg-white shadow-xl z-50 p-4 rounded-lg Tablette:max-h-[1500px]">
            <button
              className="border w-8 h-8 flex justify-center items-center cursor-pointer bg-red-500 rounded-full"
              onClick={prop.btnClicked}
            >
              x
            </button>
            <h2 className="text-justify px-10 mt-4 uppercase text-2xl pb-10 MiniPortable:text-xs MiniPortable:py-5 mobil:py-6 Tablette:px-2 Tablette:pb-1 Tablette:text-left mobil:px-2 mobil:-mt-4 mobil:text-lg mobil:pb-0 MiniPortable:px-1 MiniPortable:-mt-2 MiniPortable:text-left MiniPortable:pb-2 ">
              product: <span className="font-inter">{prop.title}</span>
            </h2>
            <div className="grid grid-cols-2 Tablette:grid-cols-1 mobil:grid-cols-1 MiniPortable:grid-cols-1 ">
              <div className="w-full m-auto Laptop:max-w-[300px] Laptop:h-200">
                <Carousel
                  showThumbs={false}
                  autoPlay={true}
                  transitionTime={2000}
                  showStatus={false}
                  infiniteLoop={true}
                  interval={4000}
                >
                  {tableauSlider}
                </Carousel>
              </div>
              <div className=" w-full border-l-4 border-yellow-500 pl-14 max-w-[500px]  Laptop:-mt-3 Laptop:pl-0 Tablette:border-none Tablette:pl-0 mobil:pl-0 mobil:border-none MiniPortable:border-none MiniPortable:pl-0 ">
                <h2 className="text-left text-xl pb-10 MiniPortable:text-xs MiniPortable:py-1 Tablette:pb-2 mobil:py-6 Laptop:px-4 mobil:pb-1 mobil:text-sm  ">
                  {prop.title}
                </h2>
                <div className="Laptop:px-4">
                  <p className="font-inter text-base Laptop:text-sm text-left text-yellow-500 mobil:text-xs MiniPortable:text-xs ">
                    Veuillez passer la commande pour connaître les options de
                    livraison et les délais de transit supplémentaires.
                  </p>
                  <p className="text-inter uppercase Laptop:text-sm my-2 Tablette:my-0 Tablette:text-sm mobil:my-1 mobil:text-xs MiniPortable:my-0 MiniPortable:text-xs">
                    price :
                    <span className="text-black font-bold font-inter Laptop:font-bold Tablette:text-sm mobil:text-xs MiniPortable:text-xs">
                      {" "}
                      {prop.price}
                    </span>
                  </p>
                  <p className="my-2 text-inter uppercase Laptop:text-sm Tablette:my-0 Tablette:text-sm mobil:my-0 mobil:text-xs MiniPortable:my-0 MiniPortable:text-xs">
                    stock:{" "}
                    <span className="font-bold Laptop:font-bold Laptop:text-sm mobil:text-xs MiniPortable:text-xs">
                      {prop.stockquantity}
                    </span>
                  </p>
                  <p
                    className={
                      vailde == "In Stock"
                        ? "text-green-500 my-2 Laptop:text-sm Tablette:text-sm Tablette:my-0 mobil:text-xs mobil:my-0 MiniPortable:text-xs MiniPortable:my-0"
                        : "text-red-500  my-2 Laptop:text-sm Tablette:text-sm Tablette:my-0 mobil:text-xs mobil:my-0 MiniPortable:text-xs MiniPortable:my-0"
                    }
                  >
                    {vailde}
                  </p>
                  <p className="my-2 text-inter  Laptop:text-sm Tablette:text-sm Tablette:my-0 mobil:text-xs mobil:my-0 MiniPortable:text-xs MiniPortable:my-0">
                    product code:{" "}
                    <span className="font-bold  text-black font-inter Laptop:font-bold Laptop:text-sm Tablette:text-sm mobil:text-xs MiniPortable:text-xs">
                      {prop.productcode}
                    </span>
                  </p>

                  <p className="Laptop:text-sm Tablette:text-sm mobil:text-sm MiniPortable:text-xs">
                    warranty duration:{" "}
                    <span className="font-bold text-black font-inter Laptop:font-bold Laptop:text-sm">
                      {prop.typewarranty}
                    </span>
                  </p>
                </div>
                <div className="my-4 p-4 Tablette:my-0 Tablette:p-0 mobil:my-0 mobil:p-0 MiniPortable:p-0 MiniPortable:my-0">
                  <button
                    className="hidden text-xs p-1 rounded bg-black transition-colors hover:bg-yellow-600 text-white shadow-sm font-inter Tablette:p-[2px] Tablette:text-[8px]"
                    onClick={() => {
                      dispatch(
                        pannierCartActions.addItemToCart(prop.DispatchCategori)
                      );
                    }}
                  >
                    Ajouters
                  </button>
                </div>
                <div className="Laptop:px-4 ">
                  <div className="flex justify-between items-center my-4 mobil:my-0 MiniPortable:my-2">
                    <p className="uppercase text-sm font-inter Tablette:sm mobil:text-xs MiniPortable:text-xs">
                      description
                    </p>
                    <button
                      onClick={handlerBtnclicked}
                      className="mobil:text-xs MiniPortable:text-xs"
                    >
                      x
                    </button>
                  </div>
                  {btnclicked && (
                    <PageSousInfos description={prop.Description} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SliderElementImage = (prop) => {
  return (
    <div className="max-w-[400px] h-[450px] m-auto Laptop:max-w-[200px] Tablette:max-w-[200px] Tablette:max-h-[200px] mobil:h-[200px] MiniPortable:h-[175px]  ">
      <img
        src={prop.lien}
        alt="image"
        className="mobil:h-52 mobil:w-52 mobil:object-contain MiniPortable:w-52 MiniPortable:h-52 object-contain"
      />
    </div>
  );
};

const PageSousInfos = (prop) => {
  const DescriptionArticle = prop.description;
  return (
    <div className=" mt-10 max-w-[800px] Tablette:flex mobil:mt-0 MiniPortable:mt-1">
      <p className="text-sm font-inter text-center Tablette:text-left mobil:text-xs mobil:text-left MiniPortable:text-left MiniPortable:text-xs">
        {DescriptionArticle}
      </p>
    </div>
  );
};

export default ProductCategoryPage;
