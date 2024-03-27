import { useState } from "react";
import arrowNext from "../../assets/images/arrow-next.png";
import arrowPrev from "../../assets/images/arrow-prev.png";
import "./Slideshow.css";

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);
  // utilisation des hooks pour gérer l'état du slideshow
  const length = images.length;

  const nextImg = () => {
    if (current === length - 1) {
      setCurrent(0);
    }
    else {
      setCurrent(current + 1);
    }
  }
  // operaraeur ternaire pour gérer le bouton suivant et précédent
  // condition ? exprSiVrai : exprSiFaux;

  // const nextImage = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => {
        return <div className="slide-img" key={index}>
          {index === current && <img className="housing-img" src={image} alt="logement" />}
        </div>;

      })}

       {length > 1 && (
        <div className="slide-controls">
          <img src={arrowPrev} onClick={prevImg} className="arrow" alt="Previous icon" />
          <img src={arrowNext} onClick={nextImg} className="arrow" alt="Next icon" />
        </div>
      )}  

     
         


      {length > 1 && (
        // rendu conditionnel si la condition n'est pas remplie return null
        // You can read this as “if length >1 , then (&&) render , otherwise, render nothing”.
        // affichage du compteur si lenght > 1

        <div className="slideshow-counter">
          <p>
            {current + 1}/{length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
