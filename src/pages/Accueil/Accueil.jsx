import bannerImg from "../../assets/images/banner-background.png";

import Data from "../../data/data.json";
import Cards from "../../components/Cards/Cards";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Accueil.css";

const Accueil = () => {
  return (
    <>
    {/* composant header envoyé à la page accueil */}
      <Header />

      <div className="main">
        <Banner imageSrc={bannerImg} />
        <div className="cards-container">
          {/* permet de lire l'élément suivant de data */}
          {Data.map((element) => (
            // et de remplir un composant Cards avec les données de l'élément
            <Cards key={element.id} item={element} />
          ))}

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Accueil;
