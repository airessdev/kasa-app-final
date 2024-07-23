import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Accueil from "../pages/Accueil/Accueil";
import Apropos from "../pages/About/Apropos";
import Erreur from "../pages/Erreur/Erreur";
import Logement from "../pages/Logement/Logement";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path='/kasa-app-final' element={<Accueil />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
