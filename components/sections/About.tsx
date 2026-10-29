import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-4 border-t border-line py-16 sm:py-24"
    >
      <Container className="grid gap-10 lg:grid-cols-12">
        <h2
          id="about-title"
          className="font-sans text-3xl font-bold tracking-tight sm:text-4xl lg:col-span-4"
        >
          About
        </h2>
        <div className="lg:col-span-8">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="mb-5 max-w-[62ch] text-lg leading-[1.75]">
              {paragraph}
            </p>
          ))}
          <h3 className="mt-12 font-sans text-xl font-semibold">Skills</h3>
          <dl className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="font-sans text-base font-semibold">
                  {group.label}
                </dt>
                <dd className="text-muted">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
