
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Host from "../../components/Host/Host";
import Slideshow from "../../components/Slideshow/Slideshow";
import Data from "../../data/data.json";
import "./Logement.css";

const Logement = () => {
  const { id } = useParams();


  const elementHostel = Data.find((item) => item.id === id);
  console.log(elementHostel);




  if (!elementHostel) {

    return (
      <Navigate to="/erreur" replace={true} />
    )

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
  } = elementHostel;





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
