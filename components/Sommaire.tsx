import { disciplines } from "@/data";

/** Table des matières du pôle. */
export function Sommaire() {
  return (
    <section id="sommaire" className="sommaire" aria-labelledby="sommaire-title">
      <div className="section-head">
        <span className="section-eyebrow">Sommaire</span>
        <h2 id="sommaire-title">Table des matières</h2>
        <div className="section-rule" />
      </div>

      <ul className="som-list">
        {disciplines.map((d) => (
          <li key={d.slug} className={`som-item era-${d.era}`}>
            <a href={`#${d.slug}`} className="som-link">
              <span className="som-num">{d.index}</span>
              <span className={`som-dot dot-${d.era}`} />
              <span className="som-label">{d.title}</span>
            </a>
            <ul className="som-sub">
              <li>
                <a href={`#${d.slug}-prerequis`}>Prérequis</a>
              </li>
              {d.paliers.map((p) => (
                <li key={p.id}>
                  <a href={`#${d.slug}-${p.id}`}>
                    {p.index}. {p.name}
                  </a>
                </li>
              ))}
              <li>
                <a href={`#${d.slug}-synthese`}>Synthèse</a>
              </li>
              <li>
                <a href={`#${d.slug}-trame`}>Trame RP</a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
