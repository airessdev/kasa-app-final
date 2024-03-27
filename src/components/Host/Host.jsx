import "./Host.css";
import Stars from "../Stars/Stars"

const Host = ({ rating, name, picture }) => {

  const [firstName, lastName] = name.split(" ");
  //séparer le nom et le prénom de la variable name pour simplifier l'affichage
  return (
    <div className="housing-host">

      <div className="host-info">

        <div className="host-name">

          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img className="host-img" src={picture} alt="host" />
      </div>
      <div className="host-rating">
        {/* Affichage des étoiles de rating utilisation du composant Stars */}
        <Stars rating={rating} />
      </div>
    </div>
  );
};

export default Host;
