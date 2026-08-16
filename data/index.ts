import type { Discipline } from "./types";
import { duelliste } from "./disciplines/duelliste";
import { boucliers } from "./disciplines/boucliers";
import { precision } from "./disciplines/precision";

/** Métadonnées globales du document. */
export const DOC_META = {
  pole: "Arts Offensifs & Défensifs",
  brand: "ELDERWOOD",
  brandSub: "Système de suivi, édition MJ",
  crest: "Système de suivi · Elderwood",
  edition: "Édition de travail",
  updated: "Mise à jour : 16 août 2026",
  coverTitle: "Pôle — Arts Offensifs & Défensifs",
  coverSubtitle:
    "Fiches de suivi de progression — Duelliste, Boucliers, Précision",
} as const;

/** Les trois disciplines du pôle, dans l’ordre du sommaire. */
export const disciplines: Discipline[] = [duelliste, boucliers, precision];

/** Libellés courts des paliers, pour la navigation. */
export const PALIER_LABELS = [
  "Initiation",
  "Révélation",
  "Ascension",
  "Transcendance",
  "Maître",
] as const;

export * from "./types";
export * from "./shared";
