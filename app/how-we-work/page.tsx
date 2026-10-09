import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteCta } from "@/components/QuoteCta";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How We Work | COMKUD Analytical Solutions",
  description:
    "From enquiry to certified report: consultation, site assessment, field testing, laboratory analysis, data interpretation, and certified reporting.",
};

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

export default function HowWeWorkPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1230px] px-7 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-headline text-[44px] font-semibold leading-[1.15] text-primary md:text-[52px]">
              How we work
            </h1>
            <p className="mt-6 text-[16px] text-slate-500">
              From enquiry to certified report — a seamless, professional experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <QuoteCta />
              <Link
                href="/services"
                className="rounded-md border border-slate-300 bg-white px-6 py-2.5 text-[14px] font-medium text-primary"
              >
                Our Services
              </Link>
            </div>
          </div>
          <Image
            src="/images/plant-night.jpg"
            alt="Industrial facility"
            width={1400}
            height={900}
            className="aspect-[16/11] w-full rounded-xl object-cover shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
            priority
          />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
            Six steps to a certified report
          </h2>
          <p className="mt-3 max-w-2xl text-[16px] text-slate-500">
            Consultation, site assessment, field testing, laboratory analysis, interpretation, and certified reporting.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-xl border border-slate-200 bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-[22px] text-primary" style={iconStyle}>
                    {step.icon}
                  </span>
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2.5 text-[13px] font-medium text-white">
                    {step.number}
                  </span>
                </div>
                <h2 className="mt-4 font-headline text-[22px] font-semibold text-primary">
                  {step.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to request a quotation?" />
    </main>
  );
}
