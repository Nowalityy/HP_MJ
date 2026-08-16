"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Sidebar } from "./Sidebar";
import type { NavItem } from "@/lib/nav";

/**
 * Coquille applicative (client) : gère l'état interactif partagé d'un pôle —
 * barre de progression, menu mobile, recherche et scrollspy.
 * Le contenu (server components) est passé via `children`.
 */
export function AppShell({
  navItems,
  poleName,
  children,
}: {
  navItems: NavItem[];
  poleName: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "sommaire");
  const [crumb, setCrumb] = useState(poleName);
  const progressRef = useRef<HTMLDivElement>(null);

  const closeSidebar = useCallback(() => setOpen(false), []);

  // Barre de progression + scrollspy (actif + fil d'Ariane).
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .map((el, i) => ({ el, item: navItems[i] }))
      .filter((s): s is { el: HTMLElement; item: NavItem } => s.el !== null);

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const ratio = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${Math.min(ratio * 100, 100)}%`;
      }

      let current = sections[0];
      for (const section of sections) {
        if (section.el.getBoundingClientRect().top < 120) current = section;
      }
      if (current) {
        setActiveId(current.item.id);
        setCrumb(current.item.label);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [navItems]);

  // Fermer le menu mobile avec Échap.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu
      </a>
      <div id="progress" ref={progressRef} aria-hidden="true" />

      <button
        id="menu-toggle"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="sidebar"
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>
      <div
        id="sidebar-overlay"
        className={open ? "show" : ""}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <div className="layout">
        <Sidebar
          navItems={navItems}
          activeId={activeId}
          open={open}
          query={query}
          onQueryChange={setQuery}
          onNavigate={closeSidebar}
        />

        <main className="main" id="main-content">
          <div className="topbar">
            <span>{poleName}</span>
            <span id="crumb-current">{crumb}</span>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
