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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Olá, vim pelo site dos Escoteiros de Pirabeiraba. Meu nome é ${formData.name}. ${formData.surname}\nEmail: ${formData.email}\nMensagem: ${formData.message}`
    );

    const phoneNumber = "1234567890";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <section id="contato" className={styles.contactContainer}>
        <div className={styles.leftSide}>
          <img src={mailImage} alt="" />
          <h1>Contato</h1>
          <p>
            Gostaria de saber mais ou tem alguma dúvida?{" "}
            <strong>Envie-nos</strong>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
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

          <Button type="submit">Enviar</Button>
        </form>
      </section>
    </>
  );
}
