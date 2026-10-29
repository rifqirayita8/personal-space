import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-12 items-center justify-center rounded-sm border-2 px-6 font-sans text-base font-semibold transition-colors duration-150 motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "border-panel bg-panel text-panel-fg hover:border-accent hover:bg-accent hover:text-on-accent",
  secondary:
    "border-fg text-fg hover:border-accent hover:bg-accent hover:text-on-accent",
};

export function buttonClass(variant: Variant): string {
  return `${base} ${variants[variant]}`;
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <a className={`${buttonClass(variant)} ${className}`} {...props} />;
}
