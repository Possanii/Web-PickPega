import AboutBackground from "../../../../assets/images/about-background2.png";
import AboutBackgroundImage from "../../../../assets/images/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">a g i l i d a d e</p>
        <h1 className="primary-heading3">“ A G I L I D A D E ”</h1>
        <p className="primary-heading">Horas na fila?</p>
        <p className="primary-text">
          Nunca mais! Com nosso aplicativo você pode realizar seu pedido e o
          pagamento em segundos! Economize tempo e aproveite seu rolê.
        </p>
      </div>
    </div>
  );
};

export default About;
