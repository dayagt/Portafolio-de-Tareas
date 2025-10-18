import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="container inner">
        <div className="brand">
          <span className="logo">A</span>
          <span>Portafolio</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#projects">Proyectos</a>
          <a href="#Formulario">Formulario</a>
          <a href="#resume">Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
