import { StampButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Cancel } from "@/components/ui/Postmark";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-4 py-16 sm:py-24"
    >
      <Container>
        <div className="airmail">
          <div className="on-paper relative overflow-hidden bg-paper p-6 text-ink sm:p-14">
            <h2
              id="contact-title"
              className="heading-display text-[clamp(2.75rem,6vw,4.5rem)]"
            >
              Get in touch
            </h2>
            <p className="mt-4 max-w-[52ch] text-balance text-lg">
              Hiring, or have a project in mind? Email is the fastest way to
              reach me.
            </p>
            <p className="mt-8">
              <a
                href={`mailto:${profile.email}`}
                className="wavy heading-display break-words text-[clamp(1.75rem,7vw,5.5rem)] leading-none"
              >
                {profile.email}
              </a>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <StampButton
                variant="ink"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </StampButton>
              <StampButton href={profile.cvPath} download>
                Download CV (PDF)
              </StampButton>
            </div>
            <Cancel
              ringText="RIFQI RAYITA DHIYAULHAQ   SOFTWARE ENGINEER"
              className="pointer-events-none absolute right-4 top-6 hidden w-72 rotate-[-8deg] xl:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
