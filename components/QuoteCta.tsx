import Link from "next/link";
import { quotationHref, quotationLabel } from "@/lib/content";

type QuoteCtaProps = Readonly<{
  variant?: "header" | "hero" | "ghost" | "footer" | "band";
  onClick?: () => void;
  className?: string;
}>;

const styles = {
  header: "btn btn-sm btn-primary",
  hero: "btn btn-light",
  ghost: "btn btn-ghost",
  footer: "btn btn-sm btn-gold mt-5",
  band: "btn btn-gold mt-8",
} as const;

export function QuoteCta({ variant = "hero", onClick, className = "" }: QuoteCtaProps) {
  return (
    <Link href={quotationHref} className={`${styles[variant]} ${className}`.trim()} onClick={onClick}>
      {quotationLabel}
    </Link>
  );
}
