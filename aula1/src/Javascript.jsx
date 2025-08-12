import { HiAcademicCap } from "react-icons/hi2";

export function Javascript() {
  const name = "Jetta";
  let nome = "Joseph";

  const soma = (a, b) => a + b;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{nome}</h1>
      <h1>A soma é: {2 + 2}</h1>
      <h1>A soma é: {soma(100, 100)}</h1>
      <HiAcademicCap />
    </div>
  );
}
