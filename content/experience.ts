import type { TimelineEntry } from "@/lib/types";

// Source: the user's LinkedIn profile PDF. Newest first.
export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    period: "2026 to now",
    dates: "March 2026 to present",
    title: "Software engineer",
    organization: "ADAMLabs, Surabaya",
  },
  {
    kind: "work",
    period: "2025 to 2026",
    dates: "October 2025 to April 2026",
    title: "Mobile developer",
    organization: "PT Winnicode Garuda Indonesia, Bandung",
    description: "Magang Kemnaker Batch 1. Project: News Portal App.",
  },
  {
    kind: "work",
    period: "2025",
    dates: "July 2025 to November 2025",
    title: "Mobile developer",
    organization: "ADAMLabs, Surabaya",
    description: "Project: AdamLIS (AdamExpertise v2), built with Flutter.",
  },
  {
    kind: "work",
    period: "2024",
    dates: "July 2024 to December 2024",
    title: "Mobile developer",
    organization: "PT Wahana Meditek Indonesia, Surabaya",
    description:
      "I was responsible for developing the entire mobile application for AdamExpertise V2 using Flutter. I handled everything from slicing, state management, and API integration to a responsive and consistent user experience, and worked closely with the design and backend teams.",
  },
  {
    kind: "education",
    period: "2022 to 2025",
    dates: "August 2022 to October 2025",
    title: "Associate's degree, Informatics",
    organization: "Politeknik Elektronika Negeri Surabaya",
  },
  {
    kind: "education",
    period: "2019 to 2022",
    dates: "July 2019 to July 2022",
    title: "High school diploma, Natural Sciences",
    organization: "SMA Negeri 1 Ponorogo",
  },
];
