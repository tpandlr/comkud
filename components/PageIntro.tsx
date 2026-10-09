type PageIntroProps = Readonly<{
  title: string;
  body: string;
  center?: boolean;
}>;

export function PageIntro({ title, body, center = false }: PageIntroProps) {
  return (
    <section className="mx-auto max-w-[1230px] px-7 py-16 md:py-20">
      <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <h1 className="font-headline text-[44px] font-semibold leading-[1.15] text-primary md:text-[52px]">
          {title}
        </h1>
        <p className="mt-6 text-[16px] text-slate-500">{body}</p>
      </div>
    </section>
  );
}
