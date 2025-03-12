/* eslint-disable react/prop-types */
import styles from "./styles/Button.module.css";
export default function Button({
  name,
  value,
  children,
  type,
  onClick,
  disabled,
  link,
  targetBlank
}) {
  return (
    <a
      disabled={disabled}
      name={name}
      value={value}
      className={styles.styledButton}
      type={type || "submit"}
      onClick={onClick}
      data-aos="fade-up"
      href={link}
      target={ targetBlank ? "_blank" : null }
    >
      {children}
    </a>
  );
}
