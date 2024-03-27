import "./Header.css";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../assets/images/header-img.svg";


const Header = () => {


  return (
    <header className="header">
      <Link to="/accueil" >
        <img src={Logo} alt="logo entreprise kasa" />
      </Link>
{/* NavLink pour pouvoir gérer le statut active */}
      <nav className="links">
        <NavLink to="/accueil" >
          <li className="active">Accueil</li>
        </NavLink>
        <NavLink to="/apropos" >
          <li className="active">A propos</li>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
