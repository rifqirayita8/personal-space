import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact } from "@/components/sections/Contact";
import { StampLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TitleStamp } from "@/components/ui/TitleStamp";
import { getProject, projects } from "@/content/projects";
import { profile } from "@/content/profile";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      siteName: profile.name,
      title: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((entry) => entry.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const links = [
    project.links?.demo && { label: "Live demo", href: project.links.demo },
    project.links?.repo && { label: "Source code", href: project.links.repo },
  ].filter((link) => !!link);
  const story = [
    { heading: "The problem", body: project.problem },
    { heading: "My role", body: project.role },
    { heading: "The result", body: project.outcome },
  ];

  return (
    <>
      <article>
        <Container className="pb-16 pt-8 sm:pb-24 sm:pt-12">
          <StampLink href="/#work" variant="secondary">
            All projects
          </StampLink>
          <div className="mt-6">
            <TitleStamp
              title={project.title}
              value={project.year}
              band="Selected work"
              motif={project.motif}
              ink={project.ink}
            />
          </div>
          <p className="mt-8 max-w-[44ch] text-2xl font-medium leading-snug">
            {project.summary}
          </p>

          <div
            className="stamp perf on-paper mt-10 p-8 sm:p-14"
            style={{ ["--d" as string]: "16px", ["--r" as string]: "4.5px" }}
          >
            <dl className="border-t-2 border-ink">
              <div className="grid gap-1 border-b border-ink-soft py-4 sm:grid-cols-[10rem_1fr]">
                <dt className="font-bold">Stack</dt>
                <dd className="text-lg font-medium">
                  {project.stack.join(", ")}
                </dd>
              </div>
              {links.length > 0 ? (
                <div className="grid gap-1 border-b border-ink-soft py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-bold">Links</dt>
                  <dd className="flex flex-wrap gap-x-6 font-semibold">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wavy"
                      >
                        {link.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>

            <div className="mt-12 space-y-12">
              {story.map((section) => (
                <section
                  key={section.heading}
                  className="grid gap-4 lg:grid-cols-12"
                >
                  <h2 className="heading-display text-4xl lg:col-span-4">
                    {section.heading}
                  </h2>
                  <p className="max-w-[66ch] text-lg leading-[1.7] lg:col-span-8">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>

          <nav aria-label="More projects" className="mt-10 flex flex-wrap gap-4">
            <StampLink href={`/projects/${previous.slug}`} variant="secondary">
              Previous: {previous.title}
            </StampLink>
            <StampLink href={`/projects/${next.slug}`} variant="secondary">
              Next: {next.title}
            </StampLink>
          </nav>
        </Container>
      </article>
      <Contact />
    </>
  );
}
