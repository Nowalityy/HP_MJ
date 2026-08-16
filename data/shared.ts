/** Textes communs aux trois disciplines du pôle. */

/** Note sur les sorts, identique en tête de chaque discipline. */
export const SPELLS_NOTE =
  "**Note sur les sorts :** les sorts cités proviennent du registre « Sorts développés » (implémentés dans le projet). Leur classement par année y étant explicitement provisoire, ils sont donnés comme exemples mobilisables et non comme prérequis d’année stricts.";

/** Introduction commune de la section « Paliers de progression ». */
export const PALIERS_INTRO =
  "Progression commune (Étapes d’Éveil) : **Initiation (100) → Révélation (200) → Ascension (300) → Transcendance (400) → Maître (500)**. XP cumulatif. Gain : narration = 20 XP de base, modificateurs (solo −10 / 2-3 joueurs ±0 / +3 joueurs ou moteur de jeu +10 / bonne réaction +10 / mauvaise réaction −5). Plafond : 30 XP par jour et par suivi.";

/** Règle des passifs, identique dans chaque discipline. */
export const PASSIFS_RULE =
  "**Règle des passifs :** aucun passif avant l’Ascension. Le passif s’acquiert en phases — phase 1 à l’Ascension, phase 2 à la Transcendance, complet au Maître. Un seul spell/objet créé, au Maître uniquement (sous slot), en fin de suivi.";

/** Note « Animations », identique à chaque palier de chaque discipline. */
export const ANIMATIONS_NOTE =
  "Chaque étape donne lieu à une scène. **Le MJ reste libre du contenu et de l’issue** : une scène réussie fait progresser le palier, une scène ratée se rejoue. Les sorts ci-dessus et le contexte des trames servent de matière ; inutile de scripter les scènes à l’avance.";

/** Malus par défaut si un prérequis n’est pas rempli à l’ouverture. */
export const PREREQUIS_MALUS =
  "À CONFIRMER : proposition par défaut : dette d’XP de −50, le joueur démarre à −50 XP et doit atteindre 150 XP pour valider l’Initiation. Alternatives : plafond journalier réduit à 15 XP, ou blocage à la Révélation tant que le prérequis n’est pas comblé en RP";

/** Note de synthèse, avant le tableau récapitulatif. */
export const SYNTHESE_NOTE =
  "À retenir : aucun passif avant l’Ascension, et un seul spell/objet créé, au palier Maître (sous slot, en fin de suivi).";

/** Introduction commune de la section « Trame RP ». */
export const TRAME_INTRO =
  "Trame ancrée dans le lore d’Elderwood, à décliner en variantes. //Côté XP, une scène jouée dans le cadre d’une trame compte comme « suivi moteur de jeu » (+10), sans bonus hors système, dans la limite de 30 XP/jour.//";

/** Lignes du tableau de synthèse, identiques pour les trois disciplines. */
export const SYNTHESE_ROWS: {
  palier: string;
  passif: string;
  spell: string;
  transmission: string;
}[] = [
  { palier: "Initiation", passif: "—", spell: "—", transmission: "—" },
  { palier: "Révélation", passif: "—", spell: "—", transmission: "—" },
  { palier: "Ascension", passif: "Passif — phase 1", spell: "—", transmission: "—" },
  {
    palier: "Transcendance",
    passif: "Passif — phase 2",
    spell: "—",
    transmission: "Devoir de transmission (évènement + disciples)",
  },
  {
    palier: "Maître (slot)",
    passif: "Passif complet",
    spell: "Création unique (fin de suivi)",
    transmission: "Forme les disciples jusqu’à Transcendance",
  },
];
