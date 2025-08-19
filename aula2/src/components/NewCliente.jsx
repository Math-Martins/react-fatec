import { useState } from "react";
import styles from "./NewCliente.module.css";

export function NewCliente() {
  function MostrarValor(event) {
    // console.log(event.target.value);
    setNome(event.target.value);
  }
  const [nome, setNome] = useState("");

  return (
    <>
      <form className={styles.form}>
        <p>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" onChange={MostrarValor} required />
        </p>
        <p>{nome}</p>
      </form>
    </>
  );
}
