import styles from "./Cliente.module.css";

export function Cliente({ nome, idade, email }) {
  return (
    <>
      <div className={styles.cliente}>
        <h3>{nome}</h3>
        <h3>{idade}</h3>
        <h3>{email}</h3>
      </div>
    </>
  );
}
