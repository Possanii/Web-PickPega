import toast from "react-hot-toast";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tem algumas pergunta ?</h1>
      <h1 className="primary-heading">Deixe-nos ajudar</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="seuemail@gmail.com" />
        <button
          onClick={() => toast.success("E-mail enviado!")}
          className="secondary-button"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Contact;
