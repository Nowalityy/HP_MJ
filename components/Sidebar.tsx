import { DOC_META } from "@/data";
import { navItems, type NavItem } from "@/lib/nav";

function matchesQuery(item: NavItem, query: string): boolean {
  if (!query) return true;
  const haystack = [
    item.label,
    item.num ? String(item.num) : "",
    ...item.subs.map((s) => s.label),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

/** Barre latérale : identité, légende, recherche, sommaire navigable. */
export function Sidebar({
  activeId,
  open,
  query,
  onQueryChange,
  onNavigate,
}: {
  activeId: string;
  open: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onNavigate: () => void;
}) {
  return (
    <aside className={`sidebar${open ? " open" : ""}`} id="sidebar">
      <div className="sidebar-brand">
        <div className="crest">{DOC_META.crest}</div>
        <h1>{DOC_META.brand}</h1>
        <p className="sub">{DOC_META.brandSub}</p>
        <div className="meta">
          <span>{DOC_META.edition}</span>
          <span>{DOC_META.updated}</span>
        </div>
      </div>

      <div className="legend">
        <h4>Repères</h4>
        <div className="legend-row">
          <span className="swatch dot-moderne" /> Discipline de suivi
        </div>
        <div className="legend-row">
          <span className="swatch" style={{ background: "#6B3FA0" }} /> Mécanique
          / passif
        </div>
        <div className="legend-row">
          <span className="swatch" style={{ background: "#8B2E2E" }} /> À
          confirmer (MJ)
        </div>
      </div>

      <div className="nav-search">
        <input
          type="text"
          id="navSearch"
          placeholder="Rechercher..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="Rechercher dans le sommaire"
        />
      </div>

      <nav className="toc" aria-label="Sommaire principal">
        <ul className="nav-list" id="navList">
          {navItems
            .filter((item) => matchesQuery(item, query))
            .map((item) => {
              const isActive = activeId === item.id;
              return (
                <li
                  key={item.id}
                  className={`nav-item era-${item.era}${
                    item.preface ? " nav-item-preface" : ""
                  }`}
                >
                  <a
                    href={item.href}
                    className={`nav-link${isActive ? " active" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={onNavigate}
                  >
                    <span
                      className={`nav-num${
                        item.num ? "" : " nav-num-dash"
                      }`}
                    >
                      {item.num ?? "·"}
                    </span>
                    <span className={`nav-dot dot-${item.era}`} />
                    <span className="nav-label">{item.label}</span>
                  </a>
                  {item.subs.length > 0 && (
                    <ul className="nav-sub">
                      {item.subs.map((sub) => (
                        <li key={sub.href}>
                          <a
                            href={sub.href}
                            className="nav-sub-link"
                            onClick={onNavigate}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
        </ul>
      </nav>

      <div className="sidebar-foot">
        Document interne de suivi · Édition de travail
      </div>
    </aside>
  );
}
