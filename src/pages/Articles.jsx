import { Articlebody } from "../components/Artciles/ArtcileBody";
import { InterfacePanier } from "../components/accueil/Header/interfacePanier";
// import Hearder from "../components/accueil/Header/hearder"
// import FooterApp from "../components/accueil/footer/footer"
import HeaderPromote from "./../components/accueil/Header/sectionpromote";
import HeaderComponent1 from "./../components/accueil/Header/headerComponent1";
import Navigate from "../components/accueil/Header/navigate";
import FooterApp from "../components/accueil/footer/footer";
export const ArticlesPage = () => {
  return (
    <>
      <header className="max-w-[1700px] relative m-auto">
        <HeaderPromote />
        <InterfacePanier />
        <HeaderComponent1 />
        <Navigate />
      </header>
      <Articlebody />
      <div className="mt-40">
      <FooterApp/>
      </div>
    </>
  );
};
