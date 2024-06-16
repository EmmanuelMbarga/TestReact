const UserCondition = () => {
  return (
    <>
      <p className="text-xs text-left max-w-[400px] my-4 ">
        En continuant, vous acceptez{" "}
        <span className="text-blue-700 hover:border-b hover-border-yellow-400 hover:text-yellow-500 cursor-pointer">
          les conditions {"d'utilisation"} et de vente
        </span>{" "}
        de SHOPILINE. Consultez notre
        <span className="text-blue-700 hover:border-b hover-border-yellow-400 hover:text-yellow-500 cursor-pointer">
          {" "}
          déclaration de confidentialité
        </span>
        , notre{" "}
        <span className="text-blue-700 hover:border-b hover-border-yellow-400 hover:text-yellow-500 cursor-pointer">
          politique relative aux cookies ainsi que notre politique relative aux
          publicités ciblées par centres d’intérêts.
        </span>
      </p>
    </>
  );
};

export default UserCondition;
