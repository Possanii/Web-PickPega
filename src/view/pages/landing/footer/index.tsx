import Logo from "../../../../assets/images/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Velocidade</span>
          <span>Sem Filas</span>
          <span>Sem preocupações</span>
          <span>Use</span>
          <span>
            <span className="corAzul">"Pick"</span>{" "}
            <span className="corAmarela">Pega</span>
          </span>
        </div>
        <div className="footer-section-columns">
          <span>XX-XXXX-XXXX</span>
          <span>pickpega@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
