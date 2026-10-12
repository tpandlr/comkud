import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteCta } from "@/components/QuoteCta";
import { SitePhotos } from "@/components/SitePhotos";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | COMKUD Analytical Solutions",
  description:
    "Explore Comkud's laboratory testing, chemical production, equipment installation and consulting services.",
};

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

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
              From the laboratory bench to the production floor, Comkud offers an
              integrated set of analytical and technical services.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <QuoteCta />
              <Link
                href="/industries"
                className="rounded-md border border-slate-300 bg-white px-6 py-2.5 text-[14px] font-medium text-primary"
              >
                Industries
              </Link>
            </div>
          </div>
          <Image
            src="/images/s360.jpg"
            alt="S360 multi-gas analyser"
            width={900}
            height={1200}
            className="aspect-[16/11] w-full rounded-xl object-cover object-center shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1230px] px-7 pb-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-7">
              <span className="material-symbols-outlined text-[22px] text-primary" style={iconStyle}>
                {service.icon}
              </span>
              <h2 className="mt-4 font-headline text-[22px] font-semibold text-primary">
                {service.title}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-slate-500">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <SitePhotos heading="Instruments we use" />

      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
