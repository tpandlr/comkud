import Image from "next/image";
import { QuoteCta } from "@/components/QuoteCta";
import { SplitLine } from "@/components/MotionText";
import { Reveal } from "@/components/Reveal";
import { quotationEmail } from "@/lib/content";

type CtaBandProps = Readonly<{
  title: string;
  button?: boolean;
}>;

export function CtaBand({ title, button = true }: CtaBandProps) {
  return (
    <section className="bg-surface px-4 pb-6 pt-4 lg:px-10 lg:pb-8">
      <Reveal className="relative mx-auto max-w-[1320px] overflow-hidden rounded-3xl bg-primary px-6 py-12 text-white shadow-[0_24px_60px_-28px_rgba(11,25,44,0.45)] sm:px-10 lg:px-14 lg:py-16">
        <Image
          src="/images/env-river.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="1320px"
        />
        <div className="absolute inset-0 bg-primary/82" />
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-ochre">Talk to our team</p>
            <SplitLine
              as="h2"
              className="font-headline mt-3 text-[32px] leading-tight md:text-[42px]"
              text={title}
            />
            <a
              href={`mailto:${quotationEmail}`}
              className="footer-link mt-4 inline-block text-[15px] text-white/90"
            >
              {quotationEmail}
            </a>
          </div>
          {button ? <QuoteCta variant="band" className="mt-0 shrink-0" /> : null}
        </div>
      </Reveal>
    </section>
  );
}
