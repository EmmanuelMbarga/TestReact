import { useSelector } from "react-redux";
import { ComponentOption } from "./sectionoption/componentOption";
import { ComponentArticle } from "./sectionproduct/componentArticle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Articlebody = () => {
  const lienCategori = useSelector((state) => state.btnAllCategorie.items);
  const UrlCategories = `https://dummyjson.com/products/category/${lienCategori}`;

  const {
    data: Articles,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["articles", lienCategori],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return axios.get(UrlCategories);
    },
    enabled: !!lienCategori,
  });

  const truncate = (str, lenght = 20) => str.substr(0, lenght) + "...";

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
 
  const Allcategories = Articles?.data.products;
  const TableAllcategoriesContainer = [];
  Allcategories.forEach((Allcategori) => {
    TableAllcategoriesContainer.push(
      <div key={Allcategori.id}>
        <ComponentArticle
          title={Allcategori.title}
          Shortdescription={truncate(Allcategori.description,80)}
          Largedescription={Allcategori.description}
          category={Allcategori.category}
          price={Allcategori.price}
          thumbnail={Allcategori.thumbnail}
          DispatchCategori={Allcategori}
          stockStatus={Allcategori.availabilityStatus}
          stockQuantity={Allcategori.stock}
          secondImg={Allcategori.images}
          typeElement={Allcategori.warrantyInformation}
          productcode={Allcategori.sku}
        />
      </div>
    );
  });

  return (
    <>
      <div className="max-w-[1500px] m-auto mt-20">
        <div className=" flex gap-8 mt-10 Laptop:gap-4 Tablette:gap-2 mobil:flex-col MiniPortable:flex-col MiniPortable:px-0 px-4">
          <div className=" sticky top-4 border-r MiniPortable:top-0 mobil:top-0 ">
            <ComponentOption />
          </div>
          <div className="grid grid-cols-4 Laptop:grid-cols-3 Tablette:grid-cols-2 mobil:grid-cols-1 MiniPortable:grid-cols-1">
            {TableAllcategoriesContainer}
          </div>
        </div>
      </div>
    </>
  );
};
