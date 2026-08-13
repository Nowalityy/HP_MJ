import type { Discipline } from "../types";
import { PREREQUIS_MALUS } from "../shared";

export const precision: Discipline = {
  slug: "magie-precision-perforation",
  index: 3,
  title: "Magie de Précision & Perforation",
  era: "moderne",
  loreIntro:
    "La Magie de Précision concentre le Flux en un point pour percer défenses et boucliers. Elle résonne avec le **Flux Violet (Venatrix)** — maîtrise, précision, « prendre l’avantage par la justesse plutôt que par la force » — et le **Flux Orange (Falcon)** pour l’étude des micro-failles, sans être réservée à ces maisons. C’est une discipline d’orfèvre : là où le duelliste frappe fort, le perforateur frappe juste.",
  prerequis: [
    "Avoir suivi les cours de Sortilèges et, en option de 3e année, d’Arithmancie ou de Métamorphose.",
    "Avoir obtenu 85/100 au test d’impact ciblé (//toucher un cœur de cible mouvant à 30 mètres//) — OU combler ce manque via RP dans le suivi.",
  ],
  prerequisMalus: PREREQUIS_MALUS,
  paliers: [
    {
      id: "p1",
      index: 1,
      name: "Initiation",
      xp: 100,
      objective:
        "Comprendre la théorie de la concentration du Flux et réduire un projectile sous supervision.",
      competences: [
        "Théorie de la concentration d’énergie en un point précis.",
        "Réduction supervisée de la taille d’un projectile magique.",
        "Connaissance des sorts ciblés fondamentaux.",
      ],
      etapes: [
        "Étude théorique : concentration du Flux, notion de point d’impact (scène de cours).",
        "Premier exercice supervisé : réduire un projectile pour en densifier l’énergie.",
        "Exercice de visée : toucher une cible fixe sous l’œil du MJ.",
      ],
      spells: [
        {
          name: "Disarmae",
          incantation: "« Disarmae ! »",
          desc: "impulsion ciblée qui prive la cible de son arme/catalyseur ; premier travail de précision utile.",
        },
      ],
      validation: [
        "Atteindre 100 XP sur le suivi.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ valide la compréhension et la visée encadrée.",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Sous supervision, le joueur concentre un sort et touche une cible fixe au bon endroit.",
        },
        {
          label: "Exemple 2 —",
          text: "Exercice de densification où le joueur apprend à réduire son projectile sans le disperser.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "Le projectile reste diffus et manque de force — retour à la théorie.",
        },
        {
          label: "Exemple 2 —",
          text: "La visée est approximative, le joueur touche à côté du point demandé.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "none", text: "Pas de passif ni de spell à ce palier." },
          text: "Bases théoriques et première visée encadrée uniquement.",
        },
        { text: "**RP :** reconnaissance comme apprenti tireur de précision." },
      ],
    },
    {
      id: "p2",
      index: 2,
      name: "Révélation",
      xp: 200,
      objective:
        "Percer en autonomie les défenses magiques basiques en ciblant leurs micro-failles.",
      competences: [
        "Perforation autonome des défenses magiques basiques.",
        "Lecture des micro-failles d’une barrière adverse.",
        "Gestion seul de la puissance et du point d’impact.",
      ],
      etapes: [
        "Exercice d’autonomie : percer seul un bouclier d’entraînement basique (scène dédiée).",
        "Mise en situation : repérer et viser la faille d’une barrière (scène dédiée).",
        "Tir autonome supervisé de loin sur cibles protégées.",
      ],
      spells: [
        {
          name: "Acies Glaciae",
          incantation: "« Acies Glaciae ! »",
          desc: "pic de glace effilé qui transperce sa trajectoire et cloue la cible — sort perforant de référence.",
        },
      ],
      validation: [
        "Atteindre 200 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ constate que le joueur perce seul des défenses basiques.",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Le joueur repère la faille d’un bouclier d’entraînement et le perce d’un tir précis.",
        },
        {
          label: "Exemple 2 —",
          text: "Face à une barrière renforcée, le joueur démontre qu’il vise juste même sans percer entièrement.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "Le joueur frappe le bouclier de plein fouet au lieu de viser la faille — inefficace.",
        },
        {
          label: "Exemple 2 —",
          text: "La précision manque et le tir dévie.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "none", text: "Toujours pas de passif ni de spell." },
          text: "La Révélation valide l’autonomie perforante ; le passif commence à l’Ascension.",
        },
        {
          text: "**RP :** tireur autonome, capable de percer des défenses simples.",
        },
      ],
    },
    {
      id: "p3",
      index: 3,
      name: "Ascension",
      xp: 300,
      objective:
        "Maîtriser les trajectoires courbes et commencer l’apprentissage du passif (phase 1).",
      competences: [
        "Sorts à trajectoire courbe pour contourner obstacles et boucliers frontaux.",
        "Début d’intégration du passif de la discipline (phase 1).",
        "Contrôle fin de la trajectoire et du moment d’impact.",
      ],
      etapes: [
        "Scène de maîtrise technique : courber un tir pour contourner un obstacle.",
        "Scène de contournement : toucher une cible protégée par un bouclier frontal.",
        "Scène d’apprentissage du passif (phase 1) : première mise en œuvre encadrée.",
      ],
      spells: [
        {
          name: "Mors Sequens",
          incantation: "« Mors Sequens ! »",
          desc: "projectile d’ombre tenace qui poursuit sa proie jusque dans ses esquives — la trajectoire qui ne lâche pas.",
        },
      ],
      validation: [
        "Atteindre 300 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont l’apprentissage du passif (phase 1).",
        "Le MJ valide la maîtrise des trajectoires et la phase 1 du passif.",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Le joueur contourne un bouclier frontal d’un tir courbe et touche derrière.",
        },
        {
          label: "Exemple 2 —",
          text: "Première activation réussie du passif de perforation en situation.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "La courbe est mal calculée et le tir s’écrase sur l’obstacle.",
        },
        {
          label: "Exemple 2 —",
          text: "Le passif mal contrôlé ne se déclenche pas ; la phase 1 n’est pas validée.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "passif", text: "Passif — PHASE 1 :" },
          text: "première phase du passif de perforation. {{ph:À CONFIRMER : effet exact à définir : par ex. les sorts ciblés ignorent une partie de la résistance défensive (pénétration magique), selon le moteur de jeu}}",
        },
        {
          text: "**RP :** tireur confirmé, capable de contourner la plupart des gardes.",
        },
      ],
    },
    {
      id: "p4",
      index: 4,
      name: "Transcendance",
      xp: 400,
      objective:
        "Perfectionner la neutralisation à distance, approfondir le passif (phase 2) et accomplir le Devoir de transmission RP.",
      competences: [
        "Neutralisation d’objets ou de catalyseurs à distance sans blesser le porteur.",
        "Approfondissement du passif de la discipline (phase 2).",
        "Capacité à transmettre : créer un évènement, prendre des disciples, gérer leur initiation.",
      ],
      etapes: [
        "Scène de perfectionnement : désactiver un catalyseur à distance sans toucher son porteur.",
        "Scène d’apprentissage du passif (phase 2) : approfondissement en conditions difficiles.",
        "Devoir de transmission RP : créer un évènement, recruter des disciples et gérer leur Initiation.",
      ],
      spells: [
        {
          name: "Rupture de catalyseur",
          incantation: "« sort de précision »",
          desc: "sort qui abîme ou neutralise la baguette adverse à distance.",
        },
      ],
      validation: [
        "Atteindre 400 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont le Devoir de transmission.",
        "Passif phase 2 acquis ET Devoir de transmission mené.",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Le joueur neutralise le catalyseur d’un adversaire sans le blesser, désamorçant le combat.",
        },
        {
          label: "Exemple 2 —",
          text: "Le joueur ouvre un stand de tir de précision et encadre ses premiers disciples.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "Le tir manque le catalyseur et blesse le porteur — le contrôle fin n’est pas atteint.",
        },
        {
          label: "Exemple 2 —",
          text: "L’évènement de transmission tourne court — le Devoir n’est pas rempli.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "passif", text: "Passif — PHASE 2 :" },
          text: "montée en puissance du passif de perforation. {{ph:À CONFIRMER : intitulé et effet de la phase 2 à définir}}",
        },
        {
          text: "**RP :** mentor reconnu ; ouverture d’un suivi annexe (persona d’instructeur de précision).",
        },
      ],
    },
    {
      id: "p5",
      index: 5,
      name: "Maître",
      xp: 500,
      objective:
        "Devenir LA référence de la précision : passif complet, formation des disciples jusqu’à la Transcendance, et création d’un spell/objet unique en fin de suivi. Palier soumis à slot.",
      competences: [
        "Autorité reconnue comme référence de la précision à Elderwood.",
        "Passif de perforation à son niveau complet.",
        "Tir capable de traverser les boucliers d’élite.",
        "Création d’un spell/objet/technique perforant unique (aboutissement du suivi).",
      ],
      etapes: [
        "Scène de référence : réussir un tir jugé impossible lors d’un évènement majeur.",
        "Scène de formation : accompagner un ou des disciples jusqu’à la Transcendance.",
        "Scène de création : concevoir et révéler son tir/objet signature, en fin de suivi.",
      ],
      spells: [
        {
          name: "Registre d’élite",
          incantation: "« — »",
          desc: "maîtrise des sorts perforants majeurs et création de SON propre tir d’Écho, exclusif à ce palier.",
        },
      ],
      validation: [
        "Atteindre 500 XP cumulés ET occuper l’un des slots de Maître du domaine.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Avoir formé au moins un disciple jusqu’à la Transcendance et créé son spell/objet en fin de suivi.",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Le joueur perce un bouclier d’élite réputé infranchissable devant témoins.",
        },
        {
          label: "Exemple 2 —",
          text: "Un disciple formé atteint la Transcendance.",
        },
        {
          label: "Exemple 3 —",
          text: "Révélation de son tir signature en conditions réelles.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "Le tir décisif échoue sous les regards ; le statut de référence est remis en cause.",
        },
        {
          label: "Exemple 2 —",
          text: "La création finale est jugée déséquilibrée par le MJ — retour en conception.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "slot", text: "SLOT — accès limité :" },
          text: "palier soumis à slot (nombre variable selon le domaine). {{ph:À CONFIRMER : nombre de slots de Maître pour la Précision à fixer}}",
        },
        {
          badge: { kind: "passif", text: "Passif COMPLET :" },
          text: "le passif de perforation atteint son niveau maximal (pénétration maximale des résistances).",
        },
        {
          text: "**Spell / Objet unique :** création propre au personnage (par ex. un Tir d’Écho perforant), **uniquement à ce palier et en fin de suivi**. {{ph:À CONFIRMER : format d’enregistrement à définir}}",
        },
        {
          text: "**RP :** référence de la précision ; forme des disciples et intervient sur les cibles jugées impossibles.",
        },
      ],
    },
  ],
  trame: {
    title: "« L’Œil de la Volière »",
    fil: "**Fil conducteur :** depuis la Grande Volière, on voit loin — et par les temps qui courent, voir loin et frapper juste devient précieux. Des messages sont interceptés, des allées et venues suspectes signalées autour des zones fermées du domaine. Un perforateur d’exception peut //neutraliser à distance sans tuer// : désarmer un rôdeur, briser un catalyseur, stopper une fuite — exactement le genre de précision que la situation réclame.",
    accroches: [
      "Un instructeur met le joueur au défi de toucher des cibles mouvantes depuis les hauteurs (Initiation/Révélation).",
      "Le joueur doit neutraliser à distance un objet dangereux sans blesser quiconque autour (Ascension).",
      "Le joueur forme un petit groupe de tireurs de précision pour couvrir les points d’observation du domaine (Devoir de transmission, Transcendance).",
      "Le joueur devient le tireur de confiance consulté pour les interventions délicates (Maître).",
    ],
    debloque: [
      "**XP :** //une scène jouée dans ce cadre compte comme « suivi moteur de jeu » (+10), dans la limite de 30 XP/jour.//",
      "Support RP aux récompenses de neutralisation fine et de mentorat.",
      "Cibles et contextes variés (interception, désarmement, sauvetage) pour éviter la répétition.",
    ],
  },
};
