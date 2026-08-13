import { SYNTHESE_ROWS } from "@/data/shared";

/** Tableau récapitulatif des récompenses (commun aux trois disciplines). */
export function SyntheseTable() {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Palier</th>
            <th>Passif</th>
            <th>Spell / Objet</th>
            <th>Transmission</th>
          </tr>
        </thead>
        <tbody>
          {SYNTHESE_ROWS.map((row) => (
            <tr key={row.palier}>
              <td style={{ fontWeight: 700 }}>{row.palier}</td>
              <td>{row.passif}</td>
              <td>{row.spell}</td>
              <td>{row.transmission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
