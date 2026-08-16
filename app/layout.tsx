import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elderwood — Système de suivi de progression",
  description:
    "Système de suivi de progression d'Elderwood. Choisissez un pôle magique pour accéder à ses disciplines et paliers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/*
          Polices chargées via Google Fonts au runtime (comme le document
          d'origine). On évite ainsi next/font qui télécharge les polices
          pendant le build — étape peu fiable sur les serveurs CI Netlify.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
