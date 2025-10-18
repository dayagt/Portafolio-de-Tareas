// src/App.tsx
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Investigacion from "./sections/Investigacion";

// Si no usas este hook, puedes borrarlo. Si lo usas, asegúrate de que
// NO exista otra definición igual dentro del archivo.
import { useEffect } from "react";
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  // Si no usas el hook, elimina esta línea.
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />

      {/* Nueva sección como tu segunda imagen */}
      <Investigacion />
    </>
  );
}

export default App;
