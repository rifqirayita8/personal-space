import type { SkillGroup } from "@/lib/types";

// TODO: adjust to the skills that should actually be shown.
export const skills: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend and data", items: ["Node.js", "PostgreSQL", "REST APIs"] },
  { label: "Tooling", items: ["Git", "Docker", "CI/CD"] },
];
