"use client";

import { useEffect, useRef, useState } from "react";
import { MotionArmedContext } from "@/components/MotionText";

type RevealProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 0px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <MotionArmedContext.Provider value={visible}>
      <div ref={ref} className={`reveal ${visible ? "is-in" : ""} ${className}`}>
        {children}
      </div>
    </MotionArmedContext.Provider>
  );
}
