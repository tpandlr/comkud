import Link from "next/link";

type BrandMarkProps = Readonly<{
  onClick?: () => void;
}>;

export function BrandMark({ onClick }: BrandMarkProps) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={onClick}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 26c8-2 12-9 14-18 1 7-1 14-6 19-3 3-7 5-12 5 3-2 5-4 4-6Z"
          fill="#0B3A82"
        />
        <path
          d="M22 6c2 6 1 13-3 18"
          stroke="#0B3A82"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="leading-tight">
        <span className="block text-[15px] font-semibold tracking-tight text-primary">
          COMKUD Analytical
        </span>
        <span className="block text-[11px] font-medium tracking-[0.18em] text-primary/80">
          Solutions
        </span>
      </span>
    </Link>
  );
}
