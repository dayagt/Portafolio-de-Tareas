import React from "react";
import { projects } from "../data/projects";

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M14 3h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M21 14v7H3V3h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58l-.01-2.03c-3.35.73-4.06-1.61-4.06-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.77-1.6-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.55.12-3.22 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.67.24 2.92.12 3.22.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.94.43.37.81 1.1.81 2.22l-.01 3.28c0 .32.21.7.83.58A12 12 0 0 0 12 .5z"/>
  </svg>
);

const AtomIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="2.3" fill="currentColor"/>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke="currentColor" strokeWidth="1.5" transform="rotate(-60 12 12)"/>
  </svg>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">Mis proyectos</div>
        <h2 style={{ marginBottom: 18 }}>Lo que construí</h2>

        <div className="projects-grid-hero">
          {projects.map(p => (
            <article key={p.id} className="project-card-hero">
              {/* Miniatura grande arriba */}
              {p.image && (
                <div className="thumb-hero">
                  <img src={p.image} alt={`Vista previa de ${p.title}`} />
                </div>
              )}

              {/* Panel inferior */}
              <div className="panel-hero">
                <div className="panel-head">
                  <div className="icon-wrap"><AtomIcon /></div>
                  <h3 className="panel-title">{p.title}</h3>
                </div>

                <p className="panel-desc">{p.description}</p>

                {p.tags && (
                  <div className="tags">
                    {p.tags.map(t => <span key={t} className="badge">{t}</span>)}
                  </div>
                )}

                <div className="cta-row">
                  <a className="btn btn--accent" href={p.netlify} target="_blank" rel="noreferrer">
                    <ExternalIcon /> <span>Ver en Netlify</span>
                  </a>
                  <a className="btn btn--ghost" href={p.github} target="_blank" rel="noreferrer">
                    <GithubIcon /> <span>Ver en GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


