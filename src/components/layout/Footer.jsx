import { Link, useLocation } from "react-router-dom";
import styles from "./styles/Footer.module.css";
import brandLogo from "../../assets/brand-logo.webp";

export default function Footer() {
  const location = useLocation();

  const handleAnchorClick = (path) => {
    if (location.pathname === "/") {
      return path;
    }
    return `/${path}`;
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogoContainer}>
          <img
            className={styles.footerBrandLogo}
            src={brandLogo}
            alt="Logo Escoteiros de Pirabeiraba"
          />
        </div>
        <div className={styles.mapaSiteFooter}>
          <h1>Mapa do site</h1>
          <a href="#"><h5>Início</h5></a>
          <a href="#atividades"><h5>Atividades</h5></a>
          <a href="#nossamissao"><h5>Nossa Missão</h5></a>
          <a href="#contato"><h5>Contato</h5></a>
        </div>
        <div className={styles.ramosFooter}>
          <h1>Ramos</h1>
          <Link to="/ramos/lobinho"><h5>Lobinho</h5></Link>
          <Link to="/ramos/escoteiro"><h5>Escoteiro</h5></Link>
          <Link to="/ramos/senior"><h5>Sênior</h5></Link>
          <Link to="/ramos/pioneiro"><h5>Pioneiro</h5></Link>
        </div>
        <div className={styles.contatoFooter}>
          <h1>Contato</h1>
          <h5>Gostaria de saber mais ou tem alguma dúvida?</h5>
          <h5>Envie-nos uma mensagem!</h5>
          <a
            className={styles.linkButton}
            href={handleAnchorClick("#contato")}
          >
            Fale Conosco
          </a>        </div>
      </div>
    </footer>
  );
}
