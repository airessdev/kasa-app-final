import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Host from "../../components/Host/Host";
import Slideshow from "../../components/Slideshow/Slideshow";
import Data from "../../data/data.json";
import "./Logement.css";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const housing = Data.find((item) => item.id === id);

  useEffect(() => {
  
   //on renvoie à la page 404 si l'id n'est pas trouvé , sinon on affiche le logement
   //pour gérer les erreurs 404 de la page logement , sinon il n'affiche pas la page 404 malgré la route * dans router
    
    if (!housing) {
      
      navigate("/404");
      return;
    }

  }, [housing, navigate]);


  if (!housing) {
    return;
  }

  const {
    pictures,
    rating,
    tags,
    description,
    equipments,
    title,
    location,
    host: { name, picture },
  } = housing;

  console.log(housing);
  console.log(equipments);


  return (
    <>
      <Header />
      <div className="housing-main">

        <Slideshow images={pictures} />

        <div className="housing-header">

          <Host title={title} location={location} tags={tags} rating={rating} name={name} picture={picture} />
        </div>

        <div className="housing-collapse">
          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul className="equipments-content">
              {equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>;
              })}
            </ul>
          </Collapse>
        </div>

      </div>
      
      <Footer />
    </>
  );
};

export default Logement;
