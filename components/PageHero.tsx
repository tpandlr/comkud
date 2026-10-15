import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { Fade, SplitLine } from "@/components/MotionText";
import { QuoteCta } from "@/components/QuoteCta";

type PageHeroProps = Readonly<{
  title: string;
  body: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}>;

export function PageHero({
  title,
  body,
  secondaryHref = "/services",
  secondaryLabel = "Explore Our Services",
}: PageHeroProps) {
  return (
    <section className="relative min-h-[42vh] overflow-hidden bg-deep text-white lg:min-h-[380px]">
      <HeroSlideshow />
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 pb-16 pt-24 lg:px-10 lg:pb-20 lg:pt-28">
        <SplitLine
          as="h1"
          className="font-headline max-w-3xl text-[34px] leading-[1.1] text-white md:text-[46px]"
          text={title}
          delay={60}
        />
        <Fade delay={280} className="mt-4 max-w-xl text-[15px] leading-[1.65] text-white/70 md:text-[16px]">
          {body}
        </Fade>
        <Fade delay={420} className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <QuoteCta variant="hero" />
          <Link href={secondaryHref} className="btn btn-ghost">
            {secondaryLabel}
          </Link>
        </Fade>
      </div>
    </section>
  );
}
