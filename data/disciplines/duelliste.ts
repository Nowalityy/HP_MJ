import type { Discipline } from "../types";
import { PREREQUIS_MALUS } from "../shared";

export const duelliste: Discipline = {
  slug: "duelliste-de-renom",
  index: 1,
  title: "Duelliste de Renom",
  era: "moderne",
  loreIntro:
    "Le Duelliste de Renom incarne l’art du combat magique direct. La discipline résonne particulièrement avec le **Flux Bleu (Aerwyn)** — courage, action, intervention — sans lui être réservée : un Résonant de toute maison peut l’emprunter, mais devra composer avec sa propre couleur de Flux. Le duel est un pilier de la vie d’Elderwood ; chez Aerwyn, les //Joutes d’Honneur// sont le seul événement où le duel magique est non seulement autorisé mais célébré (trois passes, sortilèges non létaux, arbitre obligatoire).",
  prerequis: [
    "Avoir validé les cours de Sortilèges de 1re, 2e et 3e année.",
    "Avoir obtenu la note minimale de 80/100 à l’examen de duel de mi-troisième année.",
    "Avoir remporté au moins 3 duels officiels ou d’entraînement supervisés **— OU** combler ce manque via RP dans le cadre du suivi.",
  ],
  prerequisMalus: PREREQUIS_MALUS,
  paliers: [
    {
      id: "p1",
      index: 1,
      name: "Initiation",
      xp: 100,
      objective:
        "Acquérir les bases théoriques du duel et les mettre en pratique sous la supervision directe du MJ.",
      competences: [
        "Compréhension théorique des gardes, distances et rythmes de duel.",
        "Premiers gestes techniques exécutés sous encadrement.",
        "Connaissance des sorts de base du duelliste.",
      ],
      etapes: [
        "Étude théorique : gardes, distance, tempo (scène de cours / lecture encadrée).",
        "Premier exercice supervisé : adopter une garde et lancer un sort de base devant le MJ.",
        "Assaut d’entraînement encadré : enchaîner deux sorts simples sous l’œil du MJ.",
      ],
      spells: [
        {
          name: "Disarmae",
          incantation: "« Disarmae ! »",
          desc: "impulsion qui arrache à la cible sa capacité à combattre et la repousse — le désarmement, geste fondateur du duelliste.",
        },
        {
          name: "Vardum",
          incantation: "« Vardum ! »",
          desc: "protection sphérique qui absorbe les agressions extérieures ; la première défense à connaître en garde.",
        },
      ],
      validation: [
        "Atteindre 100 XP sur le suivi.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ valide la compréhension des bases et l’exécution encadrée.",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Un instructeur (personnage MJ) fait réviser les gardes puis demande un sort de base ; le joueur applique ce qu’il vient d’apprendre.",
        },
        {
          label: "Exemple 2 —",
          text: "Duel d’entraînement à très faible enjeu où l’important est de tenir sa garde, pas de gagner.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "Le joueur confond les gardes ou casse son enchaînement ; l’instructeur reprend la base — le palier attend.",
        },
        {
          label: "Exemple 2 —",
          text: "La théorie n’est pas assimilée, le joueur ne sait pas expliquer à quoi sert un désarmement.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "none", text: "Pas de passif ni de spell à ce palier." },
          text: "L’Initiation pose uniquement les bases théoriques et les premiers gestes encadrés.",
        },
        {
          text: "**RP :** reconnaissance comme apprenti duelliste, accès aux entraînements supervisés.",
        },
      ],
    },
    {
      id: "p2",
      index: 2,
      name: "Révélation",
      xp: 200,
      objective:
        "Commencer à agir en autonomie en appliquant les bases théoriques acquises.",
      competences: [
        "Application autonome des gardes et enchaînements de l’Initiation.",
        "Gestion seul d’un échange de duel simple, du début à la fin.",
        "Premières feintes et lecture basique des intentions adverses.",
      ],
      etapes: [
        "Exercice d’autonomie : mener seul un enchaînement complet, MJ en observation (scène dédiée).",
        "Mise en situation : appliquer une feinte pour placer un sort (scène dédiée).",
        "Duel autonome supervisé de loin : démontrer que les bases sont acquises sans guidage.",
      ],
      spells: [
        {
          name: "Commotio",
          incantation: "« Commotio ! »",
          desc: "éclair rouge qui frappe le corps et sidère l’esprit ; conclut un échange mené en autonomie.",
        },
        {
          name: "Avestra",
          incantation: "« Avestra ! »",
          desc: "oiseaux de lumière qui désorientent brièvement l’adversaire — bon support de feinte.",
        },
      ],
      validation: [
        "Atteindre 200 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée.",
        "Le MJ constate que le joueur applique les bases seul, sans guidage.",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Premier duel où le joueur gère seul son échange et place une feinte crédible.",
        },
        {
          label: "Exemple 2 —",
          text: "Face à plus fort, le joueur perd mais démontre qu’il applique ses bases en autonomie.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "Privé de l’instructeur, le joueur se fige ou improvise mal — l’autonomie n’est pas là.",
        },
        {
          label: "Exemple 2 —",
          text: "La feinte est trop lisible et l’adversaire la punit.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "none", text: "Toujours pas de passif ni de spell." },
          text: "La Révélation valide l’autonomie sur les bases ; le passif commence à l’Ascension.",
        },
        {
          text: "**RP :** duelliste autonome, autorisé à s’entraîner sans supervision constante.",
        },
      ],
    },
    {
      id: "p3",
      index: 3,
      name: "Ascension",
      xp: 300,
      objective:
        "Maîtriser les techniques de duel et commencer l’apprentissage du passif (phase 1).",
      competences: [
        "Maîtrise des techniques : incantation sous pression, esquive combinée au lancer.",
        "Début d’intégration du passif de la discipline (phase 1).",
        "Capacité à enchaîner et adapter ses sorts face à un adversaire réactif.",
      ],
      etapes: [
        "Scène de maîtrise technique : incanter sous contrainte (temps limité, distractions).",
        "Scène de combinaison : esquiver physiquement tout en lançant un sort.",
        "Scène d’apprentissage du passif (phase 1) : première mise en œuvre encadrée.",
      ],
      spells: [
        {
          name: "Aquarys",
          incantation: "« Aquarys ! »",
          desc: "vague d’eau au ras du sol qui traverse et étourdit — crée l’ouverture sous pression.",
        },
        {
          name: "Confusor",
          incantation: "« Confusor ! »",
          desc: "trouble les repères de la cible et ralentit ses mouvements ; désamorce un assaut.",
        },
      ],
      validation: [
        "Atteindre 300 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont l’apprentissage du passif (phase 1).",
        "Le MJ valide la maîtrise technique et l’acquisition de la phase 1 du passif.",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Exercice chaotique (plusieurs assaillants, terrain instable) où le joueur garde son sang-froid.",
        },
        {
          label: "Exemple 2 —",
          text: "Première activation réussie du passif en situation.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "La pression prend le dessus, le Flux se dérobe et le sort avorte ou part de travers.",
        },
        {
          label: "Exemple 2 —",
          text: "Le passif mal contrôlé ne se déclenche pas ; la phase 1 n’est pas validée.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "passif", text: "Passif — PHASE 1 :" },
          text: "première phase du passif du duelliste. {{ph:À CONFIRMER : effet exact à définir : par ex. amorce de récupération d’esquive ou légère réduction du temps entre deux sorts, selon le moteur de jeu}}",
        },
        {
          text: "**RP :** duelliste confirmé, capable de tenir un vrai combat technique.",
        },
      ],
    },
    {
      id: "p4",
      index: 4,
      name: "Transcendance",
      xp: 400,
      objective:
        "Perfectionner ses techniques, approfondir le passif (phase 2) et accomplir le Devoir de transmission RP.",
      competences: [
        "Perfectionnement général des techniques (théorique et pratique).",
        "Approfondissement du passif de la discipline (phase 2).",
        "Capacité à transmettre : créer un évènement, prendre des disciples, gérer leur initiation.",
      ],
      etapes: [
        "Scène de perfectionnement technique : maîtrise avancée face à un défi exigeant.",
        "Scène d’apprentissage du passif (phase 2) : approfondissement en conditions difficiles.",
        "Devoir de transmission RP : créer un évènement, recruter des disciples et gérer leur Initiation.",
      ],
      spells: [
        {
          name: "Briques possibles",
          incantation: "« au choix du joueur »",
          desc: "le perfectionnement peut s’appuyer sur des sorts avancés (Fulminis, Ignifluxis, Sphaerix) ; la création d’un sort propre reste réservée au Maître.",
        },
      ],
      validation: [
        "Atteindre 400 XP cumulés.",
        "Chaque étape a donné lieu à une scène jouée, dont le Devoir de transmission.",
        "Passif phase 2 acquis ET Devoir de transmission mené (évènement + disciple(s) initié(s)).",
      ],
      reussites: [
        {
          label: "Exemple 1 —",
          text: "Le joueur organise un tournoi ou une session ouverte, recrute des disciples et encadre leur première initiation.",
        },
        {
          label: "Exemple 2 —",
          text: "Démonstration d’une technique perfectionnée dépassant la simple maîtrise.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "L’évènement de transmission tourne court — le Devoir n’est pas rempli.",
        },
        {
          label: "Exemple 2 —",
          text: "Sous la difficulté accrue, le passif phase 2 reste instable.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "passif", text: "Passif — PHASE 2 :" },
          text: "montée en puissance du passif obtenu en phase 1. {{ph:À CONFIRMER : intitulé et effet de la phase 2 à définir}}",
        },
        {
          text: "**RP :** mentor reconnu — disciples et évènement à son actif ; ouverture d’un suivi annexe (persona d’instructeur).",
        },
      ],
    },
    {
      id: "p5",
      index: 5,
      name: "Maître",
      xp: 500,
      objective:
        "Devenir LA référence du domaine : passif complet, formation des disciples jusqu’à la Transcendance, et création d’un spell/objet unique en fin de suivi. Palier soumis à slot.",
      competences: [
        "Autorité reconnue comme référence du duel à Elderwood.",
        "Passif de la discipline à son niveau complet.",
        "Capacité à former des disciples jusqu’au palier Transcendance.",
        "Création d’un spell/objet/technique unique (aboutissement du suivi).",
      ],
      etapes: [
        "Scène de référence : asseoir son statut (arbitrage d’un grand évènement, défense de son rang).",
        "Scène de formation : accompagner un ou des disciples jusqu’à la Transcendance.",
        "Scène de création : concevoir et révéler son spell/objet unique, en toute fin de suivi.",
      ],
      spells: [
        {
          name: "Registre d’élite",
          incantation: "« — »",
          desc: "le joueur mobilise les sorts majeurs (Aurea Ira, Fulminis) et débloque la création de SON propre spell/objet, exclusif à ce palier.",
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
          text: "Le joueur organise et arbitre un grand tournoi inter-maisons ; son autorité n’est plus contestée.",
        },
        {
          label: "Exemple 2 —",
          text: "Un disciple formé atteint la Transcendance.",
        },
        {
          label: "Exemple 3 —",
          text: "Révélation de son spell/objet signature en conditions réelles.",
        },
      ],
      echecs: [
        {
          label: "Exemple 1 —",
          text: "L’arbitrage dérape ou le joueur se montre partial ; son statut est remis en cause.",
        },
        {
          label: "Exemple 2 —",
          text: "La création finale est jugée déséquilibrée par le MJ — retour en conception.",
        },
      ],
      recompenses: [
        {
          badge: { kind: "slot", text: "SLOT — accès limité :" },
          text: "palier soumis à slot (nombre de Maîtres simultanés variable selon le domaine). {{ph:À CONFIRMER : nombre de slots de Maître pour le Duelliste à fixer}}",
        },
        {
          badge: { kind: "passif", text: "Passif COMPLET :" },
          text: "le passif du duelliste atteint son niveau maximal.",
        },
        {
          text: "**Spell / Objet unique :** création propre au personnage, **uniquement à ce palier et en fin de suivi**. {{ph:À CONFIRMER : format d’enregistrement — slot de sort, objet équipable — à définir}}",
        },
        {
          text: "**RP :** référence du domaine ; forme des disciples jusqu’à la Transcendance et crée des évènements officiels de duel.",
        },
      ],
    },
  ],
  trame: {
    title: "« Les Joutes d’Honneur »",
    fil: "**Fil conducteur :** les Joutes d’Honneur d’Aerwyn — trois passes, sortilèges non létaux, arbitre obligatoire — sont le cadre officiel où un duelliste bâtit sa réputation. Mais dans le climat tendu de cette rentrée (après l’attaque d’Elderwood), certaines joutes deviennent un terrain où se règlent des rivalités bien réelles, et où l’on repère les talents capables de défendre l’école.",
    accroches: [
      "Le joueur est invité à ses premières Joutes d’Honneur ; il doit tenir son rang face à un adversaire de même année (entrée en matière, Initiation/Révélation).",
      "Un rival conteste la légitimité du joueur et exige une passe supplémentaire hors cadre — l’arbitre ferme les yeux (montée de tension, Ascension).",
      "Le déclin d’intérêt pour les Joutes pousse le joueur à créer son propre tournoi et à prendre des disciples pour le faire vivre (support du Devoir de transmission, Transcendance).",
      "Le joueur devient organisateur et arbitre reconnu des Joutes, garant de leur esprit (Maître).",
    ],
    debloque: [
      "**XP :** //une scène jouée dans ce cadre compte comme « suivi moteur de jeu » (+10), dans la limite de 30 XP/jour.//",
      "Support RP aux récompenses de reconnaissance et de mentorat.",
      "Duels récurrents avec d’autres joueurs, chaque rival et chaque enjeu différant pour éviter la répétition.",
    ],
  },
};
