import { useNavigate } from "react-router-dom";
import styles from "./styles/Branches.module.css";
import branchicon from "../../assets/chapeu.webp";

export default function Branches() {
  const navigate = useNavigate();

  const handleBranchClick = (branch) => {
    navigate(`/ramos/${branch}`);
  };

  return (
    <div id="ramos" className={styles.container}>
      <div className={styles.leftContent}>
        <h2>
          Conheça nossos <strong>Ramos</strong>
        </h2>
        <p>
          Diferentes ramos do Grupo Escoteiro Pirabeiraba, cada um com
          atividades adaptadas para a idade e focadas em desenvolvimento,
          trabalho em equipe e cidadania.
        </p>
      </div>
      <div className={styles.rightContent}>
        <div
          className={styles.item}
          onClick={() => handleBranchClick("lobinho")}
        >
          <div className={styles.itemHeader}>
            <img src={branchicon} width={48} height={"auto"} alt="" />
            <h3>Ramo Lobinho</h3>
          </div>
          <p>(6,5 - 10 anos)</p>
        </div>
        <div
          className={styles.item}
          onClick={() => handleBranchClick("escoteiro")}
        >
          <div className={styles.itemHeader}>
            <img src={branchicon} width={48} height={"auto"} alt="" />
            <h3>Ramo Escoteiro</h3>
          </div>
          <p>(11 - 14 anos)</p>
        </div>
        <div
          className={styles.item}
          onClick={() => handleBranchClick("senior")}
        >
          <div className={styles.itemHeader}>
            <img src={branchicon} width={48} height={"auto"} alt="" />
            <h3>Ramo Sênior</h3>
          </div>
          <p>(15 - 17 anos)</p>
        </div>
        <div
          className={styles.item}
          onClick={() => handleBranchClick("pioneiro")}
        >
          <div className={styles.itemHeader}>
            <img src={branchicon} width={48} height={"auto"} alt="" />
            <h3>Ramo Pioneiro</h3>
          </div>
          <p>(18 - 21 anos)</p>
        </div>
      </div>
    </div>
  );
}
