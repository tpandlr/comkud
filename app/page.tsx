import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { SitePhotos } from "@/components/SitePhotos";
import { advantages, industries, processSteps, services, valuePoints, whoWeAre } from "@/lib/content";

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-[1230px] px-7 py-10 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-headline text-[32px] font-semibold leading-[1.2] text-primary sm:text-[40px] md:text-[52px]">
              <span className="block">Precision Analysis.</span>
              <span className="block">Reliable Results.</span>
              <span className="block">Real Confidence.</span>
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500 md:mt-6 md:text-[16px]">
              Comkud Analytical Solutions provides laboratory testing, chemical
              solutions, equipment support and technical consulting for
              Zimbabwe’s industries, from our base in Chinhoyi.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/services"
                className="rounded-md bg-primary px-6 py-2.5 text-center text-[14px] font-medium text-white"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-slate-300 bg-white px-6 py-2.5 text-center text-[14px] font-medium text-primary"
              >
                Talk to Our Team
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {valuePoints.map((item) => (
                <span
                  key={item.title}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-[13px] text-slate-600"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary" style={iconStyle}>
                    {item.icon}
                  </span>
                  {item.title}
                </span>
              ))}
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
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {valuePoints.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-7">
                <h3 className="font-headline text-[22px] font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1230px] px-7 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-headline text-[36px] font-semibold leading-[1.2] text-primary md:text-[40px]">
              {whoWeAre.title}
            </h2>
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-[16px] leading-relaxed text-slate-500">
                {paragraph}
              </p>
            ))}
          </div>
          <Image
            src="/images/stack-sampling.jpg"
            alt="Technician sampling on site"
            width={900}
            height={1200}
            className="aspect-[16/11] w-full rounded-xl object-cover object-[center_20%] shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
          />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
            What we do
          </h2>
          <p className="mt-3 max-w-xl text-[16px] text-slate-500">
            From the laboratory bench to the production floor.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="rounded-xl border border-slate-200 bg-white p-7"
              >
                <span className="material-symbols-outlined text-[22px] text-primary" style={iconStyle}>
                  {service.icon}
                </span>
                <h3 className="mt-4 font-headline text-[22px] font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500">{service.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1230px] px-7 py-20">
        <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
          Industries we serve
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.map((item) => (
            <Link
              key={item.title}
              href="/industries"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-[13px] text-slate-600"
            >
              <span className="material-symbols-outlined text-[16px] text-primary" style={iconStyle}>
                {item.icon}
              </span>
              {item.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto max-w-[1230px] px-7 py-20">
          <h2 className="font-headline text-[36px] font-semibold text-primary md:text-[40px]">
            How it works
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          Why choose Comkud
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {advantages.map((item) => (
            <article key={item.title} className="flex gap-4 rounded-xl border border-slate-200 p-7">
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
      </section>

      <SitePhotos heading="Equipment & field work" />

      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
