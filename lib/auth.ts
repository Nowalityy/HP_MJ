/**
 * Utilitaires du verrou d'accès.
 *
 * Le cookie de session ne contient pas le mot de passe mais un jeton dérivé
 * (SHA-256 du mot de passe + sel). Le middleware et la route de login
 * calculent le même jeton à partir de la variable d'environnement, donc un
 * cookie n'est valide que si l'on a connu le bon mot de passe.
 */
export const AUTH_COOKIE = "ew_auth";

const SALT = "elderwood-mj-v1";

/** Jeton de session déterministe pour un mot de passe donné. */
export async function computeToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`${SALT}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
