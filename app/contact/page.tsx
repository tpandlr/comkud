import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { QuoteForm } from "@/components/QuoteForm";
import { companyAddress, nextSteps, quotationEmail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Comkud Analytical Solutions | Chinhoyi",
  description:
    "Request a quote or ask a question. Visit us at 7557 Millennium Park, Chinhoyi.",
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
              Get in touch
            </h1>
            <p className="mt-6 text-[16px] text-slate-500">
              Have a sample to test, a product to source or a technical question?
              We’d like to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#quotation"
                className="rounded-md bg-primary px-6 py-2.5 text-[14px] font-medium text-white"
              >
                Request a Quote
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
                <dt className="text-[12px] font-medium uppercase tracking-wide text-slate-500">Address</dt>
                <dd className="mt-1.5 text-primary">{companyAddress}</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="text-[12px] font-medium uppercase tracking-wide text-slate-500">Email</dt>
                <dd className="mt-1.5 text-primary">{quotationEmail}</dd>
              </div>
              <div className="bg-white p-4 sm:col-span-2">
                <dt className="text-[12px] font-medium uppercase tracking-wide text-slate-500">Services</dt>
                <dd className="mt-1.5 text-primary">
                  Laboratory Testing · Chemical Supply · Equipment & Installation · Consulting
                </dd>
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
