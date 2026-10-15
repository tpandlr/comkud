"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";

const SlideContext = createContext<{
  index: number;
  setIndex: (index: number) => void;
} | null>(null);

function useSlideIndex() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  return { index, setIndex };
}

function Slides({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 z-0">
      {heroSlides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-ink via-deep/90 to-deep/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-deep/40" />
    </div>
  );
}

export function HeroStage({ children }: { children: React.ReactNode }) {
  const value = useSlideIndex();
  return (
    <SlideContext.Provider value={value}>
      <Slides index={value.index} />
      {children}
    </SlideContext.Provider>
  );
}

export function HeroSlideBar() {
  const ctx = useContext(SlideContext);
  if (!ctx) return null;
  const { index, setIndex } = ctx;

  return (
    <div className="mt-10 flex items-center gap-3">
      {heroSlides.map((slide, i) => (
        <button
          key={slide.src}
          type="button"
          aria-label={`Show ${slide.caption}`}
          className={`h-1 rounded-full transition-all ${
            i === index ? "w-7 bg-ochre" : "w-2.5 bg-white/35"
          }`}
          onClick={() => setIndex(i)}
        />
      ))}
      <p className="font-ui text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
        {heroSlides[index].caption}
      </p>
    </div>
  );
}

export function HeroSlideshow() {
  const { index } = useSlideIndex();
  return <Slides index={index} />;
}
