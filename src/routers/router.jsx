import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageAccuel from "../pages/Accuel";
import Connexion from "../pages/auth/connexion";
import Insciption from "../pages/auth/insciption";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="/" element={<PageAccuel />} />
        <Route path="/store.shopiline.cm/account" exact="/store.shopiline.cm/account" element={<Connexion/>}/>
        <Route path="/store.shopiline.cm/inscription" exact="/store.shopiline.cm/inscription" element={<Insciption/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
