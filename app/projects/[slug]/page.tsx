import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";
import { getProject, projects } from "@/content/projects";

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

  const facts = [
    { label: "Year", value: project.year },
    { label: "Stack", value: project.stack.join(", ") },
  ];
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
        <Container className="py-12 sm:py-20">
          <Link href="/#work" className="marker inline-block py-2 font-sans text-sm font-medium">
            All projects
          </Link>
          <h1 className="mt-8 max-w-[18ch] font-sans text-[clamp(2.25rem,7vw,5rem)] font-extrabold leading-[1.02] tracking-tight">
            {project.title}
          </h1>
          <p className="mt-6 max-w-[46ch] text-xl leading-snug">
            {project.summary}
          </p>

          <dl className="mt-12 border-t border-line">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 border-b border-line py-4 sm:grid-cols-[10rem_1fr]"
              >
                <dt className="font-sans text-sm font-semibold text-muted">
                  {fact.label}
                </dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            {links.length > 0 ? (
              <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[10rem_1fr]">
                <dt className="font-sans text-sm font-semibold text-muted">
                  Links
                </dt>
                <dd className="flex flex-wrap gap-x-6 font-sans font-medium">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="marker"
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
              <section key={section.heading} className="grid gap-4 lg:grid-cols-12">
                <h2 className="font-sans text-2xl font-bold tracking-tight lg:col-span-4">
                  {section.heading}
                </h2>
                <p className="max-w-[62ch] text-lg leading-[1.75] lg:col-span-8">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </Container>
      </article>
      <Contact />
    </>
  );
}
