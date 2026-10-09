import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteCta } from "@/components/QuoteCta";
import { commitments, missionVision, whoWeAre } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | COMKUD Analytical Solutions",
  description:
    "Who we are, our mission and vision, and our commitments to accuracy, professionalism, integrity, and sustainability.",
};

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1230px] px-7 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-headline text-[44px] font-semibold leading-[1.15] text-primary md:text-[52px]">
              About COMKUD
            </h1>
            <p className="mt-6 text-[16px] text-slate-500">
              Zimbabwe’s Environmental Monitoring Partner
            </p>
            <p className="mt-2 text-[16px] text-slate-500">
              Environmental Monitoring · Compliance · Analytical Services
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
            src="/images/engineer.png"
            alt="Engineer conducting air monitoring on site"
            width={1200}
            height={800}
            className="aspect-[16/11] w-full rounded-xl object-cover shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
            priority
          />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <h2 className="font-headline text-[36px] font-semibold leading-[1.2] text-primary md:text-[40px]">
            {whoWeAre.title}
          </h2>
          <div className="mt-6 max-w-3xl">
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-[16px] leading-relaxed text-slate-500">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-[13px] text-slate-600">
              <span className="material-symbols-outlined text-[16px] text-primary" style={iconStyle}>
                check_circle
              </span>
              3+ Years Experience
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-[13px] text-slate-600">
              <span className="material-symbols-outlined text-[16px] text-primary" style={iconStyle}>
                verified_user
              </span>
              100% EMA Aligned
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-[13px] text-slate-600">
              <span className="material-symbols-outlined text-[16px] text-primary" style={iconStyle}>
                location_on
              </span>
              Zimbabwe Based
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1230px] px-7 py-20">
        <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
          Purpose and direction
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {missionVision.map((item) => (
            <article key={item.label} className="rounded-xl border border-slate-200 p-7">
              <span className="material-symbols-outlined text-[22px] text-primary" style={iconStyle}>
                {item.icon}
              </span>
              <h3 className="mt-4 font-headline text-[22px] font-semibold text-primary">{item.label}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-500">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
            Our commitment to you
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-7">
                <span className="material-symbols-outlined text-[22px] text-primary" style={iconStyle}>
                  {item.icon}
                </span>
                <h3 className="mt-4 font-headline text-[22px] font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to ensure your compliance?" />
    </main>
  );
}
