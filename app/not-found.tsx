import { StampLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TitleStamp } from "@/components/ui/TitleStamp";

export default function NotFound() {
  return (
    <Container className="pb-24 pt-8 sm:pt-12">
      <TitleStamp
        title="Page not found"
        value="404"
        band="Returned to sender"
        motif="lattice"
      />
      <p className="mt-8 max-w-[44ch] text-2xl font-medium leading-snug">
        The page you opened doesn&apos;t exist or has moved.
      </p>
      <div className="mt-6">
        <StampLink href="/">Go to home page</StampLink>
      </div>
    </Container>
  );
}
