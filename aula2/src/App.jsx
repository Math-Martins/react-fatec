import "./App.css";
import { Cliente } from "./components/Cliente";
import { ListCliente } from "./components/ListCliente";
import { NewCliente } from "./components/NewCliente";

function App() {
  return (
    <>
      <h1>Cadastrar Cliente</h1>
      <NewCliente />
      <h1>Lista de clientes</h1>
      <ListCliente />
    </>
  );
}

export default App;
