import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="section">
      <div className="container card hero">
        <div className="left">
          <div className="kicker">Hola, soy</div>
          <h1>Dayanna Lopez Morales</h1>
          <h2 style={{ color: "var(--accent)" }}>Documentadora técnica</h2>
          <p style={{ marginTop: 10, maxWidth: 560 }}>
            Soy Dayanna Lopez, estudiante de Ingeniería en Sistemas en octavo semestre,
            
          </p>

          <div className="ctas">
            <a className="btn btn--accent" href="#projects">Ver Proyectos</a>
            <a className="btn" href="#contacto">Hablemos</a>
          </div>
        </div>

       <div className="right">
  <div className="photo">
    <img className="avatar-full" src="/perfil.JPG" alt="Foto de perfil" />
  </div>
</div>


      </div>
    </section>
  );
};

export default Hero;
