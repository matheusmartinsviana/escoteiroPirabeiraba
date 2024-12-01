import styles from "./styles/Footer.module.css";
import brandLogo from "../../assets/brand-logo.webp";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.headerLogoContainer}>
            <img
              className={styles.headerBrandLogo}
              src={brandLogo}
              alt="Logo Escoteiros de Pirabeiraba"
              width={70}
              height={"auto"}
            />
          </div>
          <div className={styles.mapaSiteFooter}>
            <h1>Mapa do site</h1>
            <h5>Início</h5>
            <h5>Atividades</h5>
            <h5>Nossa Missão</h5>
            <h5>Contato</h5>
          </div>
          <div className={styles.ramosFooter}>
            <h1>Ramos</h1>
            <h5>Lobinho</h5>
            <h5>Alcateia</h5>
            <h5>Tropa Escoteira</h5>
            <h5>Sênior</h5>
            <h5>Pioneiro</h5>
          </div>
          <div className={styles.contatoFooter}>
            <h1>Contato</h1>
            <h5>Gostaria de saber mais ou tem alguma dúvida?</h5>
            <h5>Envie-nos uma mensagem</h5>
            <button className={styles.contactButton}>Fale Conosco</button>
          </div>
        </div>
      </footer>
    </>
  );
}
