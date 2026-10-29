import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-4 border-t border-line py-16 sm:py-24"
    >
      <Container>
        <h2
          id="work-title"
          className="font-sans text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Selected work
        </h2>
        <ul className="mt-10 border-t border-line">
          {projects.map((project) => (
            <li key={project.slug} className="border-b border-line">
              <Link
                href={`/projects/${project.slug}`}
                className="grid gap-x-8 gap-y-3 py-8 md:grid-cols-[5rem_1fr_15rem]"
              >
                <span className="font-sans text-base text-muted">
                  {project.year}
                </span>
                <div>
                  <h3 className="font-sans text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight">
                    <span className="marker marker-hover">{project.title}</span>
                  </h3>
                  <p className="mt-3 max-w-[52ch]">{project.summary}</p>
                </div>
                <span className="font-sans text-sm text-muted md:pt-2">
                  {project.stack.join(", ")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
