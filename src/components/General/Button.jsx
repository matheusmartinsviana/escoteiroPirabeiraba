/* eslint-disable react/prop-types */
import styles from "./styles/Button.module.css";
export default function Button({
  name,
  value,
  children,
  type,
  onClick,
  disabled,
}) {
  return (
    <button
      disabled={disabled}
      name={name}
      value={value}
      className={styles.styledButton}
      type={type || "submit"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
