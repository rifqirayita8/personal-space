"use client"; // Error boundaries must be Client Components

import { StampAction, StampLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TitleStamp } from "@/components/ui/TitleStamp";

export default function Error({ retry }: { error: unknown; retry: () => void }) {
  return (
    <Container className="pb-24 pt-8 sm:pt-12">
      <TitleStamp
        title="This page failed to load"
        value="Error"
        band="Not delivered"
        motif="waveform"
      />
      <p className="mt-8 max-w-[44ch] text-2xl font-medium leading-snug">
        Something broke while loading this page. Try again, or go back to the
        home page.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <StampAction onClick={() => retry()}>Try again</StampAction>
        <StampLink href="/" variant="secondary">
          Go to home page
        </StampLink>
      </div>
    </Container>
  );
}
