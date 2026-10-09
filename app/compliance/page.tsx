import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteCta } from "@/components/QuoteCta";
import { standards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Compliance | COMKUD Analytical Solutions",
  description:
    "EMA, SI 72/2009 Atmospheric Pollution Control, WHO Air Quality Guidelines, and EPA Reference Methods. Reports formatted for direct EMA submission.",
};

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

export default function CompliancePage() {
  return (
    <main>
      <section className="mx-auto max-w-[1230px] px-7 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-headline text-[44px] font-semibold leading-[1.15] text-primary md:text-[52px]">
              Compliance
            </h1>
            <p className="mt-6 text-[16px] text-slate-500">
              Operating within Zimbabwe’s environmental legal structure.
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
            src="/images/stacks.png"
            alt="Industrial stacks"
            width={1200}
            height={900}
            className="aspect-[16/11] w-full rounded-xl object-cover shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
            priority
          />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
            Standards we work to
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {standards.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-7">
                <span className="material-symbols-outlined text-[22px] text-primary" style={iconStyle}>
                  {item.icon}
                </span>
                <h2 className="mt-4 font-headline text-[22px] font-semibold text-primary">
                  {item.title}
                </h2>
                <p className="mt-1 text-[14px] text-slate-700">{item.subtitle}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Compliance is not optional — we make it simple. Reports formatted for direct EMA submission." />
    </main>
  );
}
