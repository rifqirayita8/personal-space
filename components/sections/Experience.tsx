import { Container } from "@/components/ui/Container";
import { Postmark } from "@/components/ui/Postmark";
import { timeline } from "@/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="perf-y scroll-mt-4 bg-ink py-14 text-paper sm:py-20"
    >
      <Container className="grid gap-10 lg:grid-cols-12">
        <h2
          id="experience-title"
          className="heading-display text-[clamp(2.75rem,6vw,4.5rem)] lg:col-span-4"
        >
          Experience and education
        </h2>
        <ol className="space-y-8 lg:col-span-8">
          {timeline.map((entry) => (
            <li
              key={`${entry.organization}-${entry.period}`}
              className="flex gap-5 sm:gap-8"
            >
              <Postmark period={entry.period} />
              <div className="pt-2">
                <h3 className="heading-display text-3xl">{entry.title}</h3>
                <p className="mt-1 font-semibold">{entry.organization}</p>
                <p className="text-paper-soft">{entry.dates}</p>
                {entry.description ? (
                  <p className="mt-2 max-w-[56ch]">{entry.description}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
