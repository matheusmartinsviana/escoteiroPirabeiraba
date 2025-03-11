import img1 from "../../assets/new-images/IMG_20240525_112017265_HDR.webp";
import img2 from "../../assets/imgesc1.webp";
import styles from "./styles/Volunteer.module.css";
import Button from "../General/Button";
import arrowdown from "../../assets/arrowdown.webp";
export default function Volunteer() {
  return (
    <>
      <section id="voluntario" className={styles.volunteerContainer}>
        <img data-aos="zoom-out-up" loading="lazy" src={img1} width={300} height={300} className={styles.img1} alt="" />
        <article>
          <h1>Seja Escoteiro</h1>
          <p>
            Interessado em fazer parte do Grupo Escoteiro Pirabeiraba?
            Inscrever-se é fácil! <strong>Contate-nos abaixo</strong>
          </p>
          <Button>
            Contate-nos <img loading="lazy" src={arrowdown} width={8} height={"auto"} alt="" />
          </Button>
        </article>
      </section>
    </>
  );
}
