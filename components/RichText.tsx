import React from "react";
import type { RichString } from "@/data/types";

type Token =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "italic"; value: string }
  | { type: "ph"; value: string };

/**
 * Découpe une chaîne enrichie en jetons.
 * Syntaxe : **gras**, //italique//, {{ph:texte}}.
 */
function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let buffer = "";
  let i = 0;

  const flush = () => {
    if (buffer) {
      tokens.push({ type: "text", value: buffer });
      buffer = "";
    }
  };

  while (i < input.length) {
    if (input.startsWith("**", i)) {
      const end = input.indexOf("**", i + 2);
      if (end !== -1) {
        flush();
        tokens.push({ type: "bold", value: input.slice(i + 2, end) });
        i = end + 2;
        continue;
      }
    }
    if (input.startsWith("//", i)) {
      const end = input.indexOf("//", i + 2);
      if (end !== -1) {
        flush();
        tokens.push({ type: "italic", value: input.slice(i + 2, end) });
        i = end + 2;
        continue;
      }
    }
    if (input.startsWith("{{ph:", i)) {
      const end = input.indexOf("}}", i + 5);
      if (end !== -1) {
        flush();
        tokens.push({ type: "ph", value: input.slice(i + 5, end) });
        i = end + 2;
        continue;
      }
    }
    buffer += input[i];
    i += 1;
  }
  flush();
  return tokens;
}

/** Rend une chaîne enrichie (gras / italique / badge « À confirmer »). */
export function RichText({ text }: { text: RichString }) {
  const tokens = tokenize(text);
  return (
    <>
      {tokens.map((token, idx) => {
        switch (token.type) {
          case "bold":
            return <strong key={idx}>{token.value}</strong>;
          case "italic":
            return <em key={idx}>{token.value}</em>;
          case "ph":
            return (
              <span key={idx} className="ph" title="À confirmer par le MJ">
                {token.value}
              </span>
            );
          default:
            return <React.Fragment key={idx}>{token.value}</React.Fragment>;
        }
      })}
    </>
  );
}
