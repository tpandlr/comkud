import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SplitLine } from "@/components/MotionText";
import { equipmentPhotos, fieldPhotos } from "@/lib/content";

export function SitePhotos({ heading = "On site" }: { heading?: string }) {
  return (
    <section className="bg-surface">
      <Reveal>
        <div className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
          <SplitLine
            as="h2"
            className="font-headline text-[36px] font-semibold text-primary md:text-[40px]"
            text={heading}
          />
          <p className="mt-3 text-[16px] text-slate-500">Field work and the instruments we use on site.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {equipmentPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="stagger-item img-zoom overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={1200}
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="px-5 py-4 font-headline text-[18px] font-semibold text-primary">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fieldPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="stagger-item img-zoom overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={1200}
                  className="aspect-[3/4] w-full object-cover"
                />
                <figcaption className="px-5 py-4 text-[14px] font-medium text-primary">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
