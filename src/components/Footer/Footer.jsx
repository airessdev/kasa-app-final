import Logo from "../../assets/images/footer-img.png";
import "./Footer.css";



const Footer = () => {
  return (

    <footer className="footer-wrap">
      <img src={Logo} alt="Logo" />
      <div className="footer-text">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
