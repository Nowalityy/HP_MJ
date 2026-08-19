import type { Metadata } from "next";
import { BRAND } from "@/data";

export const metadata: Metadata = {
  title: "Elderwood — Accès réservé",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const sp = await searchParams;
  const hasError = sp?.error === "1";

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-top" />
        <div className="login-body">
          <div className="login-lock" aria-hidden="true">
            ⟡
          </div>
          <div className="login-crest">{BRAND.crest}</div>
          <h1 className="login-title">ELDERWOOD</h1>
          <p className="login-sub">Accès réservé · Édition MJ</p>

          {hasError && (
            <p className="login-error" role="alert">
              Identifiant ou mot de passe incorrect.
            </p>
          )}

          <form className="login-form" method="post" action="/api/login">
            <label className="login-label" htmlFor="user">
              Identifiant
            </label>
            <input
              className="login-input"
              id="user"
              name="user"
              type="text"
              autoComplete="username"
              defaultValue="MjStaff"
              required
            />

            <label className="login-label" htmlFor="password">
              Mot de passe
            </label>
            <input
              className="login-input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••••"
              required
              autoFocus
            />

            <button className="login-btn" type="submit">
              Entrer
            </button>
          </form>

          <div className="login-foot">Document interne · accès protégé</div>
        </div>
      </div>
    </div>
  );
}
