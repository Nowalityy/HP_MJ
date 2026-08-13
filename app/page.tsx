import { AppShell } from "@/components/AppShell";
import { Cover } from "@/components/Cover";
import { Sommaire } from "@/components/Sommaire";
import { DisciplineSection } from "@/components/DisciplineSection";
import { disciplines } from "@/data";

export default function Home() {
  return (
    <AppShell>
      <Cover />
      <Sommaire />
      {disciplines.map((discipline) => (
        <DisciplineSection key={discipline.slug} discipline={discipline} />
      ))}
      <div className="doc-footer">
        Elderwood · Système de suivi de progression · Document interne
      </div>
    </AppShell>
  );
}
