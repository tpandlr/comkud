import Link from "next/link";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { HeroSlideBar, HeroStage } from "@/components/HeroSlideshow";
import { QuoteCta } from "@/components/QuoteCta";
import { Fade, SplitLine } from "@/components/MotionText";
import { Reveal } from "@/components/Reveal";
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
        <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center px-4 pb-20 pt-24 lg:px-10 lg:pb-24 lg:pt-28">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <Fade className="inline-flex">
                <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
                  Analytical & chemical solutions · Zimbabwe
                </p>
              </Fade>
              <h1 className="font-headline mt-6 max-w-xl text-[34px] leading-[1.08] text-white sm:text-[44px] lg:text-[52px]">
                <SplitLine as="span" className="block" text="Precision Analysis." delay={80} />
                <SplitLine as="span" className="block" text="Reliable Results." delay={220} />
                <SplitLine as="span" className="block" text="Real Confidence." delay={360} />
              </h1>
              <Fade delay={520} className="mt-5 max-w-lg text-[15px] leading-[1.65] text-white/70 sm:text-[16px]">
                Laboratory testing, chemical solutions, equipment support and technical consulting
                for Zimbabwe’s industries.
              </Fade>
              <Fade delay={640} className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <Link href="/services" className="btn btn-light">
                  Explore Our Services
                </Link>
                <QuoteCta variant="ghost" />
              </Fade>
              <HeroSlideBar />
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <Fade delay={280} className="w-full max-w-[400px] rounded-2xl bg-white p-2 text-on-surface shadow-[0_28px_70px_-16px_rgba(11,25,44,0.5)]">
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
              </Fade>
            </div>
          </div>
        </div>
        </HeroStage>
      </section>

      <section className="relative z-10 mx-auto max-w-[1320px] px-4 lg:px-10">
        <Reveal>
        <div className="-mt-7 grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-20px_rgba(15,40,78,0.25)] sm:grid-cols-3">
          {valuePoints.map((item, i) => (
            <article
              key={item.title}
              className="stagger-item flex gap-4 border-b border-slate-100 px-6 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
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
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative img-zoom rounded-2xl shadow-xl">
            <Image
              src="/images/who-plant.jpg"
              alt="Manufacturing plant worker in a worksuit"
              width={900}
              height={700}
              className="aspect-[16/11] w-full rounded-2xl object-cover object-[center_35%]"
            />
            <p className="mt-3 text-[13px] text-outline">{companyAddress}</p>
          </div>
          <div>
            <p className="eyebrow text-secondary">Who we are</p>
            <SplitLine
              as="h2"
              className="font-headline mt-2 text-[32px] font-bold text-primary md:text-[40px]"
              text="Zimbabwe’s scientific partner for industrial certainty"
            />
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
        </Reveal>
      </section>

      <section id="services" className="bg-white py-16">
        <Reveal>
        <div className="mx-auto max-w-[1320px] px-4 lg:px-10">
          <p className="eyebrow text-secondary">What we do</p>
          <SplitLine
            as="h2"
            className="font-headline mt-2 text-[32px] font-bold text-primary md:text-[40px]"
            text="From the laboratory bench to the production floor"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href="/services"
                className="stagger-item card-lift flex flex-col rounded-2xl border border-surface-container bg-surface p-6"
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
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-deep py-16 text-white lg:py-20">
        <Reveal>
        <div className="mx-auto grid max-w-[1320px] items-center gap-10 px-4 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="eyebrow text-ochre">Field operations</p>
            <SplitLine
              as="h2"
              className="font-headline mt-2 text-[32px] font-bold md:text-[40px]"
              text="S360 field analysis & EMA vehicle exhaust"
            />
            <p className="mt-4 text-[16px] leading-relaxed text-white/70">
              Calibrated instruments used on site, including the S360 and EMA vehicle exhaust accredited analyser.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {equipmentPhotos.map((photo) => (
                <article
                  key={photo.src}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ochre/15 text-ochre">
                    <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
                  </span>
                  <p className="font-headline text-[15px] font-bold">{photo.caption}</p>
                </article>
              ))}
            </div>
            <QuoteCta variant="band" className="mt-8" />
          </div>
          <div className="grid min-h-[26rem] grid-cols-2 grid-rows-2 gap-3 lg:col-span-7 lg:h-[520px] lg:min-h-0">
            <div className="img-zoom relative row-span-2 overflow-hidden rounded-2xl">
              <Image
                src={fieldPhotos[0].src}
                alt={fieldPhotos[0].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 py-4 text-[13px] font-medium">
                {fieldPhotos[0].caption}
              </p>
            </div>
            {fieldPhotos.slice(1).map((photo) => (
              <div key={photo.src} className="img-zoom relative overflow-hidden rounded-2xl">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="30vw" />
                <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 py-3 text-[12px] font-medium">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
        <p className="eyebrow text-center text-secondary">Industries</p>
        <SplitLine
          as="h2"
          className="font-headline mt-2 text-center text-[32px] font-bold text-primary md:text-[40px]"
          text="Industries we serve"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <Link
              key={item.title}
              href="/industries"
              className="stagger-item card-lift rounded-2xl border border-surface-container bg-white p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container text-secondary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </span>
              <h3 className="font-headline mt-4 text-[16px] font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-[13px] text-on-surface-variant">{item.text}</p>
            </Link>
          ))}
        </div>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <Reveal>
        <div className="mx-auto max-w-[1320px] px-4 lg:px-10">
          <p className="eyebrow text-secondary">Process</p>
          <SplitLine
            as="h2"
            className="font-headline mt-2 text-[32px] font-bold text-primary md:text-[40px]"
            text="How it works"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="stagger-item rounded-2xl border border-surface-container p-6">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                  {step.number.replace(/^0/, "")}
                </span>
                <h3 className="font-headline mt-4 text-[18px] font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-[14px] text-on-surface-variant">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
        <p className="eyebrow text-secondary">Why Comkud</p>
        <SplitLine
          as="h2"
          className="font-headline mt-2 text-[32px] font-bold text-primary md:text-[40px]"
          text="Why choose Comkud"
        />
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <article key={item.title} className="stagger-item card-lift rounded-2xl border border-surface-container bg-white p-6">
              <span className="material-symbols-outlined text-secondary" style={iconStyle}>
                {item.icon}
              </span>
              <h3 className="font-headline mt-3 text-[18px] font-bold text-primary">{item.title}</h3>
              <p className="mt-2 text-[14px] text-on-surface-variant">{item.text}</p>
            </article>
          ))}
        </div>
        </Reveal>
      </section>

      <CtaBand title="Need a reliable analytical partner for your operation?" />
    </main>
  );
}
