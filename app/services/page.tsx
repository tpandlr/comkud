import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SitePhotos } from "@/components/SitePhotos";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | COMKUD Analytical Solutions",
  description:
    "Air emissions monitoring, environmental monitoring, consultancy, laboratory analysis, training and technical reporting.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        body="Air emissions testing and environmental monitoring first, with consultancy, laboratory analysis, training and technical reporting around them."
        secondaryHref="/industries"
        secondaryLabel="Industries"
      />

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="stagger-item card-lift rounded-2xl border border-surface-container bg-white p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                </span>
                <p className="eyebrow mt-5 text-secondary">
                  {service.emphasis === "primary" ? "Primary" : "Also offered"} 0{i + 1}
                </p>
                <h2 className="font-headline mt-2 text-[22px] font-bold text-primary">{service.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-on-surface-variant">{service.summary}</p>
                <ul className="mt-4 space-y-2 text-[14px] text-on-surface-variant">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <SitePhotos heading="Instruments we use" />
      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
