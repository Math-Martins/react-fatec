import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contatos</NavLink>
      </nav>
    </header>
  );
}
