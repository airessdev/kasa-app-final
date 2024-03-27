import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Erreur.css";

import Footer from "../../components/Footer/Footer";

const Erreur = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="error-wrap">

          <h1 className="error-title">404</h1>
          <p className="error-msg"> Oups! La page que vous demandez n'existe pas.</p>

        </div>
        <div className="back">
          <Link to="/" style={{ color: "#ff6060", textDecoration: "none" }}>
            Retourner sur la page d'accueil
          </Link>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Erreur;
