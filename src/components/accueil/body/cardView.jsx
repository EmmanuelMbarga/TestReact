import { useDispatch, useSelector } from "react-redux";
import { pannierCartActions } from "../../../store/pannier-cart";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const cart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);

export default function CardView() {
  const dispacth = useDispatch();
  const Items = useSelector((state) => state.pannierAchat.items);
  const registerProduct = useRef();
  let content = <p className="text-center">panier vide</p>;

  if (Items.length > 0) {
    content = (
      <div>
        {Items.map((Item) => (
          <CartItems key={Item.id} item={Item} />
        ))}
      </div>
    );
  }

 useEffect(()=>{
  if (Items.length <= 0) {
    registerProduct.current.style.visibility = "hidden";
  } },[registerProduct])
  
  const handlerCliked = () => {
    dispacth(pannierCartActions.toggleCartVisible());
  };
  return (
    <>
      <div className="mt-28 flex justify-center p-4 mobil:mt-10 Tablette:mt-10 MiniPortable:-mt-20 ">
        <div className="fixed z-50 w-[50%]">
          {" "}
          <div className="w-full bg-white shadow-xl z-50 p-4 rounded-lg">
            <button
              onClick={handlerCliked}
              className="border w-8 h-8 flex justify-center items-center cursor-pointer bg-red-500 rounded-full"
            >
              x
            </button>

            <div className="flex justify-around">
              <div className="grid grid-cols-2 items-center Tablette:grid-cols-1 mobil:grid-cols-1 MiniPortable:grid-cols-1">
                <div className="flex font-bold text-center MiniPortable:py-3  text-2xl p-2 MiniPortable:text-xs mobil:py-2 mobil:my-4 MiniPortable:my-4 ">
                  <span>{cart}</span>
                  <span>({Items.length})</span>
                </div>
                <button
                  className="border ml-28 font-inter p-2 bg-black text-white mobil:text-xs mobil:p-1 mobil:-mt-2 MiniPortable:text-xs MiniPortable:p-1 MiniPortable:-mt-4 Laptop:ml-10 Tablette:ml-0 mobil:ml-0 MiniPortable:ml-0"
                  ref={registerProduct}
                >
                  <Link to={"/"} aria-disabled>
                    enregistrer
                  </Link>{" "}
                </button>{" "}
              </div>
            </div>
            <div className="overflow-y-scroll h-[50vh]">{content}</div>
          </div>
        </div>
      </div>
      {handlerCliked && (
        <div className="fixed z-20 bg-black backdrop-blur-sm bg-opacity-40  max-w-[1700px] left-0 right-0 top-0  m-auto   h-full"></div>
      )}
    </>
  );
}

const CartItems = (prop) => {
  const dispatch = useDispatch();

  const handlerRemoveItems = () => {
    dispatch(pannierCartActions.removeItemToCart(prop.item.id));
  };
  const handlerIncrementbtnclicked = () => {
    dispatch(pannierCartActions.incrementQuantity(prop.item.id));
  };

  const handlerdecrementbtncliked = () => {
    dispatch(pannierCartActions.decrementQuandity(prop.item.id));
  };

  return (
    <div>
      <div>
        <div className="bg-white flex justify-around gap-4 border-b Tablette:gap-2 mobil:flex-col Tablette:items-end MiniPortable:flex-col ">
          <div className="flex items-center gap-4 Tablette:gap-2 mobil:flex-col MiniPortable:flex-col">
            <img
              src={prop.item.image}
              alt={prop.item.title}
              className="w-20 h-20 object-cover Tablette:w-10 Tablette:h-10"
            />
            <div className="p-2">
              <p className="element">
                Nom: <span className="souselement">{prop.item.title}</span>
              </p>
              <p className="element">
                prix:{" "}
                <span className="souselement">
                  {prop.item.quantity} x {prop.item.price}
                </span>
              </p>
              <p className="element">
                quantité:{" "}
                <span className="souselement">{prop.item.quantity}</span>
              </p>
              <button
                className="px-1 text-red-500 rounded hover:text-white hover:bg-red-500 transition"
                onClick={handlerRemoveItems}
              >
                <small>retirer</small>
              </button>
            </div>
          </div>
          <div className="mt-14 mobil:mt-0 MiniPortable:mt-0">
            <div className="mobil:text-center MiniPortable:text-center">
              <span
                className="cursor-pointer"
                onClick={handlerdecrementbtncliked}
              >
                -{" "}
              </span>
              <span>{prop.item.quantity}</span>
              <span
                className="cursor-pointer"
                onClick={handlerIncrementbtnclicked}
              >
                {" "}
                +
              </span>
            </div>
            <div className="flex items-center gap-2 Tablette:flex-col mobil:flex-col MiniPortable:flex-col">
              <p className="capitalize font-inter font-bold Laptop:text-xs Tablette:text-xs ">
                total:{" "}
                <span className=" font-light text-xs">
                  {prop.item.price * prop.item.quantity}
                </span>
              </p>
              {/* <button className=" text-green-500 hover:bg-green-500 transition hover:text-white rounded font-inter p-1">
                <small>commander</small>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
