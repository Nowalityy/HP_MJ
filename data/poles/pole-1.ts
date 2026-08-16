import type { Pole } from "../types";
import { duelliste } from "../disciplines/duelliste";
import { boucliers } from "../disciplines/boucliers";
import { precision } from "../disciplines/precision";

export const pole1: Pole = {
  slug: "pole-1",
  num: 1,
  poleName: "Arts Offensifs & Défensifs",
  coverTitle: "Pôle — Arts Offensifs & Défensifs",
  coverSubtitle:
    "Fiches de suivi de progression — Duelliste, Boucliers, Précision",
  disciplines: [duelliste, boucliers, precision],
  glyph: "⚔",
  accent: "#1B3A6B",
  accent2: "#2E6B3A",
  tag: "Combat direct · Protection · Précision",
  description:
    "Le duel, le bouclier et le tir de précision. Les disciplines qui se dressent face au danger, l’affrontent ou le percent.",
};
