import { Link } from "react-router-dom";
import logo from "../../../imgs/10.png";

export default function ComponentLogo() {
  return (
    <>
      <Link to={"/"}>
        <div className="flex items-center mr-[2%] Laptop:mr-[2%] Tablette:mr-[2%] MiniPortable:flex-col">
          <div className="w-28 h-28 bg-white shadow-lg mr-2 rounded-full Tablette:w-14 Tablette:h-14 mobil:w-14 mobil:h-14 mobil:mr-1 MiniPortable:w-14 MiniPortable:h-14 MiniPortable:mr-1">
            <img src={logo} alt="" />
          </div>
          <div className="MiniPortable:text-center">
            <h1 className="text-5xl uppercase font-bold Tablette:text-xl mobil:text-lg MiniPortable:text-xl">
              ShopiLine
            </h1>
            <p className="text-base uppercase font-bold Tablette:text-sm mobil:text-xs MiniPortable:text-xs">
              official online Store
            </p>
            <p className="text-sm uppercase Tablette:text-xs mobil:text-xs MiniPortable:text-xs">
              for{" "}
              <b>
                <i>fantastic</i>
              </b>{" "}
              Experience
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
