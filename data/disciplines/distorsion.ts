import type { Discipline } from "../types";
import { PREREQUIS_MALUS } from "../shared";

export const distorsion: Discipline = {
  "slug": "distorsion-flux-dissipation",
  "index": 2,
  "title": "Distorsion du Flux & Dissipation",
  "era": "moderne",
  "loreIntro": "Là où d'autres lancent des sorts, le distorseur agit sur la magie elle-même : il perçoit les fréquences de l'Écho, brouille les incantations adverses, dissipe les sorts en vol. Une voie subtile, très proche de l'esprit du **Flux Violet (Venatrix)** — « dévier un sortilège, reprendre le contrôle d'une situation instable » — sans lui être réservée. Elle demande une compréhension fine des fréquences, cousine de celle qu'étudie la Runomancie.",
  "prerequis": [
    "Option //Arithmancie// en 3e année et/ou //Sortilèges//.",
    "Note minimale de 80/100 à l'examen théorique sur //les fréquences de l'Écho// — OU combler ce manque via RP (avec malus à l'ouverture)."
  ],
  "prerequisMalus": PREREQUIS_MALUS,
  "paliers": [
    {
      "id": "p1",
      "index": 1,
      "name": "Initiation",
      "xp": 100,
      "objective": "Comprendre la théorie des fréquences de l'Écho et détecter/interrompre des incantations lentes sous supervision.",
      "competences": [
        "Théorie des vagues d'incantation et des fréquences de l'Écho.",
        "Détection supervisée d'un sort en cours de charge.",
        "Interruption encadrée d'une incantation à long temps de charge."
      ],
      "etapes": [
        "Étude théorique : fréquences de l'Écho, vagues d'incantation (scène de cours).",
        "Premier exercice supervisé : repérer un sort à longue charge avant qu'il ne parte.",
        "Exercice d'interruption : couper une incantation lente sous l'œil du MJ."
      ],
      "spells": [
        {
          "name": "Lecture des fréquences",
          "incantation": "« perception du Flux »",
          "desc": "percevoir les vagues d'incantation adverses pour anticiper et interrompre ; le fondement de la discipline."
        }
      ],
      "validation": [
        "Atteindre 100 XP sur le suivi.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ valide la compréhension et l'interruption encadrée d'une incantation."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Pas de passif ni de spell à ce palier."
          },
          "text": "Bases théoriques et premières interruptions encadrées uniquement."
        },
        {
          "text": "**RP : **reconnaissance comme apprenti de la distorsion."
        }
      ]
    },
    {
      "id": "p2",
      "index": 2,
      "name": "Révélation",
      "xp": 200,
      "objective": "Créer en autonomie une zone de friction rendant l'incantation instable autour de soi.",
      "competences": [
        "Création autonome d'une zone de friction magique.",
        "Perturbation de l'incantation des sorciers proches.",
        "Gestion seul de l'étendue et de la durée de la perturbation."
      ],
      "etapes": [
        "Exercice d'autonomie : générer seul une zone de friction (scène dédiée).",
        "Mise en situation : gêner l'incantation d'un adversaire proche (scène dédiée).",
        "Démonstration autonome supervisée de loin de la zone de friction."
      ],
      "spells": [
        {
          "name": "Zone de friction",
          "incantation": "« distorsion de zone »",
          "desc": "rend l'incantation instable pour les sorciers proches ; le distorseur impose son terrain."
        }
      ],
      "validation": [
        "Atteindre 200 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ constate que le joueur crée seul une zone perturbant l'incantation."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Toujours pas de passif ni de spell."
          },
          "text": "La Révélation valide l'autonomie sur la friction ; le passif commence à l'Ascension."
        },
        {
          "text": "**RP : **distorseur autonome, capable de gêner un lanceur adverse."
        }
      ]
    },
    {
      "id": "p3",
      "index": 3,
      "name": "Ascension",
      "xp": 300,
      "objective": "Maîtriser la dissipation nette d'un sort en vol et commencer l'apprentissage du passif (phase 1).",
      "competences": [
        "Dissipation d'un sortilège en vol par une contre-fréquence d'Écho.",
        "Début d'intégration du passif de la discipline (phase 1).",
        "Lecture et réponse en temps réel à un sort adverse."
      ],
      "etapes": [
        "Scène de maîtrise technique : dissiper un sort en vol par contre-fréquence.",
        "Scène de réactivité : neutraliser un sort inattendu à temps.",
        "Scène d'apprentissage du passif (phase 1) : première mise en œuvre encadrée."
      ],
      "spells": [
        {
          "name": "Contre-fréquence",
          "incantation": "« dissipation »",
          "desc": "annule un sortilège en vol en lui opposant la fréquence inverse ; cœur technique de la discipline."
        }
      ],
      "validation": [
        "Atteindre 300 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont l'apprentissage du passif (phase 1).",
        "Le MJ valide la maîtrise de la dissipation et la phase 1 du passif."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "passif",
            "text": "Passif — PHASE 1 :"
          },
          "text": "première phase du passif de distorsion. {{ph:À CONFIRMER : effet exact à définir : par ex. résistance naturelle aux perturbations magiques et enchantements d'altération, selon le moteur de jeu}}"
        },
        {
          "text": "**RP : **distorseur confirmé, capable d'annuler des sorts en vol."
        }
      ]
    },
    {
      "id": "p4",
      "index": 4,
      "name": "Transcendance",
      "xp": 400,
      "objective": "Perfectionner l'absorption d'un sort pour recharger son Flux, approfondir le passif (phase 2) et accomplir le Devoir de transmission RP.",
      "competences": [
        "Absorption d'un sortilège adverse pour recharger temporairement son propre Flux.",
        "Approfondissement du passif de la discipline (phase 2).",
        "Capacité à transmettre : créer un évènement, prendre des disciples, gérer leur initiation."
      ],
      "etapes": [
        "Scène de perfectionnement : absorber un sort adverse et en réutiliser l'énergie.",
        "Scène d'apprentissage du passif (phase 2) : approfondissement en conditions difficiles.",
        "Devoir de transmission RP : créer un évènement, recruter des disciples et gérer leur Initiation."
      ],
      "spells": [
        {
          "name": "Vampirisme d'Écho",
          "incantation": "« absorption de Flux »",
          "desc": "capte l'énergie d'un sort adverse pour recharger son propre Flux ; la distorsion devient ressource."
        }
      ],
      "validation": [
        "Atteindre 400 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont le Devoir de transmission.",
        "Passif phase 2 acquis ET Devoir de transmission mené."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "passif",
            "text": "Passif — PHASE 2 :"
          },
          "text": "montée en puissance du passif de distorsion. {{ph:À CONFIRMER : intitulé et effet de la phase 2 à définir}}"
        },
        {
          "text": "**RP : **mentor reconnu ; ouverture d'un suivi annexe (persona d'instructeur)."
        }
      ]
    },
    {
      "id": "p5",
      "index": 5,
      "name": "Maître",
      "xp": 500,
      "objective": "Devenir LA référence de la distorsion : passif complet, formation des disciples jusqu'à la Transcendance, et création d'un spell/objet unique en fin de suivi. Palier soumis à slot.",
      "competences": [
        "Autorité reconnue comme référence de la distorsion à Elderwood.",
        "Passif de la discipline à son niveau complet.",
        "Sphère de silence magique (zone où aucun Flux ne peut être façonné, durée limitée).",
        "Création d'un spell/objet/technique unique (aboutissement du suivi)."
      ],
      "etapes": [
        "Scène de référence : imposer une sphère de silence lors d'un évènement majeur.",
        "Scène de formation : accompagner un ou des disciples jusqu'à la Transcendance.",
        "Scène de création : concevoir et révéler sa technique/objet unique, en fin de suivi."
      ],
      "spells": [
        {
          "name": "Sphère de silence",
          "incantation": "« maîtrise majeure »",
          "desc": "zone où aucun Flux ne peut être façonné pendant un temps limité ; aboutissement de la discipline."
        }
      ],
      "validation": [
        "Atteindre 500 XP cumulés ET occuper l'un des slots de Maître du domaine.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Avoir formé au moins un disciple jusqu'à la Transcendance et créé son spell/objet en fin de suivi."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "slot",
            "text": "SLOT — accès limité :"
          },
          "text": "palier soumis à slot (nombre variable selon le domaine). {{ph:À CONFIRMER : nombre de slots de Maître pour la Distorsion à fixer}}"
        },
        {
          "badge": {
            "kind": "passif",
            "text": "Passif COMPLET :"
          },
          "text": "le passif atteint son niveau maximal (résistance maximale aux altérations)."
        },
        {
          "text": "**Spell / Objet unique : **création propre au personnage (par ex. une onde de rupture, ou un contre-sortilège éclair), **uniquement à ce palier et en fin de suivi**. {{ph:À CONFIRMER : certaines créations très puissantes pourraient être limitées à un seul exemplaire sur le serveur — format et rareté à définir}}"
        },
        {
          "text": "**RP : **référence de la distorsion ; forme des disciples et intervient sur les situations magiques instables."
        }
      ]
    }
  ],
  "trame": {
    "title": "« Les Fréquences Brisées »",
    "fil": "**Fil conducteur :** depuis l'attaque, le Voile d'Elderwood est instable et des Échoïdes — souvenirs figés dans des runes instables — se réveillent dans les zones fermées. Là où le Flux devient imprévisible, on a besoin de sorciers capables de //lire, calmer ou dissiper les fréquences//. La Forge Runique elle-même sollicite discrètement ceux qui comprennent l'Écho pour stabiliser ce qui menace de déborder.",
    "accroches": [
      "Le joueur apprend à repérer une incantation instable lors d'un exercice encadré (Initiation/Révélation).",
      "Un Échoïde perturbe une salle ; le joueur doit dissiper ou contenir la fréquence (Ascension).",
      "Le joueur forme un petit groupe de « stabilisateurs » et prend des disciples (Devoir de transmission, Transcendance).",
      "Le joueur devient le référent consulté quand le Flux d'un lieu déraille (Maître)."
    ],
    "debloque": [
      "**XP : **//une scène jouée dans ce cadre compte comme « suivi moteur de jeu » (+10), dans la limite de 30 XP/jour.//",
      "Support RP aux récompenses de résistance aux altérations et de mentorat.",
      "Situations variées (Échoïde, incantation instable, Voile fragilisé) pour éviter la répétition."
    ]
  }
};
