import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Environmental consultancy and emissions monitoring for mining, agriculture, manufacturing, food, energy and research in Zimbabwe.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        title="Industries"
        body="Every sector has its own quality demands. Comkud’s analytical services support the industries driving Zimbabwe’s economy."
      />

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <article
                key={item.title}
                className="stagger-item card-lift rounded-2xl border border-surface-container bg-white p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-container text-secondary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </span>
                <h2 className="font-headline mt-4 text-[22px] font-bold text-primary">{item.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-[16px] text-on-surface-variant">
            Don’t see your sector? Contact us. If it needs analysis, we can probably help.
          </p>
        </Reveal>
      </section>

      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
