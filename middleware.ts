import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, computeToken } from "@/lib/auth";

/**
 * Verrou d'accès, exécuté à l'edge sur Netlify.
 *
 * Le mot de passe n'est JAMAIS dans le code (le repo est public) : il est lu
 * depuis la variable d'environnement Netlify BASIC_AUTH_PASSWORD.
 *   - BASIC_AUTH_USER      (optionnel, défaut : "MjStaff")
 *   - BASIC_AUTH_PASSWORD  (le mot de passe ; défini sur Netlify)
 *
 * Tant que BASIC_AUTH_PASSWORD n'est pas défini, le site reste accessible
 * (aucun risque de se verrouiller dehors). Une fois défini, tout visiteur
 * non authentifié est redirigé vers la page /login.
 */
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export async function middleware(req: NextRequest) {
  const expectedPass = process.env.BASIC_AUTH_PASSWORD;

  // Pas de mot de passe configuré → accès libre.
  if (!expectedPass) return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Laisser passer la page de login et son endpoint.
  if (pathname === "/login" || pathname.startsWith("/api/login")) {
    return NextResponse.next();
  }

  // Cookie de session valide → accès autorisé.
  const cookie = req.cookies.get(AUTH_COOKIE)?.value;
  const expectedToken = await computeToken(expectedPass);
  if (cookie && cookie === expectedToken) {
    return NextResponse.next();
  }

  // Sinon → redirection vers la page de login.
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}
