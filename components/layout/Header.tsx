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
    <header className="border-b border-line">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
        <Link
          href="/"
          aria-label="RRD, Rifqi Rayita Dhiyaulhaq, home"
          className="py-2 font-sans text-xl font-extrabold tracking-tight"
          style={{ fontVariationSettings: '"wdth" 125' }}
        >
          RRD
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 font-sans text-[0.9375rem] font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="marker inline-block py-2">
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
