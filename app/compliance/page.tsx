import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { commitments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Safety and quality",
  description: "Safe practice for our people, clients and environment.",
};

export default function CompliancePage() {
  return (
    <main>
      <PageHero title="Safety & quality" body="Safe practice for our people, clients and environment." />
      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {commitments.map((item) => (
              <article
                key={item.title}
                className="stagger-item card-lift rounded-2xl border border-surface-container bg-white p-7"
              >
                <h2 className="font-headline text-[22px] font-bold text-primary">{item.title}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
