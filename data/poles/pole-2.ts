import type { Pole } from "../types";
import { canalisation } from "../disciplines/canalisation";
import { distorsion } from "../disciplines/distorsion";
import { surcharges } from "../disciplines/surcharges";

export const pole2: Pole = {
  slug: "pole-2",
  num: 2,
  poleName: "Maîtrise & Manipulation Pure du Flux",
  coverTitle: "Pôle — Maîtrise & Manipulation Pure du Flux",
  coverSubtitle:
    "Fiches de suivi — Canalisation, Distorsion & Dissipation, Surcharges",
  disciplines: [canalisation, distorsion, surcharges],
  glyph: "✦",
  accent: "#6B3FA0",
  accent2: "#B8892B",
  tag: "Canalisation · Distorsion · Surcharge",
  description:
    "Agir sur la magie elle-même : canaliser sans catalyseur, brouiller et dissiper les sorts, pousser son Flux au-delà de ses limites.",
};
