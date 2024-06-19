import PannierElm from "../../../containers/pannier/pannier";

const LogoUser = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="text-white size-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

export default function ComponentSearch() {
  return (
    <>
      <div className="mobil:hidden MiniPortable:hidden">
        <input
          id="searchBar"
          name="searchBar"
          className="border w-[600px] p-2 screenLarge:max-w-[450px] Laptop:max-w-[350px] Tablette:max-w-[250px]  "
          placeholder="rechercher..."
        />
      </div>
      <Buttons />
    </>
  );
}

const Buttons = () => {
  return (
    <>
      <div className="invisible Laptop:hidden Tablette:hidden mobil:visible MiniPortable:visible">
        <button className="bg-black ml-2 p-2">{LogoUser}</button>
        <PannierElm />
      </div>
    </>
  );
};
