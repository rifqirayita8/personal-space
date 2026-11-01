import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ink";

type FaceProps = {
  variant: Variant;
  children: ReactNode;
};

// The anchor or button carries focus and motion; the inner face carries the perforated mask.
function Face({ variant, children }: FaceProps) {
  return (
    <span className={`stamp-button__face perf stamp-button--${variant}`}>
      {children}
    </span>
  );
}

type StampButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
};

// For hash, mailto, download, and external links.
export function StampButton({
  variant = "primary",
  children,
  ...props
}: StampButtonProps) {
  return (
    <a className="stamp-button" {...props}>
      <Face variant={variant}>{children}</Face>
    </a>
  );
}

type StampLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

// For client-side navigation between pages of this site.
export function StampLink({
  href,
  variant = "primary",
  children,
}: StampLinkProps) {
  return (
    <Link href={href} className="stamp-button">
      <Face variant={variant}>{children}</Face>
    </Link>
  );
}

type StampActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function StampAction({
  variant = "primary",
  children,
  ...props
}: StampActionProps) {
  return (
    <button type="button" className="stamp-button" {...props}>
      <Face variant={variant}>{children}</Face>
    </button>
  );
}
