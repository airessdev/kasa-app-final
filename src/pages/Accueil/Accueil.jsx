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
      <Header />
      <main className="main">
        <Banner imageSrc={bannerImg} />
        <section className="cards-container">
          {Data.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Accueil;
