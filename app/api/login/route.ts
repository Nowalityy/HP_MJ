import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, computeToken } from "@/lib/auth";

/** Vérifie les identifiants soumis et pose le cookie de session. */
export async function POST(req: NextRequest) {
  const form = await req.formData();
  const user = String(form.get("user") ?? "");
  const pass = String(form.get("password") ?? "");

  const expectedUser = process.env.BASIC_AUTH_USER || "MjStaff";
  const expectedPass = process.env.BASIC_AUTH_PASSWORD || "";

  const ok = expectedPass !== "" && user === expectedUser && pass === expectedPass;

  if (!ok) {
    return NextResponse.redirect(new URL("/login?error=1", req.url), {
      status: 303,
    });
  }

  const token = await computeToken(expectedPass);
  const isHttps =
    new URL(req.url).protocol === "https:" ||
    req.headers.get("x-forwarded-proto") === "https";

  const res = NextResponse.redirect(new URL("/", req.url), { status: 303 });
  res.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: isHttps,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 jours
  });
  return res;
}
