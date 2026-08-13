import { DOC_META, disciplines } from "@/data";

/** En-tête de couverture du document. */
export function Cover() {
  return (
    <div className="cover">
      <div className="eyebrow">{DOC_META.crest}</div>
      <h1>{DOC_META.coverTitle}</h1>
      <p className="subtitle">{DOC_META.coverSubtitle}</p>
      <div className="cover-meta">
        <span className="meta-chip">{DOC_META.edition}</span>
        <span className="meta-chip">{DOC_META.updated}</span>
        <span className="meta-chip">{disciplines.length} disciplines</span>
      </div>
    </div>
  );
}
