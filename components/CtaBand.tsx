import { QuoteCta } from "@/components/QuoteCta";
import { companyAddress, quotationEmail } from "@/lib/content";

type CtaBandProps = Readonly<{
  title: string;
  button?: boolean;
}>;

export function CtaBand({ title, button = true }: CtaBandProps) {
  return (
    <section className="bg-deep px-4 py-16 text-white lg:px-10">
      <div className="mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-ochre">Talk to our team</p>
          <h2 className="font-headline mt-3 text-[32px] leading-tight md:text-[40px]">
            {title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">{companyAddress}</p>
          <a href={`mailto:${quotationEmail}`} className="mt-2 block text-[15px] text-white/80">
            {quotationEmail}
          </a>
          {button ? <QuoteCta variant="band" /> : null}
        </div>
      </div>
    </section>
  );
}
