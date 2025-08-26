import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AppRoutes } from "./appRoutes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
