import Link from "next/link";
import { quotationHref, quotationLabel } from "@/lib/content";

type QuoteCtaProps = Readonly<{
  variant?: "header" | "headerHero" | "hero" | "ghost" | "footer" | "band";
  onClick?: () => void;
  className?: string;
}>;

const styles = {
  header: "btn btn-sm btn-primary",
  headerHero: "btn btn-sm btn-gold",
  hero: "btn btn-light",
  ghost: "btn btn-ghost",
  footer: "btn btn-sm btn-gold mt-6",
  band: "btn btn-gold",
} as const;

export function QuoteCta({ variant = "hero", onClick, className = "" }: QuoteCtaProps) {
  return (
    <Link href={quotationHref} className={`${styles[variant]} ${className}`.trim()} onClick={onClick}>
      {quotationLabel}
    </Link>
  );
}
