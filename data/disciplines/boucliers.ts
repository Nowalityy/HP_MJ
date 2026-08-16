import type { Discipline } from "../types";
import { PREREQUIS_MALUS } from "../shared";

export const boucliers: Discipline = {
  slug: "arts-defensifs-boucliers",
  index: 2,
  title: "Arts Défensifs & Boucliers",
  era: "moderne",
  loreIntro:
    "Les Arts Défensifs incarnent la protection — de soi et des autres. La discipline résonne profondément avec le **Flux Bleu (Aerwyn)** (« se placer entre le danger et ceux qu’on protège ») et le **Flux Vert (Brumval)** (protection durable, enchantements de stabilité), sans être réservée à ces maisons. Depuis l’attaque d’Elderwood par l’Ascendance, savoir tenir un bouclier n’est plus un exercice théorique : plusieurs protections anciennes de l’école ont cédé cette nuit-là, et la défense est redevenue une compétence vitale.",
  prerequis: [
    "Avoir suivi l’ensemble des cours d’Arts Défensifs de 1re, 2e et 3e année.",
    "Avoir passé tous les examens d’Arts Défensifs avec la note minimale de 75/100.",
    "Avoir réussi une épreuve pratique : //maintenir un bouclier face à 3 sortilèges offensifs simultanés// — OU combler ce manque via RP dans le suivi.",
  ],
  prerequisMalus: PREREQUIS_MALUS,
  paliers: [
    {
      id: "p1",
      index: 1,
      name: "Initiation",
      xp: 100,
      objective:
        "Comprendre la théorie du bouclier magique et le produire sous supervision du MJ.",
      competences: [
        "Théorie du bouclier magique de base et de la stabilité d’une barrière.",
        "Production d’un bouclier simple sous encadrement.",
        "Connaissance des sorts de protection fondamentaux.",
      ],
      etapes: [
        "Étude théorique : nature du bouclier, notion de stabilité, coût en Flux (scène de cours).",
        "Premier exercice supervisé : lever un bouclier sphérique face à un sort d’entraînement.",
        "Exercice de maintien : tenir la barrière quelques secondes sous l’œil du MJ.",
      ],
      spells: [
        {
          name: "Vardum",
          incantation: "« Vardum ! »",
          desc: "protection sphérique qui absorbe les agressions extérieures ; le bouclier de base de la discipline.",
        },
      ],
      validation: [
        "Atteindre 100 XP sur le suivi.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ valide la compréhension et la production encadrée d’un bouclier.",
      ],
      recompenses: [
        {
          badge: { kind: "none", text: "Pas de passif ni de spell à ce palier." },
          text: "Bases théoriques et premier bouclier encadré uniquement.",
        },
        { text: "**RP :** reconnaissance comme apprenti défenseur." },
      ],
    },
    {
      id: "p2",
      index: 2,
      name: "Révélation",
      xp: 200,
      objective:
        "Créer en autonomie des barrières directionnelles ou physiques.",
      competences: [
        "Production autonome d’un bouclier sans supervision constante.",
        "Création de barrières directionnelles ou physiques (murs de terre, glace, force).",
        "Gestion seul de la durée et de l’orientation de la protection.",
      ],
      etapes: [
        "Exercice d’autonomie : lever et maintenir seul un bouclier (scène dédiée).",
        "Mise en situation : ériger une barrière directionnelle pour couvrir un angle précis (scène dédiée).",
        "Défense autonome supervisée de loin face à des assauts variés.",
      ],
      spells: [
        {
          name: "Scutum Glaciale",
          incantation: "« Scutum Glaciale ! »",
          desc: "coque protectrice de glace qui intercepte attaques et sortilèges, le temps de se couvrir.",
        },
        {
          name: "Nivorbis",
          incantation: "« Nivorbis ! »",
          desc: "aura de froid persistante autour du lanceur qui ralentit les ennemis proches — protection de zone rapprochée.",
        },
      ],
      validation: [
        "Atteindre 200 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ constate que le joueur érige seul des barrières adaptées.",
      ],
      recompenses: [
        {
          badge: { kind: "none", text: "Toujours pas de passif ni de spell." },
          text: "La Révélation valide l’autonomie défensive ; le passif commence à l’Ascension.",
        },
        {
          text: "**RP :** défenseur autonome, apte à couvrir un groupe en entraînement.",
        },
      ],
    },
    {
      id: "p3",
      index: 3,
      name: "Ascension",
      xp: 300,
      objective:
        "Maîtriser l’absorption et le renvoi, et commencer l’apprentissage du passif (phase 1).",
      competences: [
        "Absorption des sorts légers et renvoi des projectiles magiques vers l’attaquant.",
        "Début d’intégration du passif de la discipline (phase 1).",
        "Gestion d’une défense active plutôt que seulement subie.",
      ],
      etapes: [
        "Scène de maîtrise technique : absorber un sort léger sans rompre sa garde.",
        "Scène de renvoi : renvoyer un projectile magique vers son attaquant.",
        "Scène d’apprentissage du passif (phase 1) : première mise en œuvre encadrée.",
      ],
      spells: [
        {
          name: "Carcer Glacialis",
          incantation: "« Carcer Glacialis ! »",
          desc: "vaste anneau de glace qui bloque corps et attaques — refuge ou prison selon qui le contrôle.",
        },
        {
          name: "Reflet de Flux",
          incantation: "« renvoi de sort »",
          desc: "renvoi d’un sortilège vers l’attaquant.",
        },
      ],
      validation: [
        "Atteindre 300 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont l’apprentissage du passif (phase 1).",
        "Le MJ valide la maîtrise de l’absorption/renvoi et la phase 1 du passif.",
      ],
      recompenses: [
        {
          badge: { kind: "passif", text: "Passif — PHASE 1 :" },
          text: "première phase du passif défensif. {{ph:À CONFIRMER : effet exact à définir : par ex. résistance accrue à l’impact des sorts offensifs, ou réduction du coût en Flux du bouclier, selon le moteur de jeu}}",
        },
        {
          text: "**RP :** défenseur confirmé, capable de protéger activement un groupe.",
        },
      ],
    },
    {
      id: "p4",
      index: 4,
      name: "Transcendance",
      xp: 400,
      objective:
        "Perfectionner la défense collective (dôme), approfondir le passif (phase 2) et accomplir le Devoir de transmission RP.",
      competences: [
        "Projection d’un dôme défensif protégeant plusieurs alliés proches.",
        "Approfondissement du passif de la discipline (phase 2).",
        "Capacité à transmettre : créer un évènement, prendre des disciples, gérer leur initiation.",
      ],
      etapes: [
        "Scène de perfectionnement : projeter un dôme couvrant plusieurs alliés sous le feu.",
        "Scène d’apprentissage du passif (phase 2) : approfondissement en conditions difficiles.",
        "Devoir de transmission RP : créer un évènement, recruter des disciples et gérer leur Initiation.",
      ],
      spells: [
        {
          name: "Crystallum Murus",
          incantation: "« Crystallum Murus ! »",
          desc: "haute muraille de cristal qui arrête projectiles, sortilèges et passages — découpe le champ de bataille.",
        },
      ],
      validation: [
        "Atteindre 400 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont le Devoir de transmission.",
        "Passif phase 2 acquis ET Devoir de transmission mené.",
      ],
      recompenses: [
        {
          badge: { kind: "passif", text: "Passif — PHASE 2 :" },
          text: "montée en puissance du passif défensif. {{ph:À CONFIRMER : intitulé et effet de la phase 2 à définir}}",
        },
        {
          text: "**RP :** mentor reconnu ; ouverture d’un suivi annexe (persona d’instructeur défensif).",
        },
      ],
    },
    {
      id: "p5",
      index: 5,
      name: "Maître",
      xp: 500,
      objective:
        "Devenir LA référence de la défense : passif complet, formation des disciples jusqu’à la Transcendance, et création d’un spell/objet unique en fin de suivi. Palier soumis à slot.",
      competences: [
        "Autorité reconnue comme référence de la défense à Elderwood.",
        "Passif défensif à son niveau complet.",
        "Invulnérabilité temporaire à un élément magique spécifique / barrière quasi impénétrable.",
        "Création d’un spell/objet/technique défensif unique (aboutissement du suivi).",
      ],
      etapes: [
        "Scène de référence : protéger un lieu ou un groupe lors d’un évènement majeur.",
        "Scène de formation : accompagner un ou des disciples jusqu’à la Transcendance.",
        "Scène de création : concevoir et révéler son spell/objet défensif unique, en fin de suivi.",
      ],
      spells: [
        {
          name: "Registre d’élite",
          incantation: "« — »",
          desc: "maîtrise des défenses majeures et création de SON propre bouclier/objet, exclusif à ce palier.",
        },
      ],
      validation: [
        "Atteindre 500 XP cumulés ET occuper l’un des slots de Maître du domaine.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Avoir formé au moins un disciple jusqu’à la Transcendance et créé son spell/objet en fin de suivi.",
      ],
      recompenses: [
        {
          badge: { kind: "slot", text: "SLOT — accès limité :" },
          text: "palier soumis à slot (nombre variable selon le domaine). {{ph:À CONFIRMER : nombre de slots de Maître pour les Arts Défensifs à fixer}}",
        },
        {
          badge: { kind: "passif", text: "Passif COMPLET :" },
          text: "le passif défensif atteint son niveau maximal (par ex. bouclier applicable à un allié, résistance maximale).",
        },
        {
          text: "**Spell / Objet unique :** création propre au personnage, **uniquement à ce palier et en fin de suivi**. {{ph:À CONFIRMER : format d’enregistrement à définir}}",
        },
        {
          text: "**RP :** référence de la défense ; forme des disciples et protège l’école lors des grands évènements.",
        },
      ],
    },
  ],
  trame: {
    title: "« Les Brèches d’Elderwood »",
    fil: "**Fil conducteur :** l’attaque de l’Ascendance a laissé des cicatrices : vitraux brisés dans l’aile orientale, protections runiques endommagées, zones fermées. La direction Dravenholt cherche discrètement des élèves capables de //rétablir et tenir les défenses// de l’école pendant que la Forge Runique répare ce qui peut l’être. Pour un défenseur, c’est l’occasion de prouver sa valeur là où les boucliers comptent vraiment.",
    accroches: [
      "Un professeur demande au joueur de renforcer une barrière d’entraînement instable (Initiation/Révélation).",
      "Une zone fermée du château doit être temporairement sécurisée pendant une inspection ; le joueur couvre l’équipe (Ascension).",
      "Le joueur monte une petite escouade de défenseurs et forme des disciples pour tenir les points faibles du domaine (Devoir de transmission, Transcendance).",
      "Le joueur devient le référent défensif consulté par la direction lors des alertes (Maître).",
    ],
    debloque: [
      "**XP :** //une scène jouée dans ce cadre compte comme « suivi moteur de jeu » (+10), dans la limite de 30 XP/jour.//",
      "Support RP aux récompenses de protection collective et de mentorat.",
      "Situations défensives variées (brèches, escortes, sièges d’entraînement) pour éviter la répétition.",
    ],
  },
};
