import { useState } from "react";
import styles from "./styles/Contact.module.css";
import mailImage from "../../assets/mail.webp";
import Button from "../General/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState({
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.surname || !formData.email || !formData.message) {
      setStatusMessage({
        message: "Por favor, preencha todos os campos.",
        type: "error",
      });
      return;
    }

    const message = encodeURIComponent(
      `Olá, vim pelo site dos Escoteiros de Pirabeiraba. Meu nome é ${formData.name} ${formData.surname}.\nEmail: ${formData.email}\nMensagem: ${formData.message}`
    );

    const phoneNumber = "47999942895";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    try {
      window.open(whatsappURL, "_blank");
      setFormData({
        name: "",
        surname: "",
        email: "",
        message: "",
      });
      setStatusMessage({
        message: "Mensagem enviada com sucesso! Estamos aguardando seu contato.",
        type: "success",
      });
    } catch (error) {
      setStatusMessage({
        message: "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
        type: "error",
      });
    }
  };

  return (
    <>
      <section id="contato" className={styles.contactContainer}>
        <div className={styles.leftSide}>
          <img loading="lazy" src={mailImage} alt="Contato" />
          <h1>Contato</h1>
          <p>
            Gostaria de saber mais ou tem alguma dúvida?{" "}
            <strong>Envie-nos</strong>
          </p>
        </div>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="surname">Sobrenome</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Digite seu sobrenome"
              required
              value={formData.surname}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              placeholder="Digite sua mensagem"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <Button onClick={handleSubmit}> Enviar</Button>

          {statusMessage.message && (
            <div
              className={`${styles.statusMessage} ${statusMessage.type === "success" ? styles.success : styles.error
                }`}
            >
              {statusMessage.message}
            </div>
          )}
        </form>
      </section >
    </>
  );
}