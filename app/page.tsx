import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { QuoteCta } from "@/components/QuoteCta";
import { advantages, processSteps, services } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-[1230px] px-7 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-headline text-[44px] font-semibold leading-[1.15] text-primary md:text-[52px]">
              Zimbabwe’s Environmental
              <br />
              Monitoring Partner
            </h1>
            <p className="mt-6 text-[16px] text-slate-500">
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
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-[13px] text-slate-600">
                <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                3+ Years Experience
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-[13px] text-slate-600">
                <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
                100% EMA Aligned
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-[13px] text-slate-600">
                <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
                Zimbabwe Based
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/plant-night.jpg"
              alt="Industrial plant at night"
              width={1400}
              height={900}
              className="aspect-[16/11] w-full rounded-xl object-cover shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto grid max-w-[1230px] grid-cols-1 items-center gap-12 px-7 py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-headline text-[36px] font-semibold leading-[1.2] text-primary md:text-[40px]">
              Who we are
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-slate-500">
              COMKUD Analytical Solutions is an environmental and analytical
              consultancy company focused on sustainability, industrial
              monitoring, and environmental compliance.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-slate-500">
              We partner with industries across Zimbabwe to deliver accurate,
              reliable, and regulation-aligned environmental data — enabling
              factories, mines, power stations, and transport fleets to pass EMA
              compliance and receive certified reports.
            </p>
          </div>
          <Image
            src="/images/engineer.png"
            alt="Engineer conducting air monitoring on site"
            width={1200}
            height={800}
            className="aspect-[16/11] w-full rounded-xl object-cover shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1230px] px-7 py-20">
        <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
          Our services
        </h2>
        <p className="mt-3 max-w-xl text-[16px] text-slate-500">
          Comprehensive environmental monitoring and compliance solutions
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="rounded-xl border border-slate-200 bg-white p-7"
            >
              <span
                className="material-symbols-outlined text-[22px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {service.icon}
              </span>
              <h3 className="mt-4 font-headline text-[22px] font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
            How we work
          </h2>
          <p className="mt-3 text-[16px] text-slate-500">From enquiry to certified report</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-xl border border-slate-200 bg-white p-7">
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2.5 text-[13px] font-medium text-white">
                  {step.number.replace(/^0/, "")}
                </span>
                <h3 className="mt-4 font-headline text-[22px] font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1230px] px-7 py-20">
        <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
          Why choose COMKUD
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {advantages.map((item) => (
            <article key={item.title} className="flex gap-4 rounded-xl border border-slate-200 p-7">
              <span
                className="material-symbols-outlined mt-0.5 text-[22px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <div>
                <h3 className="font-headline text-[22px] font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <span className="inline-flex rounded-md border border-slate-200 bg-white px-4 py-2 text-[13px] text-slate-600">
            Launching 2026
          </span>
          <h2 className="mt-5 font-headline text-[36px] font-semibold text-primary md:text-[40px]">
            Coming soon
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 bg-white p-7">
              <h3 className="font-headline text-[22px] font-semibold text-primary">
                Sound & Noise Monitoring
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                Environmental noise assessment for industrial sites, construction
                zones, and community impact, with EMA-compliant reports.
              </p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-7">
              <h3 className="font-headline text-[22px] font-semibold text-primary">
                Dust & Particulate Matter
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
                PM2.5, PM10 and total suspended particulates monitoring, reported
                to WHO and EMA guidelines.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to ensure your compliance?" />
    </main>
  );
}
