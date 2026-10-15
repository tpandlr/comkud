import { QuoteCta } from "@/components/QuoteCta";
import { SplitLine } from "@/components/MotionText";
import { Reveal } from "@/components/Reveal";
import { companyAddress, quotationEmail } from "@/lib/content";

type CtaBandProps = Readonly<{
  title: string;
  button?: boolean;
}>;

export function CtaBand({ title, button = true }: CtaBandProps) {
  return (
    <section className="bg-surface px-4 pb-6 pt-4 lg:px-10 lg:pb-8">
      <Reveal className="relative mx-auto max-w-[1320px] overflow-hidden rounded-3xl bg-primary px-6 py-12 text-white shadow-[0_24px_60px_-28px_rgba(11,25,44,0.45)] sm:px-10 lg:px-14 lg:py-16">
        <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-ochre/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="eyebrow text-ochre">Talk to our team</p>
            <SplitLine
              as="h2"
              className="font-headline mt-3 text-[32px] leading-tight md:text-[42px]"
              text={title}
            />
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">{companyAddress}</p>
            <a
              href={`mailto:${quotationEmail}`}
              className="footer-link mt-2 inline-block text-[15px] text-white/90"
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
