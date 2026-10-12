import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteCta } from "@/components/QuoteCta";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries We Serve | COMKUD Analytical Solutions",
  description:
    "Analytical support for mining, agriculture, manufacturing, food, pharmaceuticals, energy and research.",
};

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

export default function IndustriesPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1230px] px-7 py-16 md:py-20">
        <h1 className="font-headline text-[44px] font-semibold leading-[1.15] text-primary md:text-[52px]">
          Industries
        </h1>
        <p className="mt-6 max-w-2xl text-[16px] text-slate-500">
          Every sector has its own quality demands. Comkud’s analytical services
          support the industries driving Zimbabwe’s economy.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <QuoteCta />
          <Link
            href="/services"
            className="rounded-md border border-slate-300 bg-white px-6 py-2.5 text-[14px] font-medium text-primary"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {industries.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-7">
                <span className="material-symbols-outlined text-[22px] text-primary" style={iconStyle}>
                  {item.icon}
                </span>
                <h2 className="mt-4 font-headline text-[22px] font-semibold text-primary">
                  {item.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-[16px] text-slate-500">
            Don’t see your sector? Contact us. If it needs analysis, we can probably help.
          </p>
        </div>
      </section>

      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
