import type { Profile } from "@/lib/types";

// Name, role, contact, location, summary, and skills come from the user's LinkedIn profile PDF.
// Still placeholder: the CV file and the project write-ups (see content/projects.ts).
// Set `placeholderContent` to false to remove the notice bar once those are replaced.
export const profile: Profile = {
  name: "Rifqi Rayita Dhiyaulhaq",
  role: "Software engineer",
  headline:
    "I build user-friendly mobile apps with Flutter and RESTful back ends with Express.js.",
  location: "Based in Surabaya, East Java, Indonesia.",
  email: "rifqirrd8@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/mobiledeveloper-rifqi-rayita-dhiyaulhaq",
  // TODO: replace public/cv/rifqi-rayita-dhiyaulhaq-cv.pdf with the real CV.
  cvPath: "/cv/rifqi-rayita-dhiyaulhaq-cv.pdf",
  about: [
    "I'm a mobile and back-end developer. I build scalable apps with Flutter and RESTful back ends with Express.js, and I care about smooth, responsive mobile experiences and efficient server-side architecture.",
    "I work in Agile teams (Scrum) and do my best work in fast-paced, collaborative settings: iterating, communicating clearly, and adapting with the team.",
    "I like learning new tools and best practices, optimizing performance, integrating third-party services, and writing clean, maintainable code.",
  ],
  placeholderContent: true,
};
