import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SplitLine } from "@/components/MotionText";
import { advantages, processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why Comkud | COMKUD Analytical Solutions",
  description:
    "Scientific rigour, an integrated offering, practical focus, local presence in Zimbabwe, and clear communication.",
};

const iconStyle = { fontVariationSettings: "'FILL' 1" } as const;

export default function WhyUsPage() {
  return (
    <main>
      <PageHero title="Why Comkud" body="A practical analytical partner in Zimbabwe." />

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="stagger-item card-lift rounded-2xl border border-surface-container bg-white p-7"
              >
                <span className="material-symbols-outlined text-secondary" style={iconStyle}>
                  {item.icon}
                </span>
                <h2 className="font-headline mt-3 text-[22px] font-bold text-primary">{item.title}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-on-surface-variant">{item.text}</p>
              </article>
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
              className="font-headline mt-2 text-[32px] font-bold text-primary"
              text="How it works"
            />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="stagger-item rounded-2xl border border-surface-container p-7"
                >
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-primary px-2.5 text-[13px] font-bold text-white">
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

      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
