import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageAccuel from "../pages/Accuel";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="/" element={<PageAccuel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
