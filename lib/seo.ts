import { profile } from "@/content/profile";

// TODO: set NEXT_PUBLIC_SITE_URL to the real domain before deploying.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

export const siteTitle = `${profile.name}, ${profile.role}`;

export const siteDescription = `${profile.name} is a ${profile.role.toLowerCase()}. ${profile.headline}`;
