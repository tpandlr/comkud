import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SplitLine } from "@/components/MotionText";
import { commitments, companyAddress, missionVision, quotationEmail, whoWeAre } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | COMKUD Analytical Solutions",
  description:
    "Learn about Comkud's vision, mission and values. Analytical and chemical expertise in Zimbabwe.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Us" body="Analytical and chemical expertise in Zimbabwe." />

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
          <p className="eyebrow text-secondary">{whoWeAre.title}</p>
          {whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-3xl text-[16px] leading-relaxed text-on-surface-variant">
              {paragraph}
            </p>
          ))}
          <dl className="mt-10 grid gap-4 text-[14px] sm:grid-cols-2">
            <div className="stagger-item rounded-2xl border border-surface-container bg-white p-5">
              <dt className="eyebrow text-outline">Company</dt>
              <dd className="mt-2 font-semibold text-primary">Comkud Analytical Solutions</dd>
            </div>
            <div className="stagger-item rounded-2xl border border-surface-container bg-white p-5">
              <dt className="eyebrow text-outline">Address</dt>
              <dd className="mt-2 font-semibold text-primary">{companyAddress}</dd>
            </div>
            <div className="stagger-item rounded-2xl border border-surface-container bg-white p-5 sm:col-span-2">
              <dt className="eyebrow text-outline">Contact</dt>
              <dd className="mt-2 font-semibold text-primary">{quotationEmail}</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="bg-white py-16">
        <Reveal>
          <div className="mx-auto max-w-[1320px] px-4 lg:px-10">
            <p className="eyebrow text-secondary">Purpose</p>
            <SplitLine
              as="h2"
              className="font-headline mt-2 text-[32px] font-bold text-primary"
              text="Mission & vision"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {missionVision.map((item) => (
                <article
                  key={item.label}
                  className="stagger-item card-lift rounded-2xl border border-surface-container p-7"
                >
                  <h3 className="font-headline text-[22px] font-bold text-primary">{item.label}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-on-surface-variant">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
        <Reveal>
          <p className="eyebrow text-secondary">Culture</p>
          <SplitLine
            as="h2"
            className="font-headline mt-2 text-[32px] font-bold text-primary"
            text="Our values"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item) => (
              <article
                key={item.title}
                className="stagger-item card-lift rounded-2xl border border-surface-container bg-white p-7"
              >
                <h3 className="font-headline text-[22px] font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand title="Need a reliable analytical partner?" />
    </main>
  );
}
