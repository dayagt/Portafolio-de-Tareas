export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;        // miniatura/preview
  netlify: string;       // URL de despliegue
  github: string;        // URL del repo
  tags?: string[];       // opcional
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Hoja de Vida",
    description: "CV online con secciones y estilos coherentes.",
    image: "/cv.jpg",            // pon la imagen en /public (o usa ruta absoluta)
    netlify: "",
    github: "https://github.com/dayagt/repositorio-prueba",
    tags: ["React", "UI"]
  },
  {
    id: "p2",
    title: "Formulario",
    description: "Formulario con validaciones y exportación.",
    image: "/Formulario.jpg",
    netlify: "",
    github: "https://github.com/dayagt/Formulario-excel",
    tags: ["TypeScript", "Forms"]
  }
];
