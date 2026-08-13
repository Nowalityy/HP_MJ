import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Lora,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elderwood — Suivi Pôle 1 : Arts Offensifs & Défensifs",
  description:
    "Fiches de suivi de progression du pôle Arts Offensifs & Défensifs — Duelliste de Renom, Arts Défensifs & Boucliers, Magie de Précision & Perforation. Édition MJ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cinzel.variable} ${cormorant.variable} ${lora.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
