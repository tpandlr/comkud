import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";
import { nextSteps, quotationEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | COMKUD Analytical Solutions",
  description:
    "Request a quotation from COMKUD Analytical Solutions. Zimbabwe environmental consultancy. Proposal within 48 hours.",
};

async function QuoteFormWithStatus({
  searchParams,
}: {
  searchParams: PageProps<"/contact">["searchParams"];
}) {
  const params = await searchParams;
  return <QuoteForm sent={params.sent === "1"} />;
}

export default function ContactPage(props: PageProps<"/contact">) {
  return (
    <main>
      <section className="mx-auto max-w-[1230px] px-7 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-headline text-[44px] font-semibold leading-[1.15] text-primary md:text-[52px]">
              Ready to ensure your compliance?
            </h1>
            <p className="mt-6 text-[16px] text-slate-500">
              Environmental & Analytical Consultancy · Zimbabwe
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#quotation"
                className="rounded-md bg-primary px-6 py-2.5 text-[14px] font-medium text-white"
              >
                Request a Quotation
              </a>
              <a
                href={`mailto:${quotationEmail}`}
                className="rounded-md border border-slate-300 bg-white px-6 py-2.5 text-[14px] font-medium text-primary"
              >
                Email {quotationEmail}
              </a>
            </div>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 text-[14px] sm:grid-cols-2">
              <div className="bg-white p-4">
                <dt className="text-[12px] font-medium uppercase tracking-wide text-slate-500">Industry</dt>
                <dd className="mt-1.5 text-primary">Environmental & Analytical Consultancy</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[12px] font-medium uppercase tracking-wide text-slate-500">Country</dt>
                <dd className="mt-1.5 text-primary">Zimbabwe</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[12px] font-medium uppercase tracking-wide text-slate-500">Services</dt>
                <dd className="mt-1.5 text-primary">
                  Air Emissions · Stack Testing · Ambient Air · EIA · Audits
                </dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[12px] font-medium uppercase tracking-wide text-slate-500">Standards</dt>
                <dd className="mt-1.5 text-primary">EMA / EPA / WHO</dd>
              </div>
            </dl>
          </div>
          <Image
            src="/images/engineer.png"
            alt="Engineer on site"
            width={1200}
            height={800}
            className="aspect-[16/11] w-full rounded-xl object-cover shadow-[0_12px_40px_rgba(11,58,130,0.12)]"
            priority
          />
        </div>
      </section>

      <section className="border-t border-slate-100 bg-surface-container-low">
        <div className="mx-auto grid max-w-[1230px] items-start gap-10 px-7 py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Suspense fallback={<QuoteForm />}>
            <QuoteFormWithStatus searchParams={props.searchParams} />
          </Suspense>
          <div>
            <h2 className="font-headline text-[36px] font-semibold text-primary">Next steps</h2>
            <ol className="mt-8 space-y-5">
              {nextSteps.map((step) => (
                <li key={step.number} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-medium text-white">
                    {step.number}
                  </span>
                  <div>
                    <p className="font-headline text-[18px] font-semibold text-primary">{step.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-slate-500">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
