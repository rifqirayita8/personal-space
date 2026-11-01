import type { Ink } from "@/lib/types";

// The CSS colour each ink prints in, so a project keeps one ink on every page it appears.
export const INK_VAR: Record<Ink, string> = {
  ultra: "var(--ultra)",
  carmine: "var(--carmine)",
  ink: "var(--ink)",
};
