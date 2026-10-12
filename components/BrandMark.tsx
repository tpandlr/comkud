import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = Readonly<{
  onClick?: () => void;
}>;

export function BrandMark({ onClick }: BrandMarkProps) {
  return (
    <Link href="/" className="flex shrink-0 items-center" onClick={onClick}>
      <Image
        src="/images/logo.png"
        alt="COMKUD Analytical Solutions"
        width={835}
        height={278}
        className="h-11 w-auto md:h-12"
        priority
      />
    </Link>
  );
}
