import { useDispatch } from "react-redux";
import { AllCategoriesAction } from "../../../store/categories";

export const BtnCategory = (prop) => {
  const dispatch = useDispatch();
  const handlerClicked = () => {
    dispatch(AllCategoriesAction.watchItems(prop.AllCategori));
  };
  return (
    <>
      <div
        className="flex gap-2 items-center p-2 transition hover:border-b  hover:bg-yellow-500 mobil:hover:border-none mobil:hover:bg-white mobil:w-[220px] mobil:border-r mobil:px-4 "
        onClick={handlerClicked}
      >
        <button className="border border-blue-500 w-4 h-4 rounded-full Tablette:w-2 Tablette:h-2 mobil:w-3 mobil:h-3 MiniPortable:w-1 MiniPortable:h-1"></button>
        <p className="text-sm uppercase font-inter Tablette:text-xs mobil:text-xs MiniPortable:text-xs">{prop.AllCategori}</p>
      </div>
    </>
  );
};
