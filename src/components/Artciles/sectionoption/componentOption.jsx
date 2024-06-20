import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BtnCategory } from "./btnCategory";

export const ComponentOption = () => {
  const { data: Allcategories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => axios.get("https://dummyjson.com/products/category-list"),
  });

  return (
    <>
      <div className="sticky top-2 items-center gap-2  cursor-pointer Laptop:w-40 Tablette:w-36 mobil:flex mobil:overflow-y-scroll mobil:bg-white mobil:shadow-md MiniPortable:flex MiniPortable:overflow-y-scroll MiniPortable:bg-white MiniPortable:relative MiniPortable:top-0 ">
        <h3 className="uppercase text-left font-bold border-b MiniPortable:hidden">toutes les Categories</h3>
        {Allcategories?.data.map((allCategori,index) => (
          <div key={allCategori.id || index} >
            <BtnCategory AllCategori={allCategori}/>
          </div>
        ))}
      </div>
    </>
  );
};
