import { NextRequest, NextResponse } from "next/server";

/**
 * Verrou d'accès (HTTP Basic Auth), exécuté à l'edge sur Netlify.
 *
 * Le mot de passe n'est JAMAIS dans le code (le repo est public) : il est lu
 * depuis les variables d'environnement Netlify.
 *   - BASIC_AUTH_USER      (optionnel, défaut : "MjStaff")
 *   - BASIC_AUTH_PASSWORD  (le mot de passe ; défini sur Netlify)
 *
 * Tant que BASIC_AUTH_PASSWORD n'est pas défini, le site reste accessible
 * (aucun risque de se verrouiller dehors) — le verrou s'active dès que la
 * variable est renseignée sur Netlify.
 */
export const config = {
  // Protège toutes les routes sauf les assets statiques.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export function middleware(req: NextRequest) {
  const expectedUser = process.env.BASIC_AUTH_USER || "MjStaff";
  const expectedPass = process.env.BASIC_AUTH_PASSWORD;

  // Pas de mot de passe configuré → accès libre.
  if (!expectedPass) return NextResponse.next();

  const header = req.headers.get("authorization");
  if (header && header.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next();
      }
    } catch {
      // en-tête malformé → traité comme non authentifié
    }
  }

  // Realm en ASCII uniquement (les en-têtes HTTP n'acceptent pas les accents).
  return new NextResponse("Acces reserve - authentification requise.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Elderwood Staff"',
    },
  });
}
