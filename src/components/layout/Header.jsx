import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/Header.module.css";
import brandLogo from "../../assets/brand-logo.webp";
import Button from "../General/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLogoContainer}>
          <Link to="/">
            <img
              className={styles.headerBrandLogo}
              src={brandLogo}
              alt="Logo Escoteiros de Pirabeiraba"
              width={70}
              height={"auto"}
            />
            <h1>Escoteiros de Pirabeiraba</h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navItens}>
            <li>
              <Link className={styles.navLink} to="/">
                Início
              </Link>
            </li>
            <li>
              <a className={styles.navLink} href="#atividades">
                Atividades
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#nossamissao">
                Nossa Missão
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#alcateias">
                Alcateias
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <a href="#contato">
          <Button>Fale Conosco</Button>
        </a>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${
          isMenuOpen ? styles.overlayActive : ""
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`${styles.animatedMenu} ${
          isMenuOpen ? styles.menuActive : ""
        }`}
      >
        <div className={styles.headerLogoContainer}>
          <Link to="/">
            <h1>Escoteiros de Pirabeiraba</h1>
          </Link>
        </div>
        <ul className={styles.navItens}>
          <li>
            <Link className={styles.navLink} to="/">
              Início
            </Link>
          </li>
          <li>
            <a className={styles.navLink} href="#atividades">
              Atividades
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#nossamissao">
              Nossa Missão
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#alcateias">
              Alcateias
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="#contato">
              Contato
            </a>
          </li>
        </ul>
        <a href="#contato">
          <Button>Fale Conosco</Button>
        </a>
      </div>
    </>
  );
}
