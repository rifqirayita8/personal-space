import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClass } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="max-w-[14ch] font-sans text-[clamp(2.5rem,9vw,6rem)] font-extrabold leading-[0.98] tracking-tight">
        Page not found
      </h1>
      <p className="mt-6 max-w-[46ch] text-xl leading-snug">
        The page you opened doesn&apos;t exist or has moved. Go back to the home
        page to find what you need.
      </p>
      <Link href="/" className={`${buttonClass("primary")} mt-8`}>
        Go to home page
      </Link>
    </Container>
  );
}
