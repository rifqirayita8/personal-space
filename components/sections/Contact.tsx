import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="panel scroll-mt-4 bg-panel py-16 text-panel-fg sm:py-24"
    >
      <Container>
        <h2
          id="contact-title"
          className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Get in touch
        </h2>
        <p className="mt-4 max-w-[46ch] text-lg">
          Hiring, or have a project in mind? Email is the fastest way to reach
          me.
        </p>
        <p className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className="marker break-words font-sans text-[clamp(1.5rem,5.2vw,4rem)] font-bold leading-tight tracking-tight"
          >
            {profile.email}
          </a>
        </p>
        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-sans text-base font-medium">
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="marker inline-block py-2"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={profile.cvPath}
              download
              className="marker inline-block py-2"
            >
              Download CV (PDF)
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
