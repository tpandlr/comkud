import { QuoteCta } from "@/components/QuoteCta";

type CtaBandProps = Readonly<{
  title: string;
  button?: boolean;
}>;

export function CtaBand({ title, button = true }: CtaBandProps) {
  return (
    <section className="bg-surface-container-low px-7 pb-16 pt-4">
      <div className="mx-auto max-w-[1230px] rounded-xl bg-primary px-8 py-14 text-center">
        <h2 className="font-headline text-[36px] font-semibold leading-[1.2] text-white md:text-[40px]">
          {title}
        </h2>
        {button ? <QuoteCta variant="band" /> : null}
      </div>
    </section>
  );
}
