import { useState } from "react";
import icon from "../../assets/images/arrow.svg";
import "./Collapse.css";



const iconStart = {
  transform: "rotate(0deg)",
};
//position de départ de l'incone par rapport à l'image

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  //hook pour connaitre l'etat du menu collapse
  const [iconStyle, setIconStyle] = useState(iconStart);
  //hook pour connaitre l'etat de l'icone du menu collapse




  //fonction pour changer l'etat du menu collapse

  const toggle = () => {
    setIsOpen(!isOpen);

    setIconStyle(isOpen ?
       iconStart :
        { transform: "rotate(-180deg)", transition: "all 0.2s linear" });
  };
  //icone tourne vers la gauche dans la maquette

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggle}>
        {title}
        <img src={icon} className="collapse-icon" alt="icone du menu" style={iconStyle} />

      </button>
      {/* rendu conditionnel */}
      {isOpen && <div className="collapse-text">{children}</div>}

    </div>
  );
};

export default Collapse;
