


// import "./Host.css";
// import Stars from "../Stars/Stars"
// import Tags from "../Tags/Tags"

// const Host = ({ title, location, tags, rating, name, picture }) => {

//   const [firstName, lastName] = name.split(" ");
//   //séparer le nom et le prénom de la variable name pour simplifier l'affichage
//   return (

//     <>
      
//         <div className="housing-info">

//           <h1 className="housing-title">{title}</h1>
//           <p className="housing-location">{location}</p>
//           <Tags tags={tags} />
//         </div>
//         <div>
//           <div className="housing-host">

//             <div className="host-info">

//               <div className="host-name">

//                 <p>{firstName}</p>
//                 <p>{lastName}</p>
//               </div>
//               <img className="host-img" src={picture} alt="host" />
//             </div>
//             <div className="host-rating">

//               {/* Affichage des étoiles de rating utilisation du composant Stars */}
//               <Stars rating={rating} />
//             </div>
//           </div>
//         </div>
      
//     </>
//   )
// };

// export default Host;

import "./Host.css";
import Stars from "../Stars/Stars";
import Tags from "../Tags/Tags";

const Host = ({ title, location, tags, rating, name, picture }) => {
  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <div className="housing-info">
        <h1 className="housing-title">{title}</h1>
        <p className="housing-location">{location}</p>
        <Tags tags={tags} />
      </div>
      <div className="housing-host">
        <div className="host-info">
          <div className="host-name">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <img className="host-img" src={picture} alt="host" />
        </div>
        <div className="host-rating">
          <Stars rating={rating} />
        </div>
      </div>
    </>
  );
};

export default Host;
