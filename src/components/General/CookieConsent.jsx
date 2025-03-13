import React, { useEffect, useState } from "react";
import styles from "./styles/CookieConsent.module.css";
import cookieImg from "../../assets/cookies-da-web.webp";

export default function CookieConsent({ onAccept }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
    onAccept;
  };

  return (
    isVisible && (
      <div className={`${styles.banner} ${styles.show}`}>
        <div className={styles.content}>
          <img loading="lazy" src={cookieImg} alt="Cookies" className={styles.cookieImage} />
          <div className={styles.text}>
            <p>
              Nós usamos cookies para melhorar a sua experiência. Para
              continuar, aceite os cookies.
            </p>
            <button onClick={handleAccept} className={styles.button}>
              Aceitar
            </button>
          </div>
        </div>
      </div>
    )
  );
}
