import type { Discipline } from "../types";
import { PREREQUIS_MALUS } from "../shared";

export const sorcellerie: Discipline = {
  "slug": "sorcellerie-infiltratrice-discretion",
  "index": 1,
  "title": "Sorcellerie Infiltratrice & Discrétion",
  "era": "moderne",
  "loreIntro": "L'art de ne pas être vu : étouffer ses pas, masquer sa signature d'Écho, se fondre dans l'ombre et frapper depuis le camouflage. Une voie tout en retenue, profondément liée à l'esprit du **Flux Violet (Venatrix)** — « tirer les ficelles proprement et sans bruit » — sans lui être réservée. Elle puise volontiers dans la magie d'Ombre du registre, et se pratique là où l'on n'attend personne.",
  "prerequis": [
    "Validation par un référent de la maison //Venatrix// ou autorisation MJ.",
    "Test pratique : //s'infiltrer dans la section réservée de la bibliothèque sans être repéré// — OU combler ce manque via RP (avec malus à l'ouverture)."
  ],
  "prerequisMalus": PREREQUIS_MALUS,
  "paliers": [
    {
      "id": "p1",
      "index": 1,
      "name": "Initiation",
      "xp": 100,
      "objective": "Comprendre la théorie de la discrétion magique et masquer bruit et lueur sous supervision du MJ.",
      "competences": [
        "Théorie de la discrétion : bruit, lumière, signature magique.",
        "Masquage supervisé du bruit des pas et de la lueur du catalyseur.",
        "Conscience de ce qui trahit une présence."
      ],
      "etapes": [
        "Étude théorique : ce qui révèle un sorcier (bruit, lueur, Écho) (scène de cours).",
        "Premier exercice supervisé : étouffer ses pas et atténuer la lueur de son catalyseur.",
        "Exercice d'approche : franchir une courte distance sans être remarqué, sous l'œil du MJ."
      ],
      "spells": [
        {
          "name": "Atténuation",
          "incantation": "« discrétion de base »",
          "desc": "masque le bruit des pas et la lueur du catalyseur ; le premier réflexe de l'infiltrateur."
        }
      ],
      "validation": [
        "Atteindre 100 XP sur le suivi.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ valide la compréhension et le masquage encadré du bruit et de la lueur."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Pas de passif ni de spell à ce palier."
          },
          "text": "Bases théoriques et premiers masquages encadrés uniquement."
        },
        {
          "text": "**RP : **reconnaissance comme apprenti de la discrétion."
        }
      ]
    },
    {
      "id": "p2",
      "index": 2,
      "name": "Révélation",
      "xp": 200,
      "objective": "Dissimuler en autonomie sa propre signature d'Écho pour éviter la détection magique.",
      "competences": [
        "Dissimulation autonome de sa signature d'Écho.",
        "Évitement des détections magiques simples.",
        "Gestion seul de la durée de sa discrétion."
      ],
      "etapes": [
        "Exercice d'autonomie : masquer seul sa signature d'Écho (scène dédiée).",
        "Mise en situation : passer devant un détecteur magique sans se faire repérer (scène dédiée).",
        "Infiltration autonome supervisée de loin d'un lieu surveillé."
      ],
      "spells": [
        {
          "name": "Masque d'Écho",
          "incantation": "« dissimulation »",
          "desc": "efface la signature magique du sorcier pour tromper la détection ; on ne peut pas viser ce qu'on ne perçoit pas."
        }
      ],
      "validation": [
        "Atteindre 200 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ constate que le joueur dissimule seul sa signature d'Écho."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "none",
            "text": "Toujours pas de passif ni de spell."
          },
          "text": "La Révélation valide l'autonomie sur la dissimulation ; le passif commence à l'Ascension."
        },
        {
          "text": "**RP : **infiltrateur autonome, difficile à détecter magiquement."
        }
      ]
    },
    {
      "id": "p3",
      "index": 3,
      "name": "Ascension",
      "xp": 300,
      "objective": "Maîtriser le déplacement d'ombre en ombre et l'attaque surprise, et commencer l'apprentissage du passif (phase 1).",
      "competences": [
        "Déplacement d'ombre en ombre et attaque surprise depuis le camouflage.",
        "Début d'intégration du passif de la discipline (phase 1).",
        "Gestion du timing de l'attaque depuis la discrétion."
      ],
      "etapes": [
        "Scène de maîtrise technique : se déplacer d'ombre en ombre sans être vu.",
        "Scène d'attaque surprise : frapper depuis le camouflage puis se replier.",
        "Scène d'apprentissage du passif (phase 1) : première mise en œuvre encadrée."
      ],
      "spells": [
        {
          "name": "Umbra Transitus",
          "incantation": "« Umbra Transitus ! »",
          "desc": "frappe une cible puis entraîne le lanceur derrière elle dans un passage d'ombre, pour un revers surprise."
        },
        {
          "name": "Speculum Umbrae",
          "incantation": "« Speculum Umbrae ! »",
          "desc": "double trompeurs qui brouillent la position réelle du lanceur — la discrétion en défense."
        }
      ],
      "validation": [
        "Atteindre 300 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont l'apprentissage du passif (phase 1).",
        "Le MJ valide la maîtrise du déplacement d'ombre et la phase 1 du passif."
      ],
      "recompenses": [
        {
          "badge": {
            "kind": "passif",
            "text": "Passif — PHASE 1 :"
          },
          "text": "première phase du passif d'infiltration. {{ph:À CONFIRMER : effet exact à définir : par ex. amorce de bonus au premier coup porté sur une cible, ou discrétion accrue, selon le moteur de jeu}}"
        },
        {
          "text": "**RP : **infiltrateur confirmé, redoutable en embuscade."
        }
      ]
    },
    {
      "id": "p4",
      "index": 4,
      "name": "Transcendance",
      "xp": 400,
      "objective": "Perfectionner le franchissement des protections mineures, approfondir le passif (phase 2) et accomplir le Devoir de transmission RP.",
      "competences": [
        "Traversée des boucliers de détection mineurs et des serrures enchantées.",
        "Approfondissement du passif de la discipline (phase 2).",
        "Capacité à transmettre : créer un évènement, prendre des disciples, gérer leur initiation."
      ],
      "etapes": [
        "Scène de perfectionnement : franchir une serrure enchantée ou un bouclier de détection mineur.",
        "Scène d'apprentissage du passif (phase 2) : approfondissement en conditions difficiles.",
        "Devoir de transmission RP : créer un évènement, recruter des disciples et gérer leur Initiation."
      ],
      "spells": [
        {
          "name": "Vestigium Umbrae",
          "incantation": "« Vestigium Umbrae ! »",
          "desc": "dépose une marque d'ombre servant d'ancrage à distance ; utile pour franchir puis se rappeler en lieu sûr."
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
          "text": "montée en puissance du passif d'infiltration. {{ph:À CONFIRMER : intitulé et effet de la phase 2 à définir}}"
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
      "objective": "Devenir LA référence de la discrétion : passif complet, formation des disciples jusqu'à la Transcendance, et création d'un spell/objet unique en fin de suivi. Palier soumis à slot.",
      "competences": [
        "Autorité reconnue comme référence de l'infiltration à Elderwood.",
        "Passif de la discipline à son niveau complet.",
        "Ombre vivante (devenir imperceptible même à très courte distance).",
        "Création d'un spell/objet/technique unique (aboutissement du suivi)."
      ],
      "etapes": [
        "Scène de référence : réussir une infiltration réputée impossible lors d'un évènement majeur.",
        "Scène de formation : accompagner un ou des disciples jusqu'à la Transcendance.",
        "Scène de création : concevoir et révéler sa technique/objet unique, en fin de suivi."
      ],
      "spells": [
        {
          "name": "Ombre vivante",
          "incantation": "« maîtrise majeure »",
          "desc": "devenir imperceptible même à très courte distance ; sommet de la discrétion."
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
          "text": "palier soumis à slot (nombre variable selon le domaine). {{ph:À CONFIRMER : nombre de slots de Maître pour l'Infiltration à fixer}}"
        },
        {
          "badge": {
            "kind": "passif",
            "text": "Passif COMPLET :"
          },
          "text": "le passif atteint son niveau maximal (discrétion physique et magique maximale, bonus au premier coup)."
        },
        {
          "text": "**Spell / Objet unique : **création propre au personnage (par ex. un voile d'invisibilité individuelle occupant un slot d'objet), **uniquement à ce palier et en fin de suivi**. {{ph:À CONFIRMER : format d'enregistrement — objet équipable type cape, ou sort — à définir}}"
        },
        {
          "text": "**RP : **référence de la discrétion ; forme des disciples et intervient là où nul ne doit être vu."
        }
      ]
    }
  ],
  "trame": {
    "title": "« Ce Qui Rôde dans les Murs »",
    "fil": "**Fil conducteur :** depuis l'attaque, des zones d'Elderwood sont fermées et des rôdeurs — voleurs, curieux, ou pire — profitent du désordre pour fouiller ce qui devrait rester scellé. La nouvelle direction a besoin, discrètement, de sorciers capables d'//aller voir sans être vus// : surveiller un couloir interdit, suivre une silhouette, récupérer un objet sans laisser de trace. L'ombre est devenue un poste d'observation.",
    "accroches": [
      "Le joueur est testé sur une infiltration discrète de la bibliothèque (Initiation/Révélation).",
      "Une silhouette rôde près d'une zone fermée ; le joueur doit la suivre sans se faire repérer (Ascension).",
      "Le joueur forme une petite cellule d'éclaireurs de l'ombre et prend des disciples (Devoir de transmission, Transcendance).",
      "Le joueur devient l'œil discret consulté quand il faut observer sans alerter (Maître)."
    ],
    "debloque": [
      "**XP : **//une scène jouée dans ce cadre compte comme « suivi moteur de jeu » (+10), dans la limite de 30 XP/jour.//",
      "Support RP aux récompenses de discrétion et de mentorat.",
      "Missions variées (filature, surveillance, récupération) pour éviter la répétition."
    ]
  }
};
