import type { Discipline } from "@/data/types";
import {
  SPELLS_NOTE,
  PALIERS_INTRO,
  PASSIFS_RULE,
  SYNTHESE_NOTE,
  TRAME_INTRO,
} from "@/data/shared";
import { RichText } from "./RichText";
import { PalierCard } from "./PalierCard";
import { SyntheseTable } from "./SyntheseTable";

/** Section complète d’une discipline (lore, prérequis, paliers, synthèse, trame). */
export function DisciplineSection({
  discipline,
  poleName,
}: {
  discipline: Discipline;
  poleName: string;
}) {
  const { slug, title, era, index, paliers, trame } = discipline;

  return (
    <section
      id={slug}
      className={`lore-section era-${era}${index > 1 ? " disc-break" : ""}`}
      aria-labelledby={`${slug}-title`}
    >
      <div className="section-head">
        <span className="section-eyebrow">
          <a href="#sommaire" className="back-top">
            ↑ Sommaire
          </a>{" "}
          · {poleName} ·{" "}
          <span className={`era-chip era-chip-${era}`}>DISCIPLINE</span>
        </span>
        <h2 id={`${slug}-title`}>{title}</h2>
        <div className="section-rule" />
      </div>

      <div className="section-body">
        <nav className="disc-toc" aria-label="Sommaire de la discipline">
          <span className="disc-toc-lab">Aller à :</span>
          <a href={`#${slug}-prerequis`}>Prérequis</a>
          {paliers.map((p) => (
            <a key={p.id} href={`#${slug}-${p.id}`}>
              {p.name}
            </a>
          ))}
          <a href={`#${slug}-synthese`}>Synthèse</a>
          <a href={`#${slug}-trame`}>Trame RP</a>
        </nav>

        <h3>Ancrage dans le lore</h3>
        <p>
          <RichText text={discipline.loreIntro} />
        </p>
        <p className="meta-note">
          <RichText text={SPELLS_NOTE} />
        </p>

        <h3 id={`${slug}-prerequis`}>A. Prérequis</h3>
        <p>
          <strong>
            Pour ouvrir le suivi, le Résonant doit remplir les conditions
            suivantes :
          </strong>
        </p>
        <ul className="suivi-list">
          {discipline.prerequis.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
        <p className="rule-note">
          <strong>
            Prérequis non rempli à l’ouverture — malus appliqué :
          </strong>{" "}
          <span className="ph" title="À confirmer par le MJ">
            {discipline.prerequisMalus}
          </span>
        </p>

        <h3 id={`${slug}-paliers`}>B. Paliers de progression</h3>
        <p>
          <RichText text={PALIERS_INTRO} />
        </p>
        <p className="rule-note">
          <RichText text={PASSIFS_RULE} />
        </p>

        {paliers.map((palier) => (
          <PalierCard key={palier.id} slug={slug} palier={palier} />
        ))}

        <h3 id={`${slug}-synthese`}>C. Synthèse des récompenses</h3>
        <p className="meta-note">
          <RichText text={SYNTHESE_NOTE} />
        </p>
        <SyntheseTable />

        <h3 id={`${slug}-trame`}>D. Trame RP liée au lore</h3>
        <p>
          <RichText text={TRAME_INTRO} />
        </p>
        <h4>Trame — {trame.title}</h4>
        <p>
          <RichText text={trame.fil} />
        </p>

        <p className="blk-title blk-etape" style={{ marginBottom: 2 }}>
          <span>Accroches possibles (variantes)</span>
        </p>
        <ul className="suivi-list">
          {trame.accroches.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>

        <p className="blk-title blk-recomp" style={{ marginBottom: 2 }}>
          <span>Ce que la trame débloque</span>
        </p>
        <ul className="suivi-list">
          {trame.debloque.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>

        <p className="disc-foot">
          <a href="#sommaire" className="back-top">
            ↑ Retour au sommaire
          </a>
        </p>
      </div>
    </section>
  );
}
