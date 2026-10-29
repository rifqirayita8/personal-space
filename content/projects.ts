import type { Project } from "@/lib/types";

// TODO: replace these sample projects with real ones. Add a project by adding one entry.
export const projects: Project[] = [
  {
    slug: "realtime-dashboard",
    title: "Realtime operations dashboard",
    year: "2025",
    summary:
      "A live view of orders and fulfilment for a small logistics team.",
    problem:
      "The team tracked orders across spreadsheets and chat threads. Delays were noticed hours late, and nobody could see the whole picture at once.",
    role: "Sole engineer. I designed the data model, built the API and the dashboard, and ran the rollout with the operations team.",
    outcome:
      "Late orders now surface within seconds. The team stopped maintaining the spreadsheets and handled peak days without extra staff.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "WebSockets"],
    links: {},
  },
  {
    slug: "payments-api",
    title: "Payments API",
    year: "2024",
    summary:
      "A REST API that handles checkout, refunds, and reconciliation for an online store.",
    problem:
      "Payment logic was scattered across the storefront code. Every change risked double charges, and refunds were handled by hand.",
    role: "Backend engineer. I extracted the payment flow into one service, defined the API contract, and wrote the test suite around money handling.",
    outcome:
      "Refunds became a single call, and reconciliation ran automatically each night. The storefront code lost about a third of its size.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    links: {},
  },
  {
    slug: "booking-app",
    title: "Booking app",
    year: "2024",
    summary:
      "A mobile-friendly web app for booking appointments at a local studio.",
    problem:
      "Customers booked by direct message, and the owner spent evenings untangling double bookings and cancellations.",
    role: "Full-stack engineer. I led the interface design, built the booking flow, and set up email reminders.",
    outcome:
      "Customers book in under a minute without messaging anyone. Double bookings stopped, and no-shows dropped after reminders went out.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    links: {},
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
