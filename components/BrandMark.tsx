import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = Readonly<{
  onClick?: () => void;
  inverted?: boolean;
}>;

export function BrandMark({ onClick, inverted = false }: BrandMarkProps) {
  return (
    <Link href="/" className="flex shrink-0 items-center" onClick={onClick}>
      <Image
        src="/images/logo.png"
        alt="COMKUD Analytical Solutions"
        width={835}
        height={278}
        className={`h-10 w-auto transition-[filter] duration-500 md:h-12 ${
          inverted ? "brightness-0 invert drop-shadow-sm" : ""
        }`}
        priority
      />
    </Link>
  );
}
