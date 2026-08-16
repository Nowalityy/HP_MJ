import type { Palier, Reward } from "@/data/types";
import { ANIMATIONS_NOTE } from "@/data/shared";
import { RichText } from "./RichText";
import { BlockTitle } from "./BlockTitle";

const REWARD_CLASS: Record<NonNullable<Reward["badge"]>["kind"], string> = {
  none: "reward-none",
  passif: "reward-passif",
  slot: "reward-slot",
};

/** Une fiche de palier : bandeau (nom + XP) puis carte détaillée. */
export function PalierCard({
  slug,
  palier,
}: {
  slug: string;
  palier: Palier;
}) {
  return (
    <>
      <div className="palier-band" id={`${slug}-${palier.id}`}>
        <span className="p-name">
          Palier {palier.index} — {palier.name}
        </span>
        <span className="p-xp">{palier.xp} XP</span>
      </div>

      <div className="palier-card">
        <div className="obj-row">
          <RichText text={palier.objective} />
        </div>

        <BlockTitle variant="comp">Compétences acquises</BlockTitle>
        <ul className="suivi-list">
          {palier.competences.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>

        <BlockTitle variant="etape">
          Étapes clés — une scène par étape
        </BlockTitle>
        <ul className="suivi-list">
          {palier.etapes.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>

        <BlockTitle variant="sorts">
          ✦ Sorts du registre mobilisables
        </BlockTitle>
        <ul className="suivi-list">
          {palier.spells.map((spell, i) => (
            <li key={i} className="sort-item">
              <span className="s-name">{spell.name}</span>{" "}
              <span className="s-inc">{spell.incantation}</span> —{" "}
              <RichText text={spell.desc} />
            </li>
          ))}
        </ul>

        <BlockTitle variant="valid">Conditions de validation</BlockTitle>
        <ul className="suivi-list">
          {palier.validation.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>

        <BlockTitle variant="anim">Animations</BlockTitle>
        <p className="anim-note">
          <RichText text={ANIMATIONS_NOTE} />
        </p>

        <BlockTitle variant="recomp">Récompenses</BlockTitle>
        <ul className="suivi-list">
          {palier.recompenses.map((reward, i) => (
            <li key={i}>
              {reward.badge && (
                <span className={REWARD_CLASS[reward.badge.kind]}>
                  {reward.badge.text}{" "}
                </span>
              )}
              <RichText text={reward.text} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
