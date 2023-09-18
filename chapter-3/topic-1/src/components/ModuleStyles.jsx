import { Container } from "react-bootstrap";
import styles from "./modulestyles.module.css";

const ModuleStyles = () => {
  return (
    <Container>
      <div className="d-flex flex-row justify-content-center align-items-center vh-100">
        <button className={styles.btn}>Berubah</button>
        <button className={styles["btn-success"]}>Tetap</button>
        <button className={styles["btn-sm"]}>Tetap</button>
      </div>
    </Container>
  );
};

export default ModuleStyles;
