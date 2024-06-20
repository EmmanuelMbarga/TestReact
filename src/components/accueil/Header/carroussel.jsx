import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Carroussel() {
  const { data: Tops } = useQuery({
    queryKey: ["Tops"],
    queryFn: () => axios.get("https://dummyjson.com/products/category/tops"),
  });

  return (
    <>
      <div className=" bg-gradient-to-tr from-teal-300 to-violet-500">
        {" "}
        <Carousel
          autoPlay={true}
          transitionTime={2000}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          interval={5000}
        >
          {Tops?.data.products.map((product) => (
            <div key={product.id} className="w-96 h-96 m-auto z-0">
              <img
                key={product.id}
                src={product.thumbnail}
                alt="thubstop"
                className=""
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
