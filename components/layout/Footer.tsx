import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="panel bg-panel text-panel-fg">
      <Container className="flex flex-wrap items-center justify-between gap-4 border-t border-panel-fg/25 py-6 font-sans text-sm">
        <p>{profile.name}</p>
        <a href="#top" className="marker py-2">
          Back to top
        </a>
      </Container>
    </footer>
  );
}
