

const ProductCategoryPage = (props) => {

  // console.log(cardCategory) h-[85%]  h-[110%]; cardCategory,btnClicked
//   console.log(cardCategory);
//   console.log(props.car);

        
    
  return (

    <>
      <div className="-top-[320px] relative flex justify-center p-4 Laptop:-top-[324px] Tablette:-top-[200px] mobil:-top-[2400px] MiniPortable:-top-[2600px]"> 
          <div className="fixed z-50 w-[90%] right-0 MiniPortable:h-[100%] mobil:h-[100%]">
            {" "}
            <div className="w-[90%]   absolute bg-white shadow-xl z-50 p-4 rounded-lg">
              <button
                className="border w-8 h-8 flex justify-center items-center cursor-pointer bg-red-500 rounded-full"
                onClick={props.btnClicked}
              >
                x
              </button>
              <h2 className="text-center text-2xl pb-10 MiniPortable:text-xs MiniPortable:py-5 mobil:py-6  ">
                categories
              </h2>
              <div className="grid grid-cols-2 Tablette:grid-cols-1 mobil:grid-cols-1 MiniPortable:grid-cols-1 ">
                    <div className="w-full h-20 bg-green-400"></div>
                    <div className="w-full h-20 bg-red-700"></div>
              </div>

            </div>
          </div>
        </div>
    </>
  );
};

export default ProductCategoryPage;
