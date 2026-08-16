import { BRAND } from "@/data";
import type { Pole } from "@/data/types";

/** En-tête de couverture d'un pôle. */
export function Cover({ pole }: { pole: Pole }) {
  return (
    <div className="cover">
      <div className="eyebrow">{BRAND.crest}</div>
      <h1>{pole.coverTitle}</h1>
      <p className="subtitle">{pole.coverSubtitle}</p>
      <div className="cover-meta">
        <span className="meta-chip">{BRAND.edition}</span>
        <span className="meta-chip">{BRAND.updated}</span>
        <span className="meta-chip">{pole.disciplines.length} disciplines</span>
      </div>
    </div>
  );
}
