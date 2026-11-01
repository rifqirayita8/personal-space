import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-4 pb-16 sm:pb-24"
    >
      <Container>
        <div
          className="stamp perf on-paper p-8 sm:p-14"
          style={{ ["--d" as string]: "16px", ["--r" as string]: "4.5px" }}
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <h2
              id="about-title"
              className="heading-display text-[clamp(2.75rem,6vw,4.5rem)] lg:col-span-4"
            >
              About
            </h2>
            <div className="lg:col-span-8">
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-5 max-w-[66ch] text-lg leading-[1.7] last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <h3 className="heading-display mt-12 text-3xl">Skills</h3>
          <dl className="mt-5 grid gap-x-8 gap-y-6 border-t-2 border-ink pt-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="font-bold">{group.label}</dt>
                <dd className="mt-1 text-lg font-medium">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
