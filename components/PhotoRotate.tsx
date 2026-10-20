"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = Readonly<{
  src: string;
  alt: string;
  caption: string;
}>;

type PhotoRotateProps = Readonly<{
  slides: readonly Slide[];
  className?: string;
  intervalMs?: number;
  compact?: boolean;
}>;

export function PhotoRotate({
  slides,
  className = "",
  intervalMs = 5000,
  compact = false,
}: PhotoRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [intervalMs, slides.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div
        className={`relative bg-deep ${
          compact
            ? "aspect-[16/10] min-h-[200px] sm:min-h-[240px]"
            : "aspect-[16/11] min-h-[280px] sm:min-h-[340px]"
        }`}
      >
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-4 pb-4 pt-16 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-headline text-[15px] font-semibold text-white">{slides[index].caption}</p>
        <div className="flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show ${slide.caption}`}
              aria-current={i === index}
              className={`relative h-12 w-16 overflow-hidden rounded-md transition sm:h-14 sm:w-[4.5rem] ${
                i === index ? "ring-2 ring-ochre ring-offset-2 ring-offset-black/40" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setIndex(i)}
            >
              <Image src={slide.src} alt="" fill className="object-cover" sizes="72px" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
