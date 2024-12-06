/* eslint-disable react/prop-types */
import styles from "./styles/HeaderStyled.module.css";

export default function HeaderStyled({ branch, description }) {
  return (
    <header>
      <h1 className={styles.title}>| Ramo {branch}</h1>
      <p>{description}</p>
    </header>
  );
}
