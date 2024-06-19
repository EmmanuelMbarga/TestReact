import { ComponentOption } from "./sectionoption/componentOption";
import { ComponentArticle } from "./sectionproduct/componentArticle";

export const Articlebody = () => {
  return (
    <>
      <div className="max-w-[1500px] m-auto mt-20">
        <div className=" flex gap-8 mt-10 Laptop:gap-4 Tablette:gap-2 mobil:flex-col MiniPortable:flex-col MiniPortable:px-0 px-4">
          <div className=" sticky top-6 border-r MiniPortable:top-0 mobil:top-0 ">
            <ComponentOption />
          </div>
          <ComponentArticle />
        </div>
      </div>
    </>
  );
};
