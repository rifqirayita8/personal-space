import { Container } from "@/components/ui/Container";
import { timeline } from "@/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-4 border-t border-line py-16 sm:py-24"
    >
      <Container className="grid gap-10 lg:grid-cols-12">
        <h2
          id="experience-title"
          className="font-sans text-3xl font-bold tracking-tight sm:text-4xl lg:col-span-4"
        >
          Experience and education
        </h2>
        <ol className="lg:col-span-8">
          {timeline.map((entry) => (
            <li
              key={`${entry.organization}-${entry.period}`}
              className="grid gap-x-8 gap-y-1 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[9rem_1fr]"
            >
              <p className="font-sans text-base text-muted">{entry.period}</p>
              <div>
                <h3 className="font-sans text-xl font-semibold">
                  {entry.title}
                </h3>
                <p className="font-sans text-base text-muted">
                  {entry.organization}
                </p>
                <p className="mt-2 max-w-[56ch]">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
