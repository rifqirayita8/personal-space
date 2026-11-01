import Link from "next/link";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-paper-soft">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
        <Link
          href="/"
          aria-label="RRD, Rifqi Rayita Dhiyaulhaq, home"
          className="mark"
        >
          <span className="mark__face perf">RRD</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 text-[0.9375rem] font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="wavy inline-block py-2">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
