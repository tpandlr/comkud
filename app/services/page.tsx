import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { SitePhotos } from "@/components/SitePhotos";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services | COMKUD Analytical Solutions",
  description:
    "Explore Comkud's laboratory testing, chemical production, equipment installation and consulting services.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Services"
        body="From the laboratory bench to the production floor, Comkud offers an integrated set of analytical and technical services."
        secondaryHref="/industries"
        secondaryLabel="Industries"
      />

      <section className="mx-auto max-w-[1320px] px-4 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, i) => (
            <article key={service.title} className="card-lift rounded-xl border border-surface-container bg-white p-7">
              <p className="eyebrow text-secondary">Division 0{i + 1}</p>
              <h2 className="font-headline mt-2 text-[22px] font-bold text-primary">{service.title}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-on-surface-variant">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-[14px] text-on-surface-variant">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {point}
                  </li>
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
