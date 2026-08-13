/**
 * Modèle de données du système de suivi Elderwood.
 *
 * Le texte enrichi (`RichString`) accepte une micro-syntaxe interprétée par
 * le composant <RichText> :
 *   - **gras**            → <strong>
 *   - //italique//        → <em>
 *   - {{ph:texte}}        → badge « À confirmer (MJ) »
 */
export type RichString = string;

/** Famille de Flux / d'époque — pilote la couleur d'accent d'une section. */
export type Era = "moderne" | "antique" | "trans";

/** Un sort mobilisable, issu du registre « Sorts développés ». */
export interface Spell {
  name: string;
  /** Incantation, ex. « Disarmae ! » (déjà avec les guillemets). */
  incantation: string;
  /** Description enrichie (texte après le tiret). */
  desc: RichString;
}

/** Une variante d'animation (réussite ou échec). */
export interface Variante {
  /** Étiquette de tête, ex. « Exemple 1 — ». */
  label: string;
  text: RichString;
}

/** Type de récompense — pilote la couleur du badge de tête. */
export type RewardKind = "none" | "passif" | "slot";

/** Une ligne de récompense, avec badge coloré optionnel. */
export interface Reward {
  badge?: { kind: RewardKind; text: string };
  text: RichString;
}

/** Un palier de progression (Initiation → Maître). */
export interface Palier {
  /** Suffixe d'ancre, ex. "p1". */
  id: string;
  index: number;
  name: string;
  xp: number;
  objective: RichString;
  competences: RichString[];
  etapes: RichString[];
  spells: Spell[];
  validation: RichString[];
  reussites: Variante[];
  echecs: Variante[];
  recompenses: Reward[];
}

/** La trame RP liée au lore. */
export interface Trame {
  title: string;
  fil: RichString;
  accroches: RichString[];
  debloque: RichString[];
}

/** Une discipline complète du pôle. */
export interface Discipline {
  slug: string;
  index: number;
  title: string;
  era: Era;
  loreIntro: RichString;
  prerequis: RichString[];
  prerequisMalus: string;
  paliers: Palier[];
  trame: Trame;
}
