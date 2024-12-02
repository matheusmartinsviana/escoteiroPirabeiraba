import { useState, useEffect } from "react";
import styles from "./styles/BackToTopButton.module.css";
import arrow from "../../assets/arrowdown.webp";
export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        title="Ir para o topo"
        className={styles.backToTopButton}
        onClick={scrollToTop}
      >
        <img src={arrow} alt="Ir para o topo" title="Ir para o topo" />
      </button>
    )
  );
}
