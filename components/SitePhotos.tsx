import Image from "next/image";
import { PhotoRotate } from "@/components/PhotoRotate";
import { Reveal } from "@/components/Reveal";
import { SplitLine } from "@/components/MotionText";
import { equipmentPhotos, fieldPhotos } from "@/lib/content";

export function SitePhotos({ heading = "On site" }: { heading?: string }) {
  return (
    <section className="bg-surface">
      <Reveal>
        <div className="mx-auto max-w-[1320px] px-4 py-16 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SplitLine
                as="h2"
                className="font-headline text-[36px] font-semibold text-primary md:text-[40px]"
                text={heading}
              />
              <p className="mt-3 max-w-md text-[16px] text-slate-500">
                Instruments we use on site, with environmental analysis from the field.
              </p>
            </div>
            <PhotoRotate slides={equipmentPhotos} compact className="w-full lg:col-span-7" />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="aspect-[4/3] w-full object-cover"
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
