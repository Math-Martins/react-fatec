import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.css";

export function About() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>About</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
