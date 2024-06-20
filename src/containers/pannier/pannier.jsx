const cart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-9 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { pannierCartActions } from "../../store/pannier-cart";
export default function PannierElm() {
  const dispatch = useDispatch();
  //nb:une fois react-redux téléchargé, on va creer une variable qui va contenir le state de redux. aussi redux prend directement le state
  const Taillepanier = useSelector((state) => state.pannierAchat.items.length);


  const handlerCliked = () => {
    dispatch(pannierCartActions.toggleCartVisible());
  };

  return (
    <button onClick={handlerCliked} className="size-9 bg-black">
      <span>
        {cart}
        <span className={Taillepanier>0? "border border-white absolute -mt-5 ml-2 text-xs bg-red-500 w-5 h-5 text-center text-white rounded-full mobil:ml-0 MiniPortable:ml-2 MiniPortable:-mt-3" : "hidden"}>
          {Taillepanier}
        </span>
      </span>
    </button>
  );
}
