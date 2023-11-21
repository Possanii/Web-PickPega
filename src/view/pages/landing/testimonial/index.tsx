import { Link } from "react-router-dom";
import BackgroundImage from "../../../../assets/images/about-background-image3.png";
import AboutBackground from "../../../../assets/images/about-background.png";

const Testimonial = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container2">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={BackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading3">Não fique fora dessa</h1>
        <div className="about-buttons-container">
          <Link to={"/login"} className="secondary-button2">
            Cadastre-se Já
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
