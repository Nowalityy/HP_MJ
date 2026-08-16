import type { Metadata } from "next";
import { PoleView } from "@/components/PoleView";
import { pole2 } from "@/data/poles/pole-2";

export const metadata: Metadata = {
  title: `Elderwood — ${pole2.coverTitle}`,
  description: pole2.description,
};

export default function Pole2Page() {
  return <PoleView pole={pole2} />;
}
