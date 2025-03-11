import React, { useState, useEffect } from "react";
import CookieConsent from "../General/CookieConsent";
import styles from "./styles/LocationSection.module.css";

export default function LocationSection() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent === "true") {
      setCookieAccepted(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookieAccepted(true);
  };

  return (
    <>
      {!cookieAccepted && <CookieConsent onAccept={handleAcceptCookies} />}
      <div id="localizacao" className={styles.locationHeader}>
        <h1>Nossa Localização</h1>
        <p>Venha nos visitar! Nossa sede está localizada em</p>
        {cookieAccepted ? (
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.8697324294853!2d-48.91038442380335!3d-26.20091556384165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dea64377b3b3ed%3A0x2a11ab87fc33bdaf!2sR.%20Conselheiro%20Pedreira%2C%201037%20-%20Centro%20(Pirabeiraba)%2C%20Joinville%20-%20SC%2C%2089239-200!5e0!3m2!1spt-BR!2sbr!4v1733095814264!5m2!1spt-BR!2sbr"
            width="500"
            height="450"
            style={{ borderRadius: "10px", border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <div className={styles.mockContainer}>
            <p>Este é apenas um template do mapa que será exibido.</p>
            <strong>O mapa aparecerá após aceitar os cookies</strong>
            <div className={styles.mockMap}>O mapa aparecerá aqui</div>
          </div>
        )}
      </div>
    </>
  );
}
