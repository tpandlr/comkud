import { quotationEmail } from "@/lib/content";

const facilities = [
  "Manufacturing plant",
  "Mine",
  "Power station",
  "Transport fleet",
  "Other",
];

const neededServices = [
  "Air Emissions Monitoring",
  "Stack Emissions Testing",
  "Ambient Air Quality Monitoring",
  "Environmental Audits",
  "Environmental Impact Assessment (EIA)",
  "Compliance Assessments",
];

type QuoteFormProps = Readonly<{
  sent?: boolean;
}>;

const field =
  "w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 py-2.5 text-[14px] text-primary outline-none transition-colors focus:border-primary";

const selectField = `${field} appearance-none bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat pr-10`;

export function QuoteForm({ sent = false }: QuoteFormProps) {
  if (sent) {
    return (
      <div id="quotation" className="min-w-0 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <h3 className="font-headline text-[22px] font-semibold text-primary">Request sent</h3>
        <p className="mt-2 text-[14px] text-slate-500">
          Your quotation request was submitted to{" "}
          <a href={`mailto:${quotationEmail}`} className="text-primary underline-offset-2 hover:underline">
            {quotationEmail}
          </a>
          . We deliver a detailed, itemised proposal within 48 hours.
        </p>
      </div>
    );
  }

  const nextUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/contact?sent=1#quotation`;

  return (
    <form
      id="quotation"
      action={`https://formsubmit.co/${quotationEmail}`}
      method="POST"
      className="min-w-0 rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      <input type="hidden" name="_subject" value="Quotation request — COMKUD Analytical Solutions" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <h3 className="font-headline text-[22px] font-semibold text-primary">Request a Quotation</h3>
      <p className="mt-2 text-[14px] text-slate-500">
        Submits to{" "}
        <a href={`mailto:${quotationEmail}`} className="text-primary underline-offset-2 hover:underline">
          {quotationEmail}
        </a>
        . We respond with a proposal within 48 hours.
      </p>
      <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-[13px] font-medium text-slate-600">
          Name
          <input required name="name" autoComplete="name" className={field} />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[13px] font-medium text-slate-600">
          Company
          <input required name="company" autoComplete="organization" className={field} />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[13px] font-medium text-slate-600">
          Email
          <input required type="email" name="email" autoComplete="email" className={field} />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[13px] font-medium text-slate-600">
          Phone
          <input required name="phone" autoComplete="tel" className={field} />
        </label>
        <label className="grid min-w-0 gap-1.5 text-[13px] font-medium text-slate-600">
          Facility type
          <select
            required
            name="facility"
            defaultValue=""
            className={selectField}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%230B3A82' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Select
            </option>
            {facilities.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-1.5 text-[13px] font-medium text-slate-600">
          Service needed
          <select
            required
            name="service"
            defaultValue=""
            className={selectField}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%230B3A82' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Select
            </option>
            {neededServices.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-1.5 text-[13px] font-medium text-slate-600 sm:col-span-2">
          Message
          <textarea
            required
            name="message"
            rows={5}
            className={`${field} resize-y`}
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 rounded-md bg-primary px-6 py-2.5 text-[14px] font-medium text-white"
      >
        Request a Quotation
      </button>
    </form>
  );
}
