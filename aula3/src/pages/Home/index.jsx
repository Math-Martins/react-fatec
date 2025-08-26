import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./styles.module.css";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Home</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
