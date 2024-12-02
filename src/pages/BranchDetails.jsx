import { useParams } from "react-router-dom";
import styles from "./styles/BranchDetails.module.css";

export default function BranchDetails() {
  const { branch } = useParams();

  return (
    <div className={styles.branchDetailsContainer}>
      <h1 className={styles.title}>| Ramo {branch}</h1>

      <div className={styles.photos}>
        <div className={styles.photo}>
          <img src="https://via.placeholder.com/300" alt="Descrição 1" />
          <p>Falando sobre a foto</p>
        </div>
        <div className={styles.photo}>
          <img src="https://via.placeholder.com/300" alt="Descrição 2" />
          <p>Foto de atividades desse ramo</p>
        </div>
        <div className={styles.photo}>
          <img src="https://via.placeholder.com/300" alt="Descrição 3" />
          <p>Foto mais importante</p>
        </div>
      </div>
    </div>
  );
}
