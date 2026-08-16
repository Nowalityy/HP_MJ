import type { Discipline, Era } from "@/data/types";

export interface NavSub {
  href: string;
  label: string;
}

export interface NavItem {
  href: string;
  /** Identifiant de la section cible (sans le #). */
  id: string;
  num?: number;
  label: string;
  era: Era;
  preface?: boolean;
  subs: NavSub[];
}

/** Construit l'arbre de navigation (sidebar + scrollspy) d'un pôle. */
export function buildNavItems(disciplines: Discipline[]): NavItem[] {
  return [
    {
      href: "#sommaire",
      id: "sommaire",
      label: "Sommaire",
      era: "trans",
      preface: true,
      subs: [],
    },
    ...disciplines.map((d) => ({
      href: `#${d.slug}`,
      id: d.slug,
      num: d.index,
      label: d.title,
      era: d.era,
      subs: [
        ...d.paliers.map((p) => ({
          href: `#${d.slug}-${p.id}`,
          label: p.name,
        })),
        { href: `#${d.slug}-trame`, label: "Trame RP" },
      ],
    })),
  ];
}
