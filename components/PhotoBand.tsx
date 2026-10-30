import Image from "next/image";

type PhotoBandProps = Readonly<{
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}>;

export function PhotoBand({ src, alt, children, className = "" }: PhotoBandProps) {
  return (
    <section className={`relative overflow-hidden py-16 text-white lg:py-20 ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/88 via-deep/72 to-deep/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-deep/25" />
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 lg:px-10">{children}</div>
    </section>
  );
}
