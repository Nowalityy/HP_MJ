import type { Discipline } from "../types";
import { PREREQUIS_MALUS } from "../shared";

export const surcharges: Discipline = {
  "slug": "surcharges-de-flux",
  "index": 3,
  "title": "Surcharges de Flux",
  "era": "moderne",
  "loreIntro": "Pousser son Flux au-delà de ses limites : amplifier un sort, libérer une décharge d'Écho, entrer en surcharge — au prix d'un contrecoup. Une voie risquée qui joue avec l'instinct et l'émotion, là où le Flux des jeunes sorciers « se manifeste avant même d'être compris ». Elle n'appartient à aucune couleur : elle réclame un Flux naturellement puissant ou instable, et surtout un sang-froid pour ne pas se laisser submerger. **À manier avec prudence** : la surcharge fatigue et blesse celui qui en abuse.",
  "prerequis": [
    "Validation du professeur : avoir un //Flux particulièrement instable ou puissant// constaté au RP.",
    "À défaut de validation claire, ouverture possible avec malus, //sous réserve d'un encadrement MJ// vu les risques de la discipline."
  ],
  "prerequisMalus": PREREQUIS_MALUS,
  "paliers": [
    {
      "id": "p1",
      "index": 1,
      "name": "Initiation",
      "xp": 100,
      "objective": "Comprendre la théorie de la montée d'adrénaline magique et la contrôler sous supervision du MJ.",
      "competences": [
        "Théorie de la montée en puissance et du contrecoup.",
        "Montée d'adrénaline magique contrôlée sous encadrement, sans perdre le contrôle de son corps.",
        "Conscience des risques de la surcharge."
      ],
      "etapes": [
        "Étude théorique : mécanique de la surcharge, fatigue et contrecoup (scène de cours).",
        "Premier exercice supervisé : provoquer une légère montée de puissance et la contenir.",
        "Exercice de contrôle : redescendre calmement après une montée, sous l'œil du MJ."
      ],
      "spells": [
        {
          "name": "Montée contrôlée",
          "incantation": "« gestion interne »",
          "desc": "élever volontairement son Flux sans perdre le contrôle de son corps ; première marche, la plus prudente."
        }
      ],
      "validation": [
        "Atteindre 100 XP sur le suivi.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ valide la compréhension des risques et le contrôle encadré d'une montée."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Pas de passif ni de spell à ce palier."
          },
          "text": "Bases théoriques et premières montées encadrées uniquement."
        },
        {
          "text": "**RP : **reconnaissance comme apprenti de la surcharge, sous surveillance."
        }
      ]
    },
    {
      "id": "p2",
      "index": 2,
      "name": "Révélation",
      "xp": 200,
      "objective": "Amplifier en autonomie la puissance d'un sort, au prix d'une fatigue accrue.",
      "competences": [
        "Amplification temporaire de la puissance d'un sort.",
        "Gestion seul du coût en fatigue de l'amplification.",
        "Conscience du seuil à ne pas dépasser."
      ],
      "etapes": [
        "Exercice d'autonomie : amplifier seul un sort simple (scène dédiée).",
        "Mise en situation : choisir d'amplifier au bon moment malgré la fatigue (scène dédiée).",
        "Démonstration autonome supervisée de loin d'une amplification maîtrisée."
      ],
      "spells": [
        {
          "name": "Amplification",
          "incantation": "« surcharge ciblée »",
          "desc": "augmente temporairement la puissance d'un sort existant, en échange d'une fatigue accrue."
        }
      ],
      "validation": [
        "Atteindre 200 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ constate que le joueur amplifie seul un sort en gérant sa fatigue."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Toujours pas de passif ni de spell."
          },
          "text": "La Révélation valide l'autonomie sur l'amplification ; le passif commence à l'Ascension."
        },
        {
          "text": "**RP : **surchargeur autonome, capable d'amplifier ponctuellement ses sorts."
        }
      ]
    },
    {
      "id": "p3",
      "index": 3,
      "name": "Ascension",
      "xp": 300,
      "objective": "Maîtriser la décharge d'Écho en danger critique et commencer l'apprentissage du passif (phase 1).",
      "competences": [
        "Libération d'une décharge d'Écho autour de soi en situation critique.",
        "Début d'intégration du passif de la discipline (phase 1).",
        "Contrôle du déclenchement pour éviter de se blesser."
      ],
      "etapes": [
        "Scène de maîtrise technique : libérer une décharge d'Écho au bon moment.",
        "Scène de contrôle : encaisser le contrecoup sans perdre pied.",
        "Scène d'apprentissage du passif (phase 1) : première mise en œuvre encadrée."
      ],
      "spells": [
        {
          "name": "Décharge d'Écho",
          "incantation": "« libération de zone »",
          "desc": "onde dévastatrice libérée autour de soi en cas de danger critique ; puissante mais éprouvante."
        }
      ],
      "validation": [
        "Atteindre 300 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont l'apprentissage du passif (phase 1).",
        "Le MJ valide la maîtrise de la décharge et la phase 1 du passif."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "passif",
            "text": "Passif — PHASE 1 :"
          },
          "text": "première phase du passif de surcharge. {{ph:À CONFIRMER : effet exact à définir : par ex. amorce de bonus de puissance lorsque le personnage est à bout de souffle ou blessé, selon le moteur de jeu}}"
        },
        {
          "text": "**RP : **surchargeur confirmé, dangereux quand il est acculé."
        }
      ]
    },
    {
      "id": "p4",
      "index": 4,
      "name": "Transcendance",
      "xp": 400,
      "objective": "Perfectionner la canalisation de sorts au-dessus de son niveau, approfondir le passif (phase 2) et accomplir le Devoir de transmission RP.",
      "competences": [
        "Canalisation de sorts d'un niveau supérieur à son niveau d'études.",
        "Approfondissement du passif de la discipline (phase 2).",
        "Capacité à transmettre : créer un évènement, prendre des disciples, gérer leur initiation."
      ],
      "etapes": [
        "Scène de perfectionnement : réussir un sort au-dessus de son niveau grâce à la surcharge.",
        "Scène d'apprentissage du passif (phase 2) : approfondissement en conditions difficiles.",
        "Devoir de transmission RP : créer un évènement, recruter des disciples et gérer leur Initiation."
      ],
      "spells": [
        {
          "name": "Dépassement",
          "incantation": "« surcharge avancée »",
          "desc": "canaliser un sort normalement hors de portée de son niveau, en puisant dans la surcharge."
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
          "text": "montée en puissance du passif de surcharge. {{ph:À CONFIRMER : intitulé et effet de la phase 2 à définir}}"
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
      "objective": "Devenir LA référence de la surcharge : passif complet, formation des disciples jusqu'à la Transcendance, et création d'un spell/objet unique en fin de suivi. Palier soumis à slot.",
      "competences": [
        "Autorité reconnue comme référence de la surcharge à Elderwood.",
        "Passif de la discipline à son niveau complet.",
        "État de « Surcharge Pure » (puissance décuplée un court instant, suivi d'un contrecoup sévère).",
        "Création d'un spell/objet/technique unique (aboutissement du suivi)."
      ],
      "etapes": [
        "Scène de référence : entrer en Surcharge Pure lors d'un évènement majeur, et en assumer le contrecoup.",
        "Scène de formation : accompagner un ou des disciples jusqu'à la Transcendance.",
        "Scène de création : concevoir et révéler sa technique/objet unique, en fin de suivi."
      ],
      "spells": [
        {
          "name": "Surcharge Pure",
          "incantation": "« état ultime »",
          "desc": "puissance décuplée pendant un court instant, payée par un contrecoup sévère ; sommet et danger de la discipline."
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
          "text": "palier soumis à slot (nombre variable selon le domaine). {{ph:À CONFIRMER : nombre de slots de Maître pour la Surcharge à fixer}}"
        },
        {
          "badge": {
            "kind": "passif",
            "text": "Passif COMPLET :"
          },
          "text": "le passif atteint son niveau maximal (bonus de puissance maximal à bout de souffle ou blessé)."
        },
        {
          "text": "**Spell / Objet unique : **création propre au personnage (par ex. un sortilège de décharge critique qui ne fonctionne que sous un certain seuil de vie, ou une aura d'amplification d'Écho), **uniquement à ce palier et en fin de suivi**. {{ph:À CONFIRMER : format d'enregistrement à définir}}"
        },
        {
          "text": "**RP : **référence de la surcharge ; forme des disciples et intervient dans les situations désespérées."
        }
      ]
    }
  ],
  "trame": {
    "title": "« Le Contrecoup »",
    "fil": "**Fil conducteur :** la nuit de l'attaque, plusieurs élèves ont senti leur Flux s'emballer sous la peur — certains ont repoussé un danger, d'autres se sont blessés. Depuis, la surcharge fascine autant qu'elle inquiète. Un maître prudent cherche à //encadrer ceux dont le Flux déborde// avant qu'ils ne se fassent du mal, tandis que la tentation de la puissance rôde. La discipline est utile, mais chaque excès laisse une trace.",
    "accroches": [
      "Le Flux du joueur s'emballe sous l'émotion ; un professeur propose de l'encadrer (Initiation/Révélation).",
      "Acculé, le joueur libère une décharge d'Écho et doit en assumer les conséquences (Ascension).",
      "Le joueur réunit d'autres « Flux instables » et les forme à ne pas se consumer (Devoir de transmission, Transcendance).",
      "Le joueur devient la référence appelée quand seule une surcharge peut renverser la situation (Maître)."
    ],
    "debloque": [
      "**XP : **//une scène jouée dans ce cadre compte comme « suivi moteur de jeu » (+10), dans la limite de 30 XP/jour.//",
      "Support RP aux récompenses de puissance sous contrainte et de mentorat.",
      "Situations variées (Flux qui déborde, danger critique, sacrifice) pour éviter la répétition."
    ]
  }
};
