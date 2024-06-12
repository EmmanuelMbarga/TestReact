// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Carroussel() {
  // const { data: Article } = useQuery({
  //   queryKey: ["Article"],
  //   queryFn: () => axios.get("https://dummyjson.com/products/categories"),
  // });

  // console.log(Article.data[17].url);
  return (
    // infiniteLoop={true} interval={7000} 
    <>
      <Carousel autoPlay={true} transitionTime={3000} showStatus={false} showThumbs={false} >
        <div className="bg-gradient-to-tl from-orange-400 to-red-600 h-[50vh] text-xl">
          items1
        </div>
        <div className="bg-gradient-to-tl from-orange-500 to-blue-600 h-[50vh] text-xl">
          items2
        </div>
        <div className="bg-gradient-to-tl from-cyan-500 to-violet-600 h-[50vh] text-xl">
          items3
        </div>
        <div className="bg-gradient-to-tl from-purple-400 to-red-600 h-[50vh] text-xl">
          items4
        </div>
      </Carousel>
    </>
  );
}
