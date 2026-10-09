import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteCta } from "@/components/QuoteCta";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | COMKUD Analytical Solutions",
  description:
    "Air emissions monitoring, stack testing, ambient air, environmental audits, EIA, and compliance assessments.",
};

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

const detail = [
  {
    icon: "science",
    title: "What we measure",
    text: "Carbon Monoxide (CO), Nitrogen Oxides (NOx), Sulphur Dioxide (SO₂), particulates, hydrocarbons, and opacity / smoke density.",
  },
  {
    icon: "biotech",
    title: "Methods",
    text: "EPA-certified test methods including RM1, RM3, RM6, and RM9 — on-site extraction and analysis.",
  },
  {
    icon: "domain",
    title: "Who needs it",
    text: "Manufacturing plants, mines, power stations, transport fleets, and any facility with combustion processes.",
  },
  {
    icon: "description",
    title: "Deliverables",
    text: "Certified emission test reports, regulatory submission-ready documentation, and compliance certificates ready for EMA.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1230px] px-7 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-headline text-[44px] font-semibold leading-[1.15] text-primary md:text-[52px]">
              Services
            </h1>
            <p className="mt-6 text-[16px] text-slate-500">
              Comprehensive environmental monitoring and compliance solutions for
              factories, mines, power stations, and transport fleets.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <QuoteCta />
              <Link
                href="/how-we-work"
                className="rounded-md border border-slate-300 bg-white px-6 py-2.5 text-[14px] font-medium text-primary"
              >
                How We Work
              </Link>
            </div>
          </div>
          <Image
            src="/images/engineer.png"
            alt="Air monitoring on site"
            width={1200}
            height={800}
            className="aspect-[16/11] w-full rounded-xl object-cover shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1230px] px-7 pb-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-7">
              <span className="material-symbols-outlined text-[22px] text-primary" style={iconStyle}>
                {service.icon}
              </span>
              <h2 className="mt-4 font-headline text-[22px] font-semibold text-primary">
                {service.title}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
            Air & Stack Emissions
          </h2>
          <p className="mt-3 text-[16px] text-slate-500">Precision testing for cleaner industry.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {detail.map((item) => (
              <article key={item.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-7">
                <span className="material-symbols-outlined mt-0.5 text-[22px] text-primary" style={iconStyle}>
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-headline text-[22px] font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to ensure your compliance?" />
    </main>
  );
}
