import type { Discipline } from "../types";
import { PREREQUIS_MALUS } from "../shared";

export const canalisation: Discipline = {
  "slug": "canalisation-sans-catalyseur",
  "index": 1,
  "title": "Canalisation Sans Catalyseur",
  "era": "moderne",
  "loreIntro": "Canaliser le Flux à mains nues, sans passer par une baguette ou un catalyseur : une voie exigeante qui touche au cœur même de ce qu'est la magie. Le lore le rappelle — le **catalyseur ne crée pas la magie**, il ne fait que guider le Flux avec plus de stabilité et réduire les pertes. S'en passer, c'est accepter des pertes d'énergie et une difficulté accrue, mais gagner une liberté totale. La discipline n'est liée à aucune couleur en particulier : elle demande surtout une Résonance claire et une volonté peu commune.",
  "prerequis": [
    "Être en 3e année avec une mention //« Excellente Résonance »// validée par le professeur de Magie.",
    "Avoir réussi l'épreuve de volonté : //produire une étincelle de Flux constante pendant 1 minute sans baguette// — OU combler ce manque via RP (avec malus à l'ouverture)."
  ],
  "prerequisMalus": PREREQUIS_MALUS,
  "paliers": [
    {
      "id": "p1",
      "index": 1,
      "name": "Initiation",
      "xp": 100,
      "objective": "Comprendre la théorie de la canalisation sans catalyseur et produire ses premières impulsions sous supervision du MJ.",
      "competences": [
        "Théorie de la canalisation directe du Flux par le corps.",
        "Production supervisée de petites impulsions de Flux par la paume.",
        "Compréhension des pertes d'énergie liées à l'absence de catalyseur."
      ],
      "etapes": [
        "Étude théorique : rôle du catalyseur, ce que signifie s'en passer (scène de cours).",
        "Premier exercice supervisé : projeter une petite impulsion repoussante par la paume.",
        "Exercice de constance : maintenir une étincelle de Flux quelques secondes sous l'œil du MJ."
      ],
      "spells": [
        {
          "name": "Magie d'usage à mains nues",
          "incantation": "« sans incantation fixe »",
          "desc": "petites impulsions et effets repoussants produits sans catalyseur ; la base concrète de la discipline."
        }
      ],
      "validation": [
        "Atteindre 100 XP sur le suivi.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ valide la compréhension théorique et la production encadrée d'une impulsion."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Pas de passif ni de spell à ce palier."
          },
          "text": "Bases théoriques et premières impulsions encadrées uniquement."
        },
        {
          "text": "**RP : **reconnaissance comme apprenti de la canalisation directe."
        }
      ]
    },
    {
      "id": "p2",
      "index": 2,
      "name": "Révélation",
      "xp": 200,
      "objective": "Canaliser en autonomie des sorts simples d'utilité sans catalyseur.",
      "competences": [
        "Canalisation autonome de sorts simples d'utilité (lumière, petite force d'attraction).",
        "Gestion seul de la stabilité du Flux sans catalyseur.",
        "Contrôle des pertes d'énergie sur des effets basiques."
      ],
      "etapes": [
        "Exercice d'autonomie : produire seul une source de lumière à mains nues (scène dédiée).",
        "Mise en situation : exercer une petite force d'attraction sur un objet (scène dédiée).",
        "Démonstration autonome supervisée de loin d'un sort d'utilité."
      ],
      "spells": [
        {
          "name": "Lunea",
          "incantation": "« Lunea ! »",
          "desc": "lumière magique, ici canalisée sans catalyseur — un premier sort d'utilité à mains nues."
        },
        {
          "name": "Rappelum",
          "incantation": "« Rappelum ! »",
          "desc": "attraction d'un objet à distance, exercée par la seule main du sorcier."
        }
      ],
      "validation": [
        "Atteindre 200 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ constate que le joueur canalise seul des sorts simples sans catalyseur."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Toujours pas de passif ni de spell."
          },
          "text": "La Révélation valide l'autonomie sur les sorts simples ; le passif commence à l'Ascension."
        },
        {
          "text": "**RP : **canalisateur autonome sur les effets d'utilité."
        }
      ]
    },
    {
      "id": "p3",
      "index": 3,
      "name": "Ascension",
      "xp": 300,
      "objective": "Maîtriser le combat au corps-à-corps magique et commencer l'apprentissage du passif (phase 1).",
      "competences": [
        "Renforcement des poings et pieds par le Flux (corps-à-corps magique).",
        "Début d'intégration du passif de la discipline (phase 1).",
        "Gestion du Flux en mouvement, au contact."
      ],
      "etapes": [
        "Scène de maîtrise technique : renforcer ses coups par le Flux dans un affrontement rapproché.",
        "Scène de contrôle : tenir la canalisation au corps-à-corps sans se disperser.",
        "Scène d'apprentissage du passif (phase 1) : première mise en œuvre encadrée."
      ],
      "spells": [
        {
          "name": "Renforcement du corps",
          "incantation": "« canalisation interne »",
          "desc": "le Flux renforce poings et pieds ; le combat rapproché devient une arme, sans catalyseur."
        }
      ],
      "validation": [
        "Atteindre 300 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont l'apprentissage du passif (phase 1).",
        "Le MJ valide la maîtrise du corps-à-corps magique et la phase 1 du passif."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "passif",
            "text": "Passif — PHASE 1 :"
          },
          "text": "première phase du passif de canalisation. {{ph:À CONFIRMER : effet exact à définir : par ex. amorce d'anti-désarmement ou de résistance de la baguette, selon le moteur de jeu}}"
        },
        {
          "text": "**RP : **canalisateur confirmé, redoutable même au contact."
        }
      ]
    },
    {
      "id": "p4",
      "index": 4,
      "name": "Transcendance",
      "xp": 400,
      "objective": "Perfectionner les réflexes défensifs à mains nues, approfondir le passif (phase 2) et accomplir le Devoir de transmission RP.",
      "competences": [
        "Lancer de sortilèges défensifs d'urgence à mains nues en cas de désarmement.",
        "Approfondissement du passif de la discipline (phase 2).",
        "Capacité à transmettre : créer un évènement, prendre des disciples, gérer leur initiation."
      ],
      "etapes": [
        "Scène de perfectionnement : répondre à un désarmement par un sort défensif à mains nues.",
        "Scène d'apprentissage du passif (phase 2) : approfondissement en conditions difficiles.",
        "Devoir de transmission RP : créer un évènement, recruter des disciples et gérer leur Initiation."
      ],
      "spells": [
        {
          "name": "Vardum",
          "incantation": "« Vardum ! »",
          "desc": "bouclier sphérique ici levé sans catalyseur, en réflexe d'urgence après un désarmement."
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
          "text": "montée en puissance du passif de canalisation. {{ph:À CONFIRMER : intitulé et effet de la phase 2 à définir}}"
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
      "objective": "Devenir LA référence de la canalisation directe : passif complet, formation des disciples jusqu'à la Transcendance, et création d'un spell/objet unique en fin de suivi. Palier soumis à slot.",
      "competences": [
        "Autorité reconnue comme référence de la canalisation sans catalyseur.",
        "Passif de la discipline à son niveau complet.",
        "Maîtrise totale du double-canal (baguette dans une main, magie brute dans l'autre).",
        "Création d'un spell/objet/technique unique (aboutissement du suivi)."
      ],
      "etapes": [
        "Scène de référence : démontrer le double-canal lors d'un évènement majeur.",
        "Scène de formation : accompagner un ou des disciples jusqu'à la Transcendance.",
        "Scène de création : concevoir et révéler sa technique/objet unique, en fin de suivi."
      ],
      "spells": [
        {
          "name": "Double-canal",
          "incantation": "« maîtrise avancée »",
          "desc": "gérer simultanément un catalyseur d'une main et le Flux brut de l'autre ; sommet de la discipline et base de la création finale."
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
          "text": "palier soumis à slot (nombre variable selon le domaine). {{ph:À CONFIRMER : nombre de slots de Maître pour la Canalisation à fixer}}"
        },
        {
          "badge": {
            "kind": "passif",
            "text": "Passif COMPLET :"
          },
          "text": "le passif atteint son niveau maximal (par ex. anti-désarmement complet, baguette très résistante mais restreinte en très basse vie)."
        },
        {
          "text": "**Spell / Objet unique : **création propre au personnage (par ex. un « reparo » qui restaure la durabilité de la baguette), **uniquement à ce palier et en fin de suivi**. {{ph:À CONFIRMER : format d'enregistrement à définir}}"
        },
        {
          "text": "**RP : **référence de la canalisation directe ; forme des disciples et intervient là où les catalyseurs font défaut."
        }
      ]
    }
  ],
  "trame": {
    "title": "« La Main Nue »",
    "fil": "**Fil conducteur :** après l'attaque, des catalyseurs ont été brisés, confisqués ou perdus, et l'Atelier des Catalyseurs peine à suivre les réparations. Savoir se battre //sans baguette// n'est soudain plus une excentricité de puriste mais un atout concret. Un professeur discret rassemble quelques élèves prêts à explorer cette voie exigeante — certains y voient une survie, d'autres une quête presque spirituelle du Flux originel.",
    "accroches": [
      "Le joueur est repéré pour sa Résonance et invité à tenter la canalisation directe (Initiation/Révélation).",
      "Privé de sa baguette lors d'un incident, le joueur doit se débrouiller à mains nues (Ascension).",
      "Le joueur ouvre un cercle d'entraînement sans catalyseur et forme des disciples (Devoir de transmission, Transcendance).",
      "Le joueur devient la référence consultée quand un catalyseur manque ou lâche (Maître)."
    ],
    "debloque": [
      "**XP : **//une scène jouée dans ce cadre compte comme « suivi moteur de jeu » (+10), dans la limite de 30 XP/jour.//",
      "Support RP aux récompenses d'anti-désarmement et de mentorat.",
      "Situations variées (désarmement, catalyseur brisé, défi de puriste) pour éviter la répétition."
    ]
  }
};
