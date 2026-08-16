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

/** Un pôle magique : un groupe de disciplines + sa présentation. */
export interface Pole {
  /** Segment de route, ex. "pole-1". */
  slug: string;
  num: number;
  /** Nom court du pôle (topbar, fil d'Ariane). */
  poleName: string;
  /** Titre de couverture, ex. « Pôle — Arts Offensifs & Défensifs ». */
  coverTitle: string;
  coverSubtitle: string;
  disciplines: Discipline[];
  /** Présentation sur la page d'accueil. */
  glyph: string;
  accent: string;
  accent2: string;
  tag: string;
  description: string;
}
