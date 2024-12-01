import img1 from "../../assets/imgesc2.webp";
import img2 from "../../assets/imgesc1.webp";
import styles from "./styles/Volunteer.module.css";
import Button from "../General/Button";
import arrowdown from "../../assets/arrowdown.webp";
export default function Volunteer() {
  return (
    <>
      <section className={styles.volunteerContainer}>
        <img src={img1} alt="" />
        <article>
          <h1>Seja Escoteiro</h1>
          <p>
            Interessado em fazer parte do Grupo Escoteiro Pirabeiraba?
            Inscrever-se é fácil! <strong>Contate-nos abaixo</strong>
          </p>
          <Button>
            Contate-nos <img src={arrowdown} width={8} height={"auto"} alt="" />
          </Button>
        </article>
      </section>
    </>
  );
}
