import Link from "next/link";
import { StampButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Vignette } from "@/components/ui/Vignette";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { INK_VAR } from "@/lib/ink";

export function Opening() {
  const nameParts = profile.name.split(" ");

  return (
    <Container className="pb-16 pt-8 sm:pb-24 sm:pt-12">
      <div className="opening">
        <section aria-labelledby="hero-title" className="opening__name">
          <div className="stamp perf definitive">
            <h1 id="hero-title" className="definitive__name">
              {nameParts.map((part, index) => (
                <span key={part}>
                  <span className="block">{part}</span>
                  {index < nameParts.length - 1 ? " " : null}
                </span>
              ))}
            </h1>
            <p className="definitive__note">{profile.availability}</p>
            <Vignette
              motif="rosette"
              className="definitive__art print-ultra"
            />
            <p className="name-stamp__band print-carmine">{profile.role}</p>
          </div>
        </section>

        <div className="opening__intro">
          <p className="max-w-[40ch] text-2xl font-medium leading-snug">
            {profile.headline}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <StampButton href={`mailto:${profile.email}`}>Email me</StampButton>
            <StampButton variant="secondary" href="#work">
              View projects
            </StampButton>
          </div>
        </div>

        <section
          id="work"
          aria-labelledby="work-title"
          className="opening__work scroll-mt-4"
        >
          <h2 id="work-title" className="sr-only">
            Selected work
          </h2>
          <ul className="contents">
            {projects.map((project) => (
              <li key={project.slug} className="min-h-0">
                <Link
                  href={`/projects/${project.slug}`}
                  className="stamp-link"
                >
                  <span
                    className="stamp perf project-stamp"
                    style={{ ["--engrave" as string]: INK_VAR[project.ink] }}
                  >
                    <Vignette
                      motif={project.motif}
                      className="project-stamp__art print-ultra"
                    />
                    <span className="block min-w-0">
                      <span className="project-stamp__head">
                        <h3 className="stamp-title">{project.title}</h3>
                        <span className="stamp-year print-carmine">
                          {project.year}
                        </span>
                      </span>
                      <p className="mt-2 text-[0.9375rem] leading-snug text-ink-soft">
                        {project.summary}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-ink-soft">
                        {project.stack.slice(0, 3).join(", ")}
                      </p>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}
