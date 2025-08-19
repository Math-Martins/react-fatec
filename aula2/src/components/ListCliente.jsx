import { Cliente } from "./Cliente";
import styles from "./ListCliente.module.css";

export function ListCliente() {
  return (
    <>
      <li className={styles.list}>
        <Cliente nome="Richard" idade="18" email="rifernun@gmail.com" />
        <Cliente nome="Matheus" idade="18" email="mathmartins458@gmail.com" />
        <Cliente nome="Fet" idade="18" email="fet@gmail.com" />
      </li>
    </>
  );
}
