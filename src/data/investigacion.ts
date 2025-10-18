// src/data/investigacion.ts
export type Item = { term: string; def: string };

// Pega tu texto aquí (1 línea por término: Término — Definición)
const RAW_TEXT = `
input — Campo para introducir datos en formularios.
textarea — Área de texto multilínea para entradas largas.
select — Lista desplegable con opciones.
CSS — Hojas de estilo en cascada para dar diseño.
media queries — Reglas CSS para adaptar estilos según el ancho de pantalla.
framework — Conjunto de utilidades/convenciones para construir interfaces.
`;

function parseRaw(raw: string) {
  return raw
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean)
    .map(line => {
      const [term, ...rest] = line.split("—");
      return {
        term: (term || "").trim(),
        def: (rest.join("—") || "").trim(),
      };
    })
    .filter(x => x.term && x.def);
}

const MANUAL_ITEMS = [] as Item[];

export const ITEMS: Item[] = [...parseRaw(RAW_TEXT), ...MANUAL_ITEMS];
