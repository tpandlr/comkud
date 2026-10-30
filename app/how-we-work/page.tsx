import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description: "Tell us your need, we scope and quote, we deliver, you receive results.",
};

export default function HowWeWorkPage() {
  return (
    <main>
      <PageHero
        title="How it works"
        body="Tell us what you need to test, make or measure. We’ll tell you how we can help."
        image="/images/field-analysis.jpg"
      />
      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="stagger-item card-lift rounded-2xl border border-surface-container bg-white p-7"
              >
                <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2.5 text-[13px] font-bold text-white">
                  {step.number}
                </span>
                <h2 className="font-headline mt-4 text-[22px] font-bold text-primary">{step.title}</h2>
                <p className="mt-2 text-[14px] text-on-surface-variant">{step.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
