import type { Pole } from "../types";
import { sorcellerie } from "../disciplines/sorcellerie";
import { magieCombinee } from "../disciplines/magie-combinee";

export const pole3: Pole = {
  slug: "pole-3",
  num: 3,
  poleName: "Magie Spécialisée au Combat",
  coverTitle: "Pôle — Magie Spécialisée au Combat",
  coverSubtitle: "Fiches de suivi — Infiltration & Discrétion, Magie Combinée",
  disciplines: [sorcellerie, magieCombinee],
  glyph: "◈",
  accent: "#3A5A75",
  accent2: "#8B2E2E",
  tag: "Discrétion · Magie combinée",
  description:
    "Les voies obliques du combat : l’infiltration et l’ombre, et la magie qui ne prend toute sa puissance qu’à plusieurs.",
};
