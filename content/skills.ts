import type { SkillGroup } from "@/lib/types";

// Source: the user's LinkedIn profile PDF (summary, top skills, certifications).
export const skills: SkillGroup[] = [
  { label: "Mobile", items: ["Flutter", "State management"] },
  { label: "Back end", items: ["Express.js", "REST APIs"] },
  { label: "Design and practice", items: ["Figma", "Agile (Scrum)", "Clean code"] },
  {
    label: "Certifications",
    items: ["TOEFL ITP", "EF SET English B2 (59/100)", "JLPT"],
  },
];
