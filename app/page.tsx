import Link from "next/link";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { HeroSlideBar, HeroStage } from "@/components/HeroSlideshow";
import { QuoteCta } from "@/components/QuoteCta";
import {
  advantages,
  companyAddress,
  equipmentPhotos,
  fieldPhotos,
  industries,
  processSteps,
  services,
  valuePoints,
  whoWeAre,
} from "@/lib/content";

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-[48vh] flex-col overflow-hidden bg-deep text-white lg:min-h-[580px]">
        <HeroStage>
        <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center px-4 pb-20 pt-14 lg:px-10 lg:pb-24 lg:pt-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
                Analytical & chemical solutions · Chinhoyi
              </p>
              <h1 className="font-headline mt-6 max-w-xl text-[34px] leading-[1.08] text-white sm:text-[44px] lg:text-[52px]">
                <span className="block">Precision Analysis.</span>
                <span className="block">Reliable Results.</span>
                <span className="block">Real Confidence.</span>
              </h1>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.65] text-white/70 sm:text-[16px]">
                Laboratory testing, chemical solutions, equipment support and technical consulting
                for Zimbabwe’s industries, from our base in Chinhoyi.
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Link href="/services" className="btn btn-light">
                  Explore Our Services
                </Link>
                <QuoteCta variant="ghost" />
              </div>
              <HeroSlideBar />
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <div className="w-full max-w-[400px] rounded-2xl bg-white p-2 text-on-surface shadow-[0_28px_70px_-16px_rgba(11,25,44,0.5)]">
                <div className="flex items-center justify-between px-4 py-3">
                  <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Get started
                  </p>
                </div>
                <div className="flex flex-col gap-1 pb-1">
                  {[
                    { href: "/contact#quotation", icon: "biotech", title: "Laboratory testing", text: "Request a quote" },
                    { href: "/services", icon: "science", title: "Chemical supply", text: "Production and products" },
                    { href: "/services", icon: "precision_manufacturing", title: "Equipment", text: "Sourcing and setup" },
                    { href: "/contact", icon: "support_agent", title: "Consulting", text: "Talk to the team" },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef3fb] text-action">
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="font-ui block text-[14px] font-semibold tracking-tight text-primary">
                          {item.title}
                        </span>
                        <span className="block text-[12px] text-slate-400">{item.text}</span>
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-action">
                        chevron_right
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </HeroStage>
      </section>

      <section className="relative z-10 mx-auto max-w-[1320px] px-4 lg:px-10">
        <div className="-mt-7 grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(15,40,78,0.25)] sm:grid-cols-3">
          {valuePoints.map((item, i) => (
            <article
              key={item.title}
              className="flex gap-4 border-b border-slate-100 px-6 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <span className="font-ui pt-0.5 text-[12px] font-semibold tracking-[0.12em] text-slate-300">
                0{i + 1}
              </span>
              <div>
                <h2 className="font-headline text-[15px] tracking-tight text-primary">{item.title}</h2>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/field-analysis.jpg"
              alt="Field analysis"
              width={900}
              height={700}
              className="aspect-[16/11] w-full rounded-xl object-cover object-[center_20%] shadow-xl"
            />
            <p className="mt-3 text-[13px] text-outline">{companyAddress}</p>
          </div>
          <div>
            <p className="eyebrow text-secondary">Who we are</p>
            <h2 className="font-headline mt-2 text-[32px] font-bold text-primary md:text-[40px]">
              Zimbabwe’s scientific partner for industrial certainty
            </h2>
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-[16px] leading-relaxed text-on-surface-variant">
                {paragraph}
              </p>
            ))}
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-secondary">
              About Comkud
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-10">
          <p className="eyebrow text-secondary">What we do</p>
          <h2 className="font-headline mt-2 text-[32px] font-bold text-primary md:text-[40px]">
            From the laboratory bench to the production floor
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href="/services"
                className="card-lift flex flex-col rounded-xl border border-surface-container bg-surface p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                </span>
                <p className="eyebrow mt-5 text-secondary">Division 0{i + 1}</p>
                <h3 className="font-headline mt-1 text-[20px] font-bold text-primary">{service.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-on-surface-variant">
                  {service.summary}
                </p>
                <span className="mt-5 border-t border-surface-container pt-4 text-[14px] font-semibold text-secondary">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep py-16 text-white">
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow text-ochre">Field operations</p>
            <h2 className="font-headline mt-2 text-[32px] font-bold md:text-[40px]">
              S360 field analysis & EMA vehicle exhaust
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/70">
              Calibrated instruments used on site, including the S360 and EMA vehicle exhaust accredited analyser.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {equipmentPhotos.map((photo) => (
                <article key={photo.src} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <p className="font-headline text-[15px] font-bold">{photo.caption}</p>
                </article>
              ))}
            </div>
            <QuoteCta variant="header" className="mt-6" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[...equipmentPhotos, ...fieldPhotos].slice(0, 4).map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={700}
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <p className="eyebrow text-center text-secondary">Industries</p>
        <h2 className="font-headline mt-2 text-center text-[32px] font-bold text-primary md:text-[40px]">
          Industries we serve
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <Link
              key={item.title}
              href="/industries"
              className="card-lift rounded-xl border border-surface-container bg-white p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-secondary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </span>
              <h3 className="font-headline mt-4 text-[16px] font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-[13px] text-on-surface-variant">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1320px] px-4 lg:px-10">
          <p className="eyebrow text-secondary">Process</p>
          <h2 className="font-headline mt-2 text-[32px] font-bold text-primary md:text-[40px]">
            How it works
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-xl border border-surface-container p-6">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                  {step.number.replace(/^0/, "")}
                </span>
                <h3 className="font-headline mt-4 text-[18px] font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-[14px] text-on-surface-variant">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <p className="eyebrow text-secondary">Why Comkud</p>
        <h2 className="font-headline mt-2 text-[32px] font-bold text-primary md:text-[40px]">
          Why choose Comkud
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <article key={item.title} className="card-lift rounded-xl border border-surface-container bg-white p-6">
              <span className="material-symbols-outlined text-secondary" style={iconStyle}>
                {item.icon}
              </span>
              <h3 className="font-headline mt-3 text-[18px] font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-[14px] text-on-surface-variant">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Need a reliable analytical partner for your operation?" />
    </main>
  );
}
