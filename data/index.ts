import type { Pole } from "./types";
import { pole1 } from "./poles/pole-1";
import { pole2 } from "./poles/pole-2";
import { pole3 } from "./poles/pole-3";

/** Identité globale, partagée par tous les pôles. */
export const BRAND = {
  brand: "ELDERWOOD",
  brandSub: "Système de suivi, édition MJ",
  crest: "Système de suivi · Elderwood",
  edition: "Édition de travail",
  updated: "Mise à jour : 16 août 2026",
} as const;

/** Contenus de la page d'accueil (sélection des pôles). */
export const LANDING = {
  eyebrow: "Système de suivi · Édition MJ",
  brand: "ELDERWOOD",
  tagline:
    "Choisissez un pôle magique pour accéder à ses disciplines, ses paliers de progression et ses trames RP.",
  sub: "Trois pôles · Huit disciplines · Cinq paliers d’Éveil",
  footer: "Elderwood · Système de suivi de progression · Document interne",
  updated: "Mise à jour : 16 août 2026",
} as const;

/** Tous les pôles, dans l'ordre. */
export const poles: Pole[] = [pole1, pole2, pole3];

/** Retrouve un pôle par son slug de route. */
export function getPole(slug: string): Pole | undefined {
  return poles.find((p) => p.slug === slug);
}

export * from "./types";
export * from "./shared";
