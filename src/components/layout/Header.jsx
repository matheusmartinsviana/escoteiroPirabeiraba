import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/Header.module.css";
import brandLogo from "../../assets/brand-logo.webp";
import Button from "../General/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSubMenu = (e) => {
    e.stopPropagation();
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsSubMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAnchorClick = (path) => {
    if (location.pathname === "/") {
      return path;
    }
    return `/${path}`;
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
              <Link className={styles.navLink} to="/" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li>
              <a
                className={styles.navLink}
                href={handleAnchorClick("#atividades")}
                onClick={closeMenu}
              >
                Atividades
              </a>
            </li>
            <li>
              <a
                className={styles.navLink}
                href={handleAnchorClick("#nossamissao")}
                onClick={closeMenu}
              >
                Nossa Missão
              </a>
            </li>
            <li
              className={`${styles.navLink} ${styles.dropdown}`}
              onClick={toggleSubMenu}
            >
              Ramos
              <ul
                className={`${styles.subMenu} ${
                  isSubMenuOpen ? styles.subMenuActive : ""
                }`}
              >
                <li>
                  <Link
                    className={styles.navLink}
                    to="/ramos/lobinho"
                    onClick={closeMenu}
                  >
                    Lobinho
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.navLink}
                    to="/ramos/escoteiro"
                    onClick={closeMenu}
                  >
                    Escoteiro
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.navLink}
                    to="/ramos/senior"
                    onClick={closeMenu}
                  >
                    Sênior
                  </Link>
                </li>
                <li>
                  <Link
                    className={styles.navLink}
                    to="/ramos/pioneiro"
                    onClick={closeMenu}
                  >
                    Pioneiro
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                className={styles.navLink}
                href={handleAnchorClick("#contato")}
                onClick={closeMenu}
              >
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
          <Link to="/" onClick={closeMenu}>
            <h1>Escoteiros de Pirabeiraba</h1>
          </Link>
        </div>
        <ul className={styles.navItens}>
          <li>
            <Link className={styles.navLink} to="/" onClick={closeMenu}>
              Início
            </Link>
          </li>
          <li>
            <a
              className={styles.navLink}
              href={handleAnchorClick("#atividades")}
              onClick={closeMenu}
            >
              Atividades
            </a>
          </li>
          <li>
            <a
              className={styles.navLink}
              href={handleAnchorClick("#nossamissao")}
              onClick={closeMenu}
            >
              Nossa Missão
            </a>
          </li>
          <li
            className={`${styles.navLink} ${styles.dropdown}`}
            onClick={toggleSubMenu}
          >
            Ramos
            <ul
              className={`${styles.subMenu} ${
                isSubMenuOpen ? styles.subMenuActive : ""
              }`}
            >
              <li>
                <Link
                  className={styles.navLink}
                  to="/ramos/lobinho"
                  onClick={closeMenu}
                >
                  Lobinho
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navLink}
                  to="/ramos/escoteiro"
                  onClick={closeMenu}
                >
                  Ramo Escoteiro
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navLink}
                  to="/ramos/senior"
                  onClick={closeMenu}
                >
                  Sênior
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navLink}
                  to="/ramos/pioneiro"
                  onClick={closeMenu}
                >
                  Pioneiro
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              className={styles.navLink}
              href={handleAnchorClick("#contato")}
              onClick={closeMenu}
            >
              Contato
            </a>
          </li>
        </ul>
        <a href="#contato">
          <Button onClick={closeMenu}>Fale Conosco</Button>
        </a>
      </div>
    </>
  );
}
