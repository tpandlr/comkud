import Link from "next/link";
import { quotationHref, quotationLabel } from "@/lib/content";

type QuoteCtaProps = Readonly<{
  variant?: "header" | "hero" | "footer" | "band";
  onClick?: () => void;
}>;

const styles = {
  header: "rounded-md bg-primary px-5 py-2 text-[13px] font-medium text-white",
  hero: "rounded-md bg-primary px-6 py-2.5 text-[14px] font-medium text-white",
  footer: "mt-5 inline-flex rounded-md bg-white px-5 py-2 text-[13px] font-medium text-primary",
  band: "mt-8 inline-flex rounded-md bg-white px-6 py-2.5 text-[14px] font-medium text-primary",
} as const;

export function QuoteCta({ variant = "hero", onClick }: QuoteCtaProps) {
  return (
    <Link href={quotationHref} className={styles[variant]} onClick={onClick}>
      {quotationLabel}
    </Link>
  );
}
