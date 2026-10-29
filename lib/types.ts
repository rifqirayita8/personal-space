export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  problem: string;
  role: string;
  outcome: string;
  stack: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
};

export type TimelineEntry = {
  kind: "work" | "education";
  period: string;
  title: string;
  organization: string;
  description: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  headline: string;
  availability: string;
  email: string;
  linkedin: string;
  cvPath: string;
  about: string[];
  placeholderContent: boolean;
};
