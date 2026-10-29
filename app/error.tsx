"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Error({ retry }: { error: unknown; retry: () => void }) {
  return (
    <Container className="py-24 sm:py-32">
      <h1 className="max-w-[14ch] font-sans text-[clamp(2.5rem,9vw,6rem)] font-extrabold leading-[0.98] tracking-tight">
        This page failed to load
      </h1>
      <p className="mt-6 max-w-[46ch] text-xl leading-snug">
        Something broke while loading this page. Try again, or go back to the
        home page.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => retry()}
          className={buttonClass("primary")}
        >
          Try again
        </button>
        <Link href="/" className={buttonClass("secondary")}>
          Go to home page
        </Link>
      </div>
    </Container>
  );
}
