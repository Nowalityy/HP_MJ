import type { Metadata } from "next";
import { PoleView } from "@/components/PoleView";
import { pole3 } from "@/data/poles/pole-3";

export const metadata: Metadata = {
  title: `Elderwood — ${pole3.coverTitle}`,
  description: pole3.description,
};

export default function Pole3Page() {
  return <PoleView pole={pole3} />;
}
