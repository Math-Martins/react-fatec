import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contato } from "./pages/Contato";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
