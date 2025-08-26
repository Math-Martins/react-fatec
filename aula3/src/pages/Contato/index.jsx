import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.css";

export function Contato() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Contato</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
