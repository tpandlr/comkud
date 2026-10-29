import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { SplitLine } from "@/components/MotionText";
import { companyAddress, nextSteps, publicEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote for emissions testing, environmental monitoring or consultancy. Email info@comkud.co.zw.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Get in touch"
        body="Have a sample to test, a product to source or a technical question? We’d like to hear from you."
        secondaryHref={`mailto:${publicEmail}`}
        secondaryLabel={`Email ${publicEmail}`}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1320px] items-start gap-10 px-4 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-10">
          <QuoteForm />
          <Reveal>
            <p className="text-[14px] text-on-surface-variant">{companyAddress}</p>
            <p className="mt-2 text-[14px] font-medium text-primary">
              <a href={`mailto:${publicEmail}`}>{publicEmail}</a>
            </p>
            <SplitLine
              as="h2"
              className="font-headline mt-6 text-[32px] font-bold text-primary"
              text="Next steps"
            />
            <ol className="mt-6 space-y-4">
              {nextSteps.map((step) => (
                <li
                  key={step.number}
                  className="stagger-item flex gap-4 rounded-2xl border border-surface-container bg-surface p-5"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                    {step.number}
                  </span>
                  <div>
                    <p className="font-headline text-[18px] font-bold text-primary">{step.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-on-surface-variant">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
