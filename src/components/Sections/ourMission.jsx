import styles from "./styles/OurMission.module.css";
import icon1 from "../../assets/icon1.webp";
import icon2 from "../../assets/icon2.webp";
import icon3 from "../../assets/icon3.webp";
import circleImage from "../../assets/new-images/IMG_20230916_091105717_HDR.webp";
import Button from "../General/Button";
export default function OurMisson() {
  return (
    <>
      <section className={styles.ourMission}>
        <div id="nossamissao" className={styles.title}>
          <h2 data-aos="fade-top">Nossa Missão</h2>
        </div>
        <div className={styles.cardsGroup}>
          <div data-aos="fade-right" className={styles.card}>
            <img loading="lazy" src={icon2} alt="" />
            <h2>Construção de um Mundo Melhor</h2>
            <p>
              Ajudamos jovens a se realizarem como indivíduos e incentivamos a
              participação ativa e construtiva na sociedade.
            </p>
          </div>
          <div data-aos="fade-bottom" className={styles.card}>
            <img loading="lazy" src={icon1} alt="" />
            <h2>Educação e Valores</h2>
            <p>
              Contribuir para a educação de crianças, adolescentes e jovens, mediante um sistema de valores,
              baseado na Promessa e Lei Escoteiras, para que participem na construção de um mundo melhor, no qual se desenvolvam plenamente e desempenhem um papel construtivo na sociedade.
            </p>
          </div>
          <div data-aos="fade-left" className={styles.card}>
            <img loading="lazy" src={icon3} alt="" />
            <h2>Compromisso com a Promessa e Lei Escoteira</h2>
            <p>
              Orientamos os jovens com base na Promessa e Lei Escoteira, que
              promovem respeito, solidariedade e integridade.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.ourTarget} data-aos="fade-up">
        <img loading="lazy" src={circleImage} className={styles.circleImage} width={300} height={300} alt="" />
        <article>
          <h1>Formação de Cidadãos Plenos e Ativos</h1>
          <p>
            Nosso propósito é contribuir para que crianças, adolescentes e jovens assumam seu próprio desenvolvimento,
            para que alcancem seu pleno potencial físico, intelectual, social, afetivo, espiritual, e do caráter, como cidadãos responsáveis e
            membros ativos em suas comunidades local, nacional e internacional.
          </p>
          <Button link="#voluntario">Saiba Mais</Button>
        </article>
      </section>
    </>
  );
}
