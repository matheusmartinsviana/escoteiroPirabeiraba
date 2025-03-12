import styles from "./styles/OurHistory.module.css";
import img1 from "../../assets/new-images/IMG_1686.webp";
import img2 from "../../assets/new-images/IMG_20241130_101926715_HDR_AE.webp";

const OurHistory = () => {
  return (
    <div className={styles.ourHistory}>
      <div id="nossahistoria" className={styles.textContainer}>
        <h1 data-aos="fade-right">Nossa História</h1>
        <p data-aos="fade-right" className={styles.textp1}>
          O Grupo Escoteiro Pirabeiraba foi{" "}
          <strong>fundado em 20 de julho de 1974</strong>, após uma reunião de
          lideranças locais. Sua primeira sede,{" "}
          <strong>cedida pela Instituição Bethesda, funcionou até 2003</strong>.
          Com a falta de recursos para reforma, o grupo mudou-se para um terreno
          cedido pela Sociedade Educacional de Pirabeiraba, onde construiu uma
          nova sede em 2004.
        </p>
        <p data-aos="fade-right" className={styles.textp1}>
          Desde a sua fundação, o Grupo Escoteiro Pirabeiraba <strong>realiza eventos para arrecadar fundos, dentre eles,
            a sua tradicional Feijoada Escoteira, que acontece anualmente desde 1975.</strong>
          Atualmente, o grupo atende crianças, adolescentes e jovens de 6,5 a 21 anos, contando com mais de 120 membros ativos,
          incentivando os jovens a assumirem seu próprio desenvolvimento. Quem aplica as atividades, dinâmicas e ajuda os escoteiros são os adultos voluntários, conhecidos por escotistas.
        </p>
        <p data-aos="fade-right" className={styles.textp2}>
          Através da vivência nas atividades escoteiras, os jovens aprendem e tomam gosto por se envolverem com a
          comunidade, se transformando em verdadeiros líderes. <strong>Por meio da proatividade e da preocupação com o próximo e com o meio ambiente, os jovens são engajados em construir um mundo melhor, mais justo e mais fraterno.</strong>
        </p>
      </div>
      <div className={styles.imageContainer} data-aos="fade-left">
        <img loading="lazy" src={img2} alt="Imagem 2" className={styles.imageTwo} />
        <img loading="lazy" src={img1} alt="Imagem 1" className={styles.imageOne} />
      </div>
    </div>
  );
};

export default OurHistory;
