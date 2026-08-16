import Link from "next/link";
import type { CSSProperties } from "react";
import { LANDING, poles } from "@/data";

/** Page d'accueil : hero + grille de sélection des pôles. */
export function Landing() {
  return (
    <div className="landing-wrap">
      <header className="landing-hero">
        <div className="eyebrow">{LANDING.eyebrow}</div>
        <h1>{LANDING.brand}</h1>
        <p className="tagline">{LANDING.tagline}</p>
        <div className="hero-rule" />
      </header>

      <p className="landing-sub">{LANDING.sub}</p>

      <main className="pole-grid">
        {poles.map((pole) => (
          <Link
            key={pole.slug}
            className="pole-card"
            href={`/${pole.slug}`}
            style={
              {
                "--card-accent": pole.accent,
                "--card-accent2": pole.accent2,
              } as CSSProperties
            }
          >
            <div className="card-top" />
            <div className="card-inner">
              <div className="card-head">
                <div className="card-glyph">{pole.glyph}</div>
                <div>
                  <div className="card-num">Pôle {pole.num}</div>
                  <h2>{pole.coverTitle.replace(/^Pôle\s*—\s*/, "")}</h2>
                </div>
              </div>
              <div className="card-tag">{pole.tag}</div>
              <p className="card-desc">{pole.description}</p>
              <ul className="card-disc">
                {pole.disciplines.map((d) => (
                  <li key={d.slug}>{d.title}</li>
                ))}
              </ul>
              <span className="card-cta">
                Ouvrir le pôle <span className="arrow">→</span>
              </span>
            </div>
          </Link>
        ))}
      </main>

      <footer className="landing-foot">
        {LANDING.footer}
        <span className="maj">{LANDING.updated}</span>
      </footer>
    </div>
  );
}
