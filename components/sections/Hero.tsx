import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { profile } from "@/content/profile";

export function Hero() {
  const nameParts = profile.name.split(" ");

  return (
    <section aria-labelledby="hero-title" className="pb-16 pt-12 sm:pb-24 sm:pt-20">
      <Container>
        <h1
          id="hero-title"
          className="hero-name font-sans text-[clamp(3rem,12.5vw,9.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]"
        >
          {nameParts.map((part, index) => (
            <span key={part}>
              <span className="block">{part}</span>
              {index < nameParts.length - 1 ? " " : null}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-[40ch] text-xl leading-snug sm:text-2xl">
          {profile.role}. {profile.headline}
        </p>
        <p className="mt-4 font-sans text-base text-muted">
          {profile.availability}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#work">View projects</ButtonLink>
          <ButtonLink variant="secondary" href={`mailto:${profile.email}`}>
            Email me
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
