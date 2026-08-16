import type { Pole } from "@/data/types";
import { buildNavItems } from "@/lib/nav";
import { AppShell } from "./AppShell";
import { Cover } from "./Cover";
import { Sommaire } from "./Sommaire";
import { DisciplineSection } from "./DisciplineSection";

/** Page complète d'un pôle : coquille + couverture + sommaire + disciplines. */
export function PoleView({ pole }: { pole: Pole }) {
  const navItems = buildNavItems(pole.disciplines);

  return (
    <AppShell navItems={navItems} poleName={pole.poleName}>
      <Cover pole={pole} />
      <Sommaire disciplines={pole.disciplines} />
      {pole.disciplines.map((discipline) => (
        <DisciplineSection
          key={discipline.slug}
          discipline={discipline}
          poleName={pole.poleName}
        />
      ))}
      <div className="doc-footer">
        Elderwood · Système de suivi de progression · Document interne
      </div>
    </AppShell>
  );
}
