import type { Metadata } from "next";
import { PoleView } from "@/components/PoleView";
import { pole1 } from "@/data/poles/pole-1";

export const metadata: Metadata = {
  title: `Elderwood — ${pole1.coverTitle}`,
  description: pole1.description,
};

export default function Pole1Page() {
  return <PoleView pole={pole1} />;
}
