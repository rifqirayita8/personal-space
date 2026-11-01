import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-paper-soft">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6 text-sm">
        <p className="text-paper-soft">{profile.name}</p>
        <p className="text-paper-soft">Plate 1 of 1, printed in three inks</p>
        <a href="#top" className="wavy inline-block py-2 font-semibold">
          Back to top
        </a>
      </Container>
    </footer>
  );
}
