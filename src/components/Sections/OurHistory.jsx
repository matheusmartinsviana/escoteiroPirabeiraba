import styles from "./styles/OurHistory.module.css";
import img1 from "../../assets/ohimg.webp";
import img2 from "../../assets/ohimg2.webp";

const OurHistory = () => {
  return (
    <div className={styles.ourHistory}>
      <div id="nossahistoria" className={styles.textContainer}>
        <h1>Nossa História</h1>
        <p className={styles.textp1}>
          O Grupo Escoteiro Pirabeiraba foi{" "}
          <strong>fundado em 20 de julho de 1974</strong>, após uma reunião de
          lideranças locais. Sua primeira sede,{" "}
          <strong>cedida pela Instituição Bethesda, funcionou até 2003</strong>.
          Com a falta de recursos para reforma, o grupo mudou-se para um terreno
          cedido pela Sociedade Educacional de Pirabeiraba, onde construiu uma
          nova sede em 2004.
        </p>
        <p className={styles.textp2}>
          Desde sua fundação, o GEP realiza eventos para arrecadar fundos, como
          a tradicional Feijoada Escoteira, que acontece anualmente desde 1975.
          Atualmente, o <strong>grupo atende jovens de 6,5 a 21 anos</strong>,
          com foco no desenvolvimento pessoal e na cidadania,{" "}
          <strong>contando com 112 membros ativos</strong> que trabalham
          voluntariamente.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={img1} alt="Imagem 1" className={styles.imageOne} />
        <img src={img2} alt="Imagem 2" className={styles.imageTwo} />
      </div>
    </div>
  );
};

export default OurHistory;
