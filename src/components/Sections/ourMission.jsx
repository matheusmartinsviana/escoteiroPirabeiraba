import styles from "./styles/OurMission.module.css";
import icon1 from "../../assets/icon1.webp";
import icon2 from "../../assets/icon2.webp";
import icon3 from "../../assets/icon3.webp";
import circleImage from "../../assets/girlmoreflag.webp";
import Button from "../General/Button";
export default function OurMisson() {
  return (
    <>
      <section className={styles.ourMission}>
        <div id="nossamissao" className={styles.title}>
          <h2>Nossa Missão</h2>
        </div>
        <div className={styles.cardsGroup}>
          <div className={styles.card}>
            <img src={icon1} alt="" />
            <h2>Educação e Valores</h2>
            <p>
              Contribuímos para a educação de jovens com um sistema de valores
              que fortalece ética, responsabilidade e trabalho em equipe.
            </p>
          </div>
          <div className={styles.card}>
            <img src={icon2} alt="" />
            <h2>Construção de um Mundo Melhor</h2>
            <p>
              Ajudamos jovens a se realizarem como indivíduos e incentivamos a
              participação ativa e construtiva na sociedade.
            </p>
          </div>
          <div className={styles.card}>
            <img src={icon3} alt="" />
            <h2>Compromisso com a Promessa e Lei Escoteira</h2>
            <p>
              Orientamos os jovens com base na Promessa e Lei Escoteira, que
              promovem respeito, solidariedade e integridade.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.ourTarget}>
        <img src={circleImage} alt="" />
        <article>
          <h1>Formação de Cidadãos Plenos e Ativos</h1>
          <p>
            Nosso objetivo é contribuir para que os jovens desenvolvam seu
            caráter e alcancem seu potencial completo em todas as áreas —
            física, intelectual, social, afetiva e espiritual —, formando
            cidadãos responsáveis e engajados, prontos para desempenhar um papel
            positivo e útil em suas comunidades.
          </p>
          <Button>Saiba Mais</Button>
        </article>
      </section>
    </>
  );
}
