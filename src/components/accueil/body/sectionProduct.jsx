import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { pannierCartActions } from "../../../store/pannier-cart";

export default function SectionProduct() {
  const dispatch = useDispatch();

  // ----------------------------react Query----------------------------
  const {
    data: Produits,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["produit"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return axios.get("https://dummyjson.com/products/category/smartphones");
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
      <p className="text-center my-10 text-red-500 font-inter text-xl">
        {error.message}
      </p>
    );
  }
  // -----------------------------------------------Redux-----------------------------------------------

  // nb:une fois qu'on a créé une action, on crée une const qui va nous permettre de dispacher l'action dans notre composant grace a useDispatch
  // const handlerAddItemstoCart=()=>{
  //   dispatch(pannierCartActions.addItemToCart(Produits?.data.products))
  // }

  return (
    <>
      <div className="max-w-[1500px] m-auto border-y my-14">
        <h1 className="text-2xl m-4 capitalize MiniPortable:text-sm">
          category: smartphones
        </h1>

        <div className="grid grid-cols-4 gap-6 pb-4 Laptop:grid-cols-3 mx-4 Laptop:gap-4 Tablette:grid-cols-3 Tablette:gap-2 mobil:grid-cols-1 MiniPortable:grid-cols-1 MiniPortable:mx-0">
          {Produits?.data.products.map((produit) => (
            <>
              <div className="containerCardsPhone">
                <div key={produit.id}>
                  <div className="flex justify-center bg-white">
                    <img
                      key={produit.id}
                      src={produit.thumbnail}
                      alt="phone"
                      className="w-[200px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="my-4 p-4">
                    <h2>{produit.title}</h2>
                    <p className="text-xs my-4 font-inter">
                      {produit.description}
                    </p>
                    <div className="flex justify-around">
                      <small className="font-bold font-inter">
                        price : {produit.price}
                      </small>
                      <button
                        className=" text-xs p-1 rounded bg-black transition-colors hover:bg-yellow-600 text-white shadow-sm font-inter"
                        onClick={() => {
                          dispatch(pannierCartActions.addItemToCart(produit));
                        }}
                      >
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
