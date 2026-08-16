import type { Discipline } from "../types";
import { PREREQUIS_MALUS } from "../shared";

export const magieCombinee: Discipline = {
  "slug": "magie-combinee",
  "index": 2,
  "title": "Magie Combinée",
  "era": "moderne",
  "loreIntro": "La seule discipline foncièrement **collective** : elle ne prend toute sa puissance qu'à plusieurs. Synchroniser son incantation, relayer le Flux d'un allié, combiner des effets, jusqu'aux sortilèges d'escouade. Elle incarne l'esprit **Flux Vert (Brumval)** — « ce qu'on construit ensemble vaut plus que ce qu'on obtient seul » — mais s'appuie sur toutes les couleurs, puisque c'est justement leur complémentarité qui fait la force du groupe. **Spécificité de suivi** : comme la discipline est collective, plusieurs étapes se jouent nécessairement à deux ou plus, et le passif profite au groupe autant qu'au personnage.",
  "prerequis": [
    "Faire partie d'un //groupe ou duo officiel de RP de combat//.",
    "Réussir le test de fusion de Flux : //lancer deux sorts différents qui se combinent sans exploser// — OU combler ce manque via RP (avec malus à l'ouverture)."
  ],
  "prerequisMalus": PREREQUIS_MALUS,
  "paliers": [
    {
      "id": "p1",
      "index": 1,
      "name": "Initiation",
      "xp": 100,
      "objective": "Comprendre la théorie de la magie combinée et synchroniser son rythme d'incantation avec un partenaire, sous supervision du MJ.",
      "competences": [
        "Théorie de la combinaison et de la synchronisation du Flux.",
        "Synchronisation supervisée du rythme d'incantation avec un partenaire.",
        "Conscience des risques d'une combinaison ratée."
      ],
      "etapes": [
        "Étude théorique : comment deux Flux se combinent sans se rejeter (scène de cours).",
        "Premier exercice supervisé (à 2) : caler son incantation sur celle d'un partenaire.",
        "Exercice de synchronisation : lancer deux sorts simples au même instant, sous l'œil du MJ."
      ],
      "spells": [
        {
          "name": "Synchronisation",
          "incantation": "« combinaison de base »",
          "desc": "caler le rythme de son incantation sur celui d'un partenaire ; la fondation de toute magie combinée."
        }
      ],
      "validation": [
        "Atteindre 100 XP sur le suivi.",
        "Chaque étape a donné lieu à une scène jouée (les exercices de synchronisation impliquent au moins un partenaire).",
        "Le MJ valide la compréhension et la synchronisation encadrée."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Pas de passif ni de spell à ce palier."
          },
          "text": "Bases théoriques et première synchronisation encadrée uniquement."
        },
        {
          "text": "**RP : **reconnaissance comme apprenti de la magie combinée, intégré à un duo/groupe."
        }
      ]
    },
    {
      "id": "p2",
      "index": 2,
      "name": "Révélation",
      "xp": 200,
      "objective": "Réaliser en autonomie un relais magique : alimenter en Flux le sortilège lancé par un allié.",
      "competences": [
        "Relais magique autonome (un allié alimente le sort d'un autre).",
        "Gestion seul de sa part dans une action à deux.",
        "Compréhension des rôles au sein d'une combinaison."
      ],
      "etapes": [
        "Exercice d'autonomie (à 2) : alimenter en Flux le sort d'un allié sans le déstabiliser (scène dédiée).",
        "Mise en situation : tenir son rôle de relais dans un échange réel (scène dédiée).",
        "Démonstration autonome supervisée de loin d'un relais réussi."
      ],
      "spells": [
        {
          "name": "Relais de Flux",
          "incantation": "« alimentation partagée »",
          "desc": "un sorcier fournit le Flux qui renforce le sortilège lancé par un autre ; la combinaison à deux voix."
        }
      ],
      "validation": [
        "Atteindre 200 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée (le relais implique un allié).",
        "Le MJ constate que le joueur tient seul son rôle dans un relais magique."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Toujours pas de passif ni de spell."
          },
          "text": "La Révélation valide l'autonomie sur le relais ; le passif commence à l'Ascension."
        },
        {
          "text": "**RP : **combinateur autonome, pilier fiable d'un duo."
        }
      ]
    },
    {
      "id": "p3",
      "index": 3,
      "name": "Ascension",
      "xp": 300,
      "objective": "Maîtriser la combinaison d'effets et commencer l'apprentissage du passif de synergie (phase 1).",
      "competences": [
        "Combinaison d'effets (ex. vent + feu, ou bouclier Bleu + renvoi Violet).",
        "Début d'intégration du passif de synergie (phase 1) — un passif qui profite au groupe.",
        "Coordination fine de deux intentions vers un effet unique."
      ],
      "etapes": [
        "Scène de maîtrise technique (à 2+) : fusionner deux sorts en un effet combiné.",
        "Scène de coordination : réussir une combinaison sous la pression d'un adversaire.",
        "Scène d'apprentissage du passif de synergie (phase 1) : première mise en œuvre encadrée."
      ],
      "spells": [
        {
          "name": "Combinaison d'effets",
          "incantation": "« fusion de sorts »",
          "desc": "deux sorts se marient en un effet nouveau (vent + feu, bouclier + renvoi) ; le cœur créatif de la discipline."
        }
      ],
      "validation": [
        "Atteindre 300 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont l'apprentissage du passif (phase 1).",
        "Le MJ valide la maîtrise de la combinaison d'effets et la phase 1 du passif de synergie."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "passif",
            "text": "Passif de synergie — PHASE 1 :"
          },
          "text": "première phase d'un passif qui bénéficie au groupe. {{ph:À CONFIRMER : effet exact à définir : par ex. amorce de bonus quand le personnage agit en coordination avec un allié, selon le moteur de jeu — préciser si l'effet touche le personnage seul ou aussi ses alliés}}"
        },
        {
          "text": "**RP : **combinateur confirmé, capable de fusionner des effets en duo."
        }
      ]
    },
    {
      "id": "p4",
      "index": 4,
      "name": "Transcendance",
      "xp": 400,
      "objective": "Perfectionner le lien d'Écho (partage au sein de l'escouade), approfondir le passif de synergie (phase 2) et accomplir le Devoir de transmission RP.",
      "competences": [
        "Lien d'Écho : partage de la réserve de fatigue et de la perception avec son escouade.",
        "Approfondissement du passif de synergie (phase 2).",
        "Capacité à transmettre : créer un évènement, prendre des disciples, gérer leur initiation."
      ],
      "etapes": [
        "Scène de perfectionnement (en groupe) : établir un lien d'Écho partageant fatigue et perception.",
        "Scène d'apprentissage du passif (phase 2) : approfondissement en conditions difficiles.",
        "Devoir de transmission RP : créer un évènement, recruter des disciples et gérer leur Initiation."
      ],
      "spells": [
        {
          "name": "Lien d'Écho",
          "incantation": "« partage d'escouade »",
          "desc": "relie les membres d'une escouade : fatigue et perception deviennent communes ; la combinaison devient un organisme."
        }
      ],
      "validation": [
        "Atteindre 400 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont le Devoir de transmission.",
        "Passif de synergie phase 2 acquis ET Devoir de transmission mené."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "passif",
            "text": "Passif de synergie — PHASE 2 :"
          },
          "text": "montée en puissance du passif de groupe. {{ph:À CONFIRMER : intitulé et effet de la phase 2 à définir}}"
        },
        {
          "text": "**RP : **mentor reconnu ; ouverture d'un suivi annexe (persona d'instructeur de combat combiné)."
        }
      ]
    },
    {
      "id": "p5",
      "index": 5,
      "name": "Maître",
      "xp": 500,
      "objective": "Devenir LA référence de la magie combinée : passif de synergie complet, formation des disciples jusqu'à la Transcendance, et création d'un sortilège d'escouade unique en fin de suivi. Palier soumis à slot.",
      "competences": [
        "Autorité reconnue comme référence de la magie combinée à Elderwood.",
        "Passif de synergie à son niveau complet.",
        "Capacité à orchestrer un sortilège d'escouade (attaque ou défense dévastatrice nécessitant plusieurs sorciers synchronisés).",
        "Création d'un sortilège d'escouade unique (aboutissement du suivi)."
      ],
      "etapes": [
        "Scène de référence (en groupe) : mener un sortilège d'escouade lors d'un évènement majeur.",
        "Scène de formation : accompagner un ou des disciples jusqu'à la Transcendance.",
        "Scène de création : concevoir et révéler son sortilège d'escouade unique, en fin de suivi."
      ],
      "spells": [
        {
          "name": "Sortilège d'escouade",
          "incantation": "« orchestration collective »",
          "desc": "une attaque ou défense dévastatrice qui exige plusieurs sorciers parfaitement synchronisés ; sommet de la discipline."
        }
      ],
      "validation": [
        "Atteindre 500 XP cumulés ET occuper l'un des slots de Maître du domaine.",
        "Chaque étape a donné lieu à une scène jouée (le sortilège d'escouade implique plusieurs joueurs).",
        "Avoir formé au moins un disciple jusqu'à la Transcendance et créé son sortilège d'escouade en fin de suivi."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "slot",
            "text": "SLOT — accès limité :"
          },
          "text": "palier soumis à slot (nombre variable selon le domaine). {{ph:À CONFIRMER : nombre de slots de Maître pour la Magie Combinée à fixer}}"
        },
        {
          "badge": {
            "kind": "passif",
            "text": "Passif de synergie COMPLET :"
          },
          "text": "le passif de groupe atteint son niveau maximal."
        },
        {
          "text": "**Sortilège d'escouade unique : **création propre au personnage, nécessitant plusieurs lanceurs synchronisés, **uniquement à ce palier et en fin de suivi**. {{ph:À CONFIRMER : format d'enregistrement d'un sort collectif — combien de lanceurs, comment il s'active, s'il occupe un slot serveur — à définir}}"
        },
        {
          "text": "**RP : **référence de la magie combinée ; forme des disciples et orchestre les grandes actions de groupe."
        }
      ]
    }
  ],
  "trame": {
    "title": "« Ceux qui Tiennent Ensemble »",
    "fil": "**Fil conducteur :** la nuit de l'attaque, ceux qui ont survécu sont souvent ceux qui se sont serrés les coudes. Depuis, l'idée fait son chemin : face à une menace organisée comme l'Ascendance, la magie solitaire ne suffit plus. Des élèves cherchent à //apprendre à combattre en escouade//, et un maître y voit l'avenir de la défense d'Elderwood — encore faut-il apprendre à faire confiance et à synchroniser des Flux qui, seuls, tireraient chacun dans leur sens.",
    "accroches": [
      "Le duo/groupe du joueur est repéré et invité à s'entraîner à la magie combinée (Initiation/Révélation).",
      "Une menace ne peut être repoussée qu'en combinant plusieurs sorts au bon moment (Ascension).",
      "Le joueur fonde une escouade d'entraînement et forme des disciples à la synchronisation (Devoir de transmission, Transcendance).",
      "Le joueur devient le chef d'escouade appelé quand une action groupée est la seule issue (Maître)."
    ],
    "debloque": [
      "**XP : **//une scène jouée dans ce cadre compte comme « suivi moteur de jeu » (+10), dans la limite de 30 XP/jour ; les scènes de groupe atteignent facilement le plafond.//",
      "Support RP aux récompenses de synergie et de mentorat.",
      "Configurations de groupe variées (duo, trio, escouade) et menaces différentes pour éviter la répétition."
    ]
  }
};
