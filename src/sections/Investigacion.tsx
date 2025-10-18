// src/sections/Investigacion.tsx
import { ITEMS, type Item } from "../data/investigacion";
import { useMemo, useState } from "react";

const ABC = ["Todos", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")] as const;

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function groupByInitial(items: Item[]) {
  const map = new Map<string, Item[]>();
  items.forEach(it => {
    const initial = (it.term[0] || "#").toUpperCase();
    if (!map.has(initial)) map.set(initial, []);
    map.get(initial)!.push(it);
  });
  for (const key of map.keys()) {
    map.get(key)!.sort((a, b) => a.term.localeCompare(b.term));
  }
  return map;
}

export default function Investigacion() {
  const [q, setQ] = useState("");
  const [letter, setLetter] = useState<(typeof ABC)[number]>("Todos");

  const filtered = useMemo(() => {
    const nq = normalize(q);
    return ITEMS.filter(it => {
      const byLetter =
        letter === "Todos" ? true : (it.term[0] || "").toUpperCase() === letter;
      const haystack = `${it.term} ${it.def}`;
      const byQuery = normalize(haystack).includes(nq);
      return byLetter && byQuery;
    });
  }, [q, letter]);

  const grouped = useMemo(() => groupByInitial(filtered), [filtered]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const it of ITEMS) {
      const key = (it.term[0] || "#").toUpperCase();
      c[key] = (c[key] || 0) + 1;
    }
    return c;
  }, []);

  return (
    <section id="investigacion" className="py-5">
      <div className="container">
        <h2 className="display-5 fw-bold mb-2 text-white">Investigación</h2>
        <p className="text-info-emphasis mb-4">
          Elementos de Formularios HTML + CSS (inputs, textarea, select, media queries, frameworks…)
        </p>

        <div className="mb-3">
          <input
            className="form-control form-control-lg"
            placeholder="Buscar término o definición…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>

        <div className="d-flex flex-wrap gap-2 mb-4">
          {ABC.map(l => (
            <button
              key={l}
              type="button"
              className={
                "btn btn-sm " + (letter === l ? "btn-primary" : "btn-outline-secondary")
              }
              onClick={() => setLetter(l)}
            >
              {l}
              {l !== "Todos" && counts[l] ? (
                <span className="badge text-bg-secondary ms-2">{counts[l]}</span>
              ) : null}
            </button>
          ))}
        </div>

        {[...grouped.keys()]
          .sort((a, b) => a.localeCompare(b))
          .map((k, gi) => {
            const list = grouped.get(k)!;
            const parentId = `acc-${k}`;
            return (
              <div key={k} className="mb-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <button
                    className="btn btn-link p-0 text-decoration-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${parentId}`}
                    aria-expanded="true"
                    aria-controls={parentId}
                  >
                    <span className="me-2">▸</span>
                    <strong className="fs-5">{k}</strong>
                  </button>
                  <span className="badge text-bg-dark">{list.length}</span>
                </div>

                <div id={parentId} className="collapse show">
                  <div className="accordion" id={`accordion-${gi}`}>
                    {list.map((it, idx) => {
                      const itemId = `item-${k}-${idx}`;
                      return (
                        <div className="accordion-item" key={itemId}>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse-${itemId}`}
                              aria-expanded="false"
                              aria-controls={`collapse-${itemId}`}
                            >
                              {it.term}
                            </button>
                          </h2>
                          <div
                            id={`collapse-${itemId}`}
                            className="accordion-collapse collapse"
                            data-bs-parent={`#accordion-${gi}`}
                          >
                            <div className="accordion-body">{it.def}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
