import type { TimelineEntry } from "@/lib/types";

// TODO: replace with the real work and education history.
export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    period: "2025 to now",
    title: "Software engineer",
    organization: "Company name",
    description:
      "Build and maintain the web platform. Own features from design through release.",
  },
  {
    kind: "work",
    period: "2024",
    title: "Software engineer intern",
    organization: "Company name",
    description:
      "Shipped internal tools and fixed production issues alongside a small engineering team.",
  },
  {
    kind: "education",
    period: "Years attended",
    title: "Degree name",
    organization: "University name",
    description: "Focus on software engineering and systems.",
  },
];
